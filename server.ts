import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'VietSpeak B05',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Gemini AI Tutor endpoint
app.post('/api/gemini/tutor', async (req: Request, res: Response): Promise<void> => {
  try {
    const { mode, input, history, scenario, level = 'A1' } = req.body;

    if (!input && mode !== 'exercise_generation') {
      res.status(400).json({ error: 'Nội dung yêu cầu không được để trống.' });
      return;
    }

    if (!aiClient) {
      // Return structured offline fallback if API key is not configured
      res.json({
        success: true,
        source: 'fallback',
        message: getOfflineFallbackResponse(mode, input, scenario, level),
      });
      return;
    }

    let systemInstruction = '';
    let prompt = '';

    if (mode === 'sentence_correction') {
      systemInstruction = `Bạn là Gia sư tiếng Việt giàu kinh nghiệm thuộc nền tảng VietSpeak (Dự án B05 - Luyện nói tiếng Việt cho người nước ngoài).
Nhiệm vụ của bạn: Kiểm tra câu tiếng Việt của học viên người nước ngoài ở trình độ ${level}.
Quy tắc phản hồi:
1. Nhận xét xem câu có đúng ngữ pháp, tự nhiên không.
2. Nếu có lỗi, đưa ra câu sửa chuẩn xác (sửa dấu thanh điệu, từ vựng, trật tự từ nếu sai).
3. Giải thích ngắn gọn, dễ hiểu nguyên nhân tại sao nên sửa như vậy (bằng tiếng Việt có kèm chú thích tiếng Anh ngắn gọn nếu cần).
4. Cung cấp 1-2 cách nói tự nhiên hơn trong đời sống hàng ngày của người Việt.
5. Cung cấp 1-2 câu ví dụ minh họa tương tự.
Trình bày rõ ràng, thân thiện, khích lệ học viên. Định dạng Markdown đẹp mắt với các mục:
- ✍️ **Câu sửa chuẩn**: ...
- 💡 **Nhận xét & Giải thích**: ...
- 🗣️ **Cách nói tự nhiên hơn trong giao tiếp**: ...
- 🌟 **Ví dụ tương tự**: ...`;
      prompt = `Học viên viết: "${input}"\nHãy phân tích và sửa giúp học viên.`;
    } else if (mode === 'vocabulary_assistant') {
      systemInstruction = `Bạn là Chuyên gia từ điển & Từ vựng tiếng Việt cho người nước ngoài thuộc nền tảng VietSpeak B05.
Nhiệm vụ: Giải thích từ hoặc cụm từ được yêu cầu ở trình độ ${level}.
Quy tắc phản hồi:
1. Định nghĩa bằng tiếng Việt đơn giản và bản dịch tiếng Anh chuẩn (English gloss).
2. Phát âm & Dấu thanh (phiên âm IPA hoặc hướng dẫn thanh điệu).
3. Từ loại (Danh từ, Động từ, Tính từ, Lượng từ, v.v.).
4. Ngữ cảnh sử dụng (Trang trọng hay thân mật, tình huống đời thường).
5. Phân biệt phương ngữ Bắc - Trung - Nam nếu từ này có khác biệt vùng miền (ví dụ cốc/ly, bắp/ngô, thìa/muỗng).
6. 2-3 câu ví dụ có kèm dịch nghĩa tiếng Anh.
Định dạng Markdown rõ ràng, dễ nhìn.`;
      prompt = `Từ / Cụm từ cần tra: "${input}"`;
    } else if (mode === 'guided_conversation') {
      systemInstruction = `Bạn là Trợ lý luyện giao tiếp tiếng Việt tương tác cho người nước ngoài thuộc nền tảng VietSpeak B05.
Trình độ học viên: ${level}.
Quy tắc trò chuyện:
1. Chỉ nói bằng tiếng Việt tự nhiên, đơn giản, phù hợp trình độ ${level}.
2. Mỗi lượt chỉ trả lời ngắn gọn (2-3 câu) và luôn KẾT THÚC BẰNG MỘT CÂU HỎI MỞ để người học tiếp tục phản hồi.
3. Nếu học viên có lỗi nhỏ trong câu trước, hãy nhẹ nhàng sửa trong phần [Gợi ý] ở cuối tin nhắn, không ngắt quãng dòng trò chuyện.
4. Đính kèm một gợi ý câu trả lời ngắn bằng tiếng Việt [Gợi ý trả lời] để hỗ trợ người mới học nếu họ chưa biết nói gì.`;
      const conversationContext = Array.isArray(history) && history.length > 0
        ? history.map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Học viên' : 'Gia sư'}: ${m.content}`).join('\n')
        : '';
      prompt = `${conversationContext ? `Lịch sử hội thoại trước đó:\n${conversationContext}\n\n` : ''}Học viên vừa nói: "${input}"\nHãy trả lời một cách tự nhiên và tiếp tục gợi mở cuộc trò chuyện.`;
    } else if (mode === 'roleplay') {
      systemInstruction = `Bạn là nhân vật trong tình huống đóng vai tiếng Việt thuộc VietSpeak B05.
Tình huống đóng vai: "${scenario || 'Nhà hàng - Gọi món và thanh toán'}".
Trình độ người học: ${level}.
Quy tắc:
1. Nhập vai chân thật (ví dụ: Nhân viên phục vụ quán ăn thân thiện, người bán hàng ở chợ, lễ tân khách sạn, hoặc tài xế).
2. Giữ câu thoại ngắn, sinh động, chuẩn ngôn ngữ đời sống Việt Nam.
3. Luôn đáp lại câu nói của người học rồi đưa ra câu hỏi hoặc lời mời phù hợp bối cảnh.
4. Kèm theo mục:
💡 [Gợi ý cho bạn]: 1 câu nói tiếng Việt gợi ý người học có thể dùng để đối đáp.`;
      const roleplayContext = Array.isArray(history) && history.length > 0
        ? history.map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Học viên' : 'Nhân vật'}: ${m.content}`).join('\n')
        : '';
      prompt = `${roleplayContext ? `Diễn biến trước đó:\n${roleplayContext}\n\n` : ''}Khách hàng/Học viên nói: "${input}"\nHãy tiếp tục màn đóng vai.`;
    } else if (mode === 'exercise_generation') {
      systemInstruction = `Bạn là Giáo viên biên soạn bài tập tiếng Việt cho người nước ngoài thuộc VietSpeak B05.
Trình độ: ${level}.
Tạo 3 câu bài tập thực hành giao tiếp thực tế về chủ đề: "${input || 'Giao tiếp hằng ngày'}".
Mỗi bài tập gồm:
- Loại: Điền từ vào chỗ trống hoặc Sắp xếp câu.
- Câu hỏi có chỗ trống hoặc các từ xáo trộn.
- Đáp án chính xác.
- Giải thích ngữ pháp / từ vựng ngắn gọn.
Định dạng Markdown rõ ràng, dễ làm.`;
      prompt = `Hãy tạo 3 bài tập về chủ đề: ${input || 'Chào hỏi và mua sắm'}`;
    } else {
      systemInstruction = 'Bạn là gia sư tiếng Việt thân thiện và chuyên nghiệp của VietSpeak B05.';
      prompt = input;
    }

    let response;
    try {
      response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
    } catch (err: any) {
      console.warn('First attempt failed, retrying once...', err?.message);
      // Brief wait before retry
      await new Promise((resolve) => setTimeout(resolve, 1000));
      response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
    }

    const outputText = response.text || 'Không nhận được phản hồi từ hệ thống.';

    res.json({
      success: true,
      source: 'gemini-3.8-flash',
      message: outputText,
    });
  } catch (error: any) {
    console.error('Error handling Gemini request after retry:', error);
    const fallbackMessage = getOfflineFallbackResponse(
      req.body?.mode,
      req.body?.input,
      req.body?.scenario,
      req.body?.level
    );
    // Respond gracefully with fallback content
    res.json({
      success: true,
      source: 'fallback',
      message: fallbackMessage,
      note: 'Hệ thống đã tự động chuyển sang giải thích sư phạm dự phòng.',
    });
  }
});

// Helper for offline / fallback guidance
function getOfflineFallbackResponse(mode?: string, input?: string, scenario?: string, level?: string): string {
  if (mode === 'sentence_correction') {
    return `✍️ **Phân tích câu**: "${input || ''}"\n\n💡 **Nhận xét & Hướng dẫn**: Trong tiếng Việt, cấu trúc chuẩn thường là **Chủ ngữ + Động từ + Tân ngữ (S + V + O)**. Ví dụ: *"Tôi đi chợ mua hoa quả."*\n- Hãy lưu ý dấu thanh (Sắc, Huyền, Hỏi, Ngã, Nặng) và từ chỉ lượng.\n🗣️ **Cách nói tự nhiên**: *"Hôm qua tôi đi chợ mua nhiều trái cây / hoa quả tươi."*\n🌟 **Mẹo**: Ở miền Nam người ta thường dùng từ "trái cây", còn ở miền Bắc hay dùng từ "hoa quả".`;
  }
  if (mode === 'roleplay') {
    return `👋 **Chào bạn! Rất vui được đón tiếp bạn.**\n\n"Dạ em chào anh/chị ạ! Quán em hôm nay có phở bò tái nạm, bún chả và nem rán rất ngon. Anh/chị muốn dùng món gì ạ?"\n\n💡 **[Gợi ý trả lời]**: *"Cho tôi một tô phở bò chín và một ly trà đá nhé!"*`;
  }
  if (mode === 'vocabulary_assistant') {
    return `📚 **Giải nghĩa từ vựng**: "${input || ''}"\n\n- **Ý nghĩa**: Từ này được dùng phổ biến trong giao tiếp thường ngày.\n- **Ngữ cảnh**: Thường xuất hiện trong các câu chào hỏi, mua sắm hoặc hỏi thăm thân mật.\n- **Ví dụ**: *"Tôi rất thích học tiếng Việt."* (I really like learning Vietnamese.)`;
  }
  return `Xin chào! Tôi là Gia sư tiếng Việt VietSpeak. Bạn có thể luyện tập nói, kiểm tra đặt câu, tra cứu từ vựng hoặc đóng vai các tình huống thực tế cùng tôi nhé!`;
}

// Start server
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VietSpeak B05 server listening on port ${PORT}`);
  });
}

startServer();
