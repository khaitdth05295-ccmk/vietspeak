import { PlacementQuestion } from '../types';

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // Giai đoạn 1: Nền tảng ngữ âm
  {
    id: 1,
    stageName: 'Ngữ âm & Chữ viết',
    question: 'Trong tiếng Việt, thanh điệu nào sau đây được gọi là "Thanh Sắc"?',
    questionEn: 'Which of the following marks represents the "Sắc" (rising) tone?',
    options: ['Dấu sắc ( / )', 'Dấu huyền ( \\ )', 'Dấu hỏi ( ? )', 'Dấu nặng ( . )'],
    correctAnswer: 'Dấu sắc ( / )',
    explanation: 'Dấu sắc có ký hiệu vạch chéo lên từ trái sang phải (/), biểu thị cao độ dâng cao vút.',
  },
  {
    id: 2,
    stageName: 'Chào hỏi căn bản',
    question: 'Để chào một người bạn mới gặp lần đầu một cách lịch sự, bạn nói gì?',
    questionEn: 'How do you greet a new acquaintance politely?',
    options: ['Xin chào', 'Tạm biệt', 'Đi ngủ nhé', 'Bao nhiêu'],
    correctAnswer: 'Xin chào',
    explanation: '"Xin chào" là câu chào tiêu chuẩn và lịch thiệp nhất trong tiếng Việt.',
  },
  {
    id: 3,
    stageName: 'Số đếm & Thời gian',
    question: 'Số 25 trong tiếng Việt được đọc là gì?',
    questionEn: 'How is the number 25 read in Vietnamese?',
    options: ['Hai mươi lăm', 'Hai mươi năm', 'Mười lăm', 'Hai lăm mốt'],
    correctAnswer: 'Hai mươi lăm',
    explanation: 'Số 5 sau hàng chục (mươi) biến âm thành "lăm" (hai mươi lăm).',
  },

  // Giai đoạn 2: Xưng hô & Cấu trúc câu
  {
    id: 4,
    stageName: 'Đại từ xưng hô',
    question: 'Khi xưng hô với một người đàn ông lớn hơn bạn vài tuổi, cặp xưng hô chuẩn là:',
    questionEn: 'When addressing a man slightly older than you, which pronoun pair is correct?',
    options: ['Anh - Em', 'Chú - Cháu', 'Bác - Tôi', 'Bạn - Em'],
    correctAnswer: 'Anh - Em',
    explanation: 'Gọi người nam lớn hơn là "Anh" và tự xưng là "Em".',
  },
  {
    id: 5,
    stageName: 'Trật tự câu',
    question: 'Chọn câu có trật tự từ đúng để giới thiệu tên và xuất thân:',
    questionEn: 'Select the sentence with correct word order for name & origin:',
    options: [
      'Tôi tên là Alex, tôi đến từ Canada.',
      'Alex tên là tôi, đến từ Canada tôi là.',
      'Tôi là Alex tên, là người Canada tôi.',
      'Tên tôi Alex là, tôi Canada đến từ.',
    ],
    correctAnswer: 'Tôi tên là Alex, tôi đến từ Canada.',
    explanation: 'Cấu trúc chuẩn: Chủ ngữ + tên là + [Tên], Chủ ngữ + đến từ + [Quốc gia].',
  },
  {
    id: 6,
    stageName: 'Loại từ',
    question: 'Loại từ nào đi với động vật như "mèo", "chó", "cá"?',
    questionEn: 'Which classifier is used with animals like "cat", "dog", "fish"?',
    options: ['Con', 'Cái', 'Bức', 'Chiếc'],
    correctAnswer: 'Con',
    explanation: '"Con" là loại từ chuyên dùng cho động vật sống (con mèo, con cá).',
  },
  {
    id: 7,
    stageName: 'Từ để hỏi',
    question: 'Từ để hỏi nào dùng để hỏi về địa điểm ("Where")?',
    questionEn: 'Which question word is used to inquire about location ("Where")?',
    options: ['Ở đâu', 'Cái gì', 'Bao nhiêu', 'Khi nào'],
    correctAnswer: 'Ở đâu',
    explanation: '"Ở đâu" dùng để hỏi vị trí, phương hướng trong câu.',
  },

  // Giai đoạn 3 & 4: Giao tiếp đời sống
  {
    id: 8,
    stageName: 'Ăn uống & Gọi món',
    question: 'Khi muốn gọi thanh toán tại quán ăn, câu nào tự nhiên và đúng văn hóa nhất?',
    questionEn: 'When asking for the bill at an eatery, what is the most natural sentence?',
    options: [
      'Em ơi, tính tiền giúp anh nhé!',
      'Tôi muốn tiền của tôi.',
      'Bao nhiêu tiền thì bạn cho tôi.',
      'Đưa hóa đơn ngay lập tức.',
    ],
    correctAnswer: 'Em ơi, tính tiền giúp anh nhé!',
    explanation: '"Em ơi, tính tiền giúp anh/chị nhé!" là cách gọi thân thiện, chuẩn văn hóa dịch vụ Việt Nam.',
  },
  {
    id: 9,
    stageName: 'Mua sắm & Phương ngữ',
    question: 'Ở miền Nam, người bán hàng và người mua hay dùng từ gì để chỉ "đắt tiền"?',
    questionEn: 'In the South, which word is commonly used to describe "expensive"?',
    options: ['Mắc', 'Đắt', 'Nặng', 'Cao'],
    correctAnswer: 'Mắc',
    explanation: 'Phương ngữ Nam bộ dùng từ "Mắc" (ví dụ: Mắc quá!), miền Bắc dùng "Đắt".',
  },
  {
    id: 10,
    stageName: 'Giao tiếp lịch thiệp',
    question: 'Khi bạn bị kẹt xe và sẽ đến cuộc hẹn muộn hơn dự kiến, bạn nên nhắn tin thế nào?',
    questionEn: 'When stuck in traffic and running late, how should you message politely?',
    options: [
      'Đường tắc quá, mình xin phép đến muộn khoảng mười lăm phút nhé!',
      'Tôi không muốn đi nữa đâu.',
      'Bạn cứ chờ ở đó đi nhé.',
      'Sao đường lại đông thế này?',
    ],
    correctAnswer: 'Đường tắc quá, mình xin phép đến muộn khoảng mười lăm phút nhé!',
    explanation: 'Báo trước lý do và ước lượng thời gian kèm lời xin lỗi nhẹ nhàng thể hiện sự tôn trọng lịch hẹn.',
  },
];
