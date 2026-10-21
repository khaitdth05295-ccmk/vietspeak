import { CultureArticle } from '../types';

export const CULTURE_ARTICLES: CultureArticle[] = [
  {
    id: 'culture-pronouns',
    title: 'Nghệ thuật xưng hô trong văn hóa giao tiếp Việt Nam',
    category: 'Xưng hô',
    readTime: '5 phút đọc',
    summary:
      'Tại sao người Việt không chỉ dùng "Tôi - Bạn"? Hiểu rõ cách xưng hô theo tuổi tác, quan hệ gia đình và mức độ thân mật.',
    sections: [
      {
        heading: 'Gia đình hóa các mối quan hệ xã hội',
        content:
          'Xã hội Việt Nam truyền thống mang tính gắn kết cộng đồng cao như một đại gia đình. Do đó, người Việt mang đại từ trong gia tộc (ông, bà, bác, chú, cô, anh, chị, em, cháu) ra ngoài xã hội để xưng hô với người đối diện dựa trên ước lượng tuổi tác tương đối.',
      },
      {
        heading: 'Bảng xưng hô thông dụng ngoài xã hội',
        content:
          'Dưới đây là các cặp xưng hô phổ biến nhất khi bạn giao tiếp với người Việt:',
        examples: [
          { vi: 'Anh - Em', note: 'Người nam lớn hơn bạn từ 1 đến 15 tuổi.' },
          { vi: 'Chị - Em', note: 'Người nữ lớn hơn bạn từ 1 đến 15 tuổi.' },
          { vi: 'Cô / Chú - Cháu', note: 'Người trạc tuổi bố mẹ bạn (khoảng 40-60 tuổi).' },
          { vi: 'Bác - Cháu', note: 'Người lớn tuổi hơn bố mẹ bạn.' },
          { vi: 'Ông / Bà - Cháu', note: 'Người cao tuổi tóc bạc (từ 70 tuổi trở lên).' },
          { vi: 'Bạn - Mình / Tôi', note: 'Bạn bè cùng trang lứa, đồng môn, đồng nghiệp ngang hàng.' },
        ],
      },
      {
        heading: 'Lời khuyên cho người nước ngoài',
        content:
          'Nếu không chắc chắn về tuổi của đối phương, xưng "Tôi" và gọi đối phương là "Bạn" hoặc "Anh/Chị" là lựa chọn an toàn và nhã nhặn nhất. Người Việt rất vui vẻ và sẽ chủ động hướng dẫn bạn nên xưng hô thế nào cho thân tình.',
      },
    ],
  },
  {
    id: 'culture-polite-particles',
    title: 'Tiểu từ "Dạ", "Ạ", "Nhé", "Nha" — Bí quyết nói tiếng Việt ngọt ngào',
    category: 'Ứng xử',
    readTime: '4 phút đọc',
    summary:
      'Học cách đặt tiểu từ cảm thán vào đúng vị trí để câu nói trở nên mềm mại, tự nhiên và đầy thiện cảm.',
    sections: [
      {
        heading: 'Tiểu từ "Dạ" (đầu câu) và "Ạ" (cuối câu)',
        content:
          '"Dạ" là từ mở đầu câu khi trả lời người lớn tuổi hoặc khách hàng, thể hiện sự lắng nghe và vâng lời tôn kính. "Ạ" đặt ở cuối câu để khép lại lời nói một cách lễ phép.',
        examples: [
          { vi: 'Dạ, cháu hiểu rồi ạ!', note: 'Rất kính trọng khi nói với người lớn.' },
          { vi: 'Dạ vâng, em gửi anh thực đơn ạ.', note: 'Phục vụ thân thiện, chuyên nghiệp.' },
        ],
      },
      {
        heading: 'Tiểu từ rủ rê và kéo gần khoảng cách: "Nhé" và "Nha"',
        content:
          '"Nhé" (phổ biến ở miền Bắc) và "Nha" (rất thân mật ở miền Nam) đặt ở cuối câu khi bạn muốn đề xuất một hành động chung hoặc dặn dò nhẹ nhàng.',
        examples: [
          { vi: 'Mai mình đi ăn phở nhé!', note: 'Lời rủ rê nhẹ nhàng.' },
          { vi: 'Nhớ uống nhiều nước nha!', note: 'Lời dặn dò ấm áp kiểu phương Nam.' },
        ],
      },
    ],
  },
  {
    id: 'culture-dining',
    title: 'Văn hóa ẩm thực & Phép lịch sự trên bàn ăn người Việt',
    category: 'Ăn uống',
    readTime: '6 phút đọc',
    summary:
      'Quy tắc mời cơm, cách cầm đũa bát, nét văn hóa chia sẻ đồ ăn từ mâm cơm chung và cách tính tiền bàn ăn.',
    sections: [
      {
        heading: 'Phong tục "Mời cơm" trước khi ăn',
        content:
          'Trong bữa cơm gia đình Việt, người nhỏ tuổi hơn luôn "mời cơm" người lớn tuổi trước khi nâng đũa. Ví dụ: "Con mời bố mẹ ăn cơm ạ!". Trong bữa ăn bạn bè, lời mời ngắn gọn như "Mời cả nhà ăn cơm!" tạo không khí vui tươi, ấm cúng.',
      },
      {
        heading: 'Dùng đũa và mâm cơm chung',
        content:
          'Mâm cơm Việt thường có bát canh chung và các đĩa thức ăn đặt ở giữa mâm. Mọi người cùng gắp thức ăn vào bát riêng của mình. Khi gắp thức ăn cho người khác, bạn nên dùng một đôi đũa sạch hoặc trở đầu đũa để thể hiện sự chu đáo, vệ sinh.',
      },
      {
        heading: 'Văn hóa giành trả tiền ("Tranh trả tiền")',
        content:
          'Khi đi ăn ngoài tiệm, bạn sẽ thường thấy người Việt giành nhau trả tiền hóa đơn. Đây là biểu hiện của lòng hiếu khách và sự hào hiệp, không phải khoe khoang. Nếu người khác nhất quyết đãi bạn hôm nay, bạn có thể vui vẻ cảm ơn và hẹn sẽ mời họ vào bữa kế tiếp.',
      },
    ],
  },
  {
    id: 'culture-visiting-homes',
    title: 'Ứng xử khi đến thăm nhà người Việt Nam',
    category: 'Ứng xử',
    readTime: '5 phút đọc',
    summary:
      'Những phép tắc tinh tế giúp bạn ghi điểm tuyệt đối trong mắt gia chủ người Việt từ lúc bước qua cánh cửa.',
    sections: [
      {
        heading: 'Bỏ giày dép ngoài cửa',
        content:
          'Hầu hết các gia đình Việt giữ sàn nhà rất sạch sẽ (thường lau nhà hằng ngày). Hãy luôn cởi giày dép và xếp gọn gàng ở kệ giày trước cửa hoặc ngoài hiên trước khi bước vào nhà.',
      },
      {
        heading: 'Chào người lớn tuổi nhất trước',
        content:
          'Khi bước vào nhà có nhiều thế hệ cùng sinh sống, hãy chú ý chào hỏi ông bà hoặc bố mẹ trước, sau đó mới đến các anh chị em bạn bè.',
      },
      {
        heading: 'Uống nước trà tiếp khách',
        content:
          'Chủ nhà luôn pha một ấm trà ấm hoặc rót nước mát mời khách ngay khi ngồi vào bàn khách. Đón nhận chén trà bằng hai tay là cử chỉ đẹp mắt thể hiện sự cảm kích lòng hiếu khách của chủ nhà.',
      },
    ],
  },
  {
    id: 'culture-regional-differences',
    title: 'Khác biệt từ vựng & Phát âm Bắc — Trung — Nam',
    category: 'Phương ngữ',
    readTime: '7 phút đọc',
    summary:
      'Cẩm nang đối chiếu từ vựng đời sống và đặc trưng ngữ điệu giúp người nước ngoài đi khắp ba miền không bị bỡ ngỡ.',
    sections: [
      {
        heading: 'Sự phong phú đa dạng của tiếng Việt',
        content:
          'Tiếng Việt có ba phương ngữ chính: Bắc bộ (trung tâm là Hà Nội), Trung bộ (Huế, Đà Nẵng, Quảng Nam) và Nam bộ (TP. Hồ Chí Minh và miền Tây). Mặc dù dùng chung chữ Quốc ngữ chuẩn, từ ngữ sinh hoạt và ngữ điệu có những nét đặc trưng thú vị.',
      },
    ],
    regionalTable: [
      {
        concept: 'Ly / Cốc uống nước',
        north: 'Cốc',
        central: 'Cốc / Ly',
        south: 'Ly',
      },
      {
        concept: 'Ngô / Bắp (Corn)',
        north: 'Ngô',
        central: 'Bắp',
        south: 'Bắp',
      },
      {
        concept: 'Thìa / Muỗng (Spoon)',
        north: 'Thìa',
        central: 'Muỗng',
        south: 'Muỗng',
      },
      {
        concept: 'Quả dứa / Thơm (Pineapple)',
        north: 'Quả dứa',
        central: 'Trái thơm / Gai',
        south: 'Trái thơm / Khóm',
      },
      {
        concept: 'Đắt / Mắc (Expensive)',
        north: 'Đắt',
        central: 'Đắt / Mắc',
        south: 'Mắc',
      },
      {
        concept: 'Ô / Dù (Umbrella)',
        north: 'Cái ô',
        central: 'Cây dù',
        south: 'Cây dù',
      },
      {
        concept: 'Đến muộn / Đến trễ (Late)',
        north: 'Đến muộn',
        central: 'Đến trễ',
        south: 'Đến trễ',
      },
      {
        concept: 'Rẽ trái / Quẹo trái (Turn left)',
        north: 'Rẽ trái',
        central: 'Rẽ trái / Quẹo trái',
        south: 'Quẹo trái',
      },
    ],
  },
];
