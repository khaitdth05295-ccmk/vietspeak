export interface TutorResponse {
  success: boolean;
  message: string;
  source?: string;
  error?: string;
}

export const geminiService = {
  async askTutor(params: {
    mode: 'sentence_correction' | 'vocabulary_assistant' | 'guided_conversation' | 'roleplay' | 'exercise_generation';
    input: string;
    level?: string;
    scenario?: string;
    history?: { role: 'user' | 'assistant'; content: string }[];
  }): Promise<TutorResponse> {
    try {
      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Lỗi máy chủ (${response.status})`);
      }

      const data = await response.json();
      return {
        success: data.success,
        message: data.message || data.fallback || 'Không nhận được câu trả lời.',
        source: data.source || 'gemini',
      };
    } catch (err: any) {
      console.warn('Gemini tutor API request error:', err);
      // Generate immediate smart educational fallback
      return {
        success: false,
        message: getClientFallback(params.mode, params.input, params.scenario),
        error: err?.message || 'Không thể kết nối đến máy chủ gia sư AI.',
      };
    }
  },
};

function getClientFallback(mode: string, input: string, scenario?: string): string {
  if (mode === 'sentence_correction') {
    return `✍️ **Phân tích câu**: "${input}"\n\n💡 **Nhận xét ngữ pháp**: Trong tiếng Việt, cấu trúc câu khẳng định cơ bản tuân theo trật tự: **Chủ ngữ + Vị ngữ (Động từ) + Bổ ngữ (Tân ngữ)**.\n- Hãy chú ý thanh điệu và dùng đúng lượng từ (ví dụ: *một quả cam*, *hai con cá*, *ba quyển sách*).\n\n🗣️ **Cách nói tự nhiên**: "Tôi đang học tiếng Việt để giao tiếp hằng ngày."\n🌟 **Mẹo**: Cố gắng nói trọn vẹn câu và thêm các từ lịch sự như "ạ", "dạ", "làm ơn" khi giao tiếp với người lớn tuổi.`;
  }
  if (mode === 'roleplay') {
    return `🎭 **Tình huống**: ${scenario || 'Giao tiếp hằng ngày'}\n\n"Dạ chào anh/chị ạ! Hôm nay quán chúng tôi có phở bò truyền thống rất thơm ngon. Anh/chị muốn dùng món gì ạ?"\n\n💡 **[Gợi ý trả lời]**: "Cho tôi xin một bát phở bò tái và một ly trà đá nhé!"`;
  }
  if (mode === 'vocabulary_assistant') {
    return `📚 **Tra cứu từ vựng**: "${input}"\n\n- **Nghĩa tiếng Việt**: Từ này được dùng rất phổ biến trong giao tiếp hằng ngày của người Việt.\n- **Bản dịch tiếng Anh**: Commonly used everyday Vietnamese word/phrase.\n- **Ví dụ**: "Tôi rất vui khi được nói tiếng Việt cùng bạn."`;
  }
  return `Chào bạn! Tôi là Gia sư tiếng Việt VietSpeak. Bạn hãy thử kiểm tra câu, đặt câu hỏi hoặc luyện đối đáp cùng tôi nhé!`;
}
