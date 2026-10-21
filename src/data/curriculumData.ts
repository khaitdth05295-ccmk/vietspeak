import { Chapter } from '../types';

export const CURRICULUM: Chapter[] = [
  // GIAI ĐOẠN 1: NỀN TẢNG NGỮ ÂM & LÀM QUEN (CHƯƠNG 1 - 5)
  {
    id: 1,
    stageNumber: 1,
    stageTitle: 'Phần 1: Làm quen với tiếng Việt',
    title: 'Làm quen với tiếng Việt',
    subtitle: 'Introduction to the Vietnamese Language & Sounds',
    durationMinutes: 20,
    objectives: [
      'Tìm hiểu đặc điểm ngôn ngữ đơn lập (isolating language) không biến hình của tiếng Việt',
      'Làm quen với hệ chữ Quốc ngữ Latinh và sự tương ứng giữa chữ viết và âm thanh',
      'Nắm bắt các từ vựng đơn giản đầu tiên trong giao tiếp thường nhật',
    ],
    introVi:
      'Chào mừng bạn đến với VietSpeak! Tiếng Việt là một ngôn ngữ âm nhạc, giàu nhạc tính và logic. Không giống như các ngôn ngữ châu Âu, tiếng Việt không chia động từ theo ngôi hay biến đổi hình thái từ.',
    introEn:
      'Welcome to VietSpeak! Vietnamese is a melodic and strictly analytic language. There are no verb conjugations, grammatical genders, or noun declensions.',
    toneGuide: {
      focusTones: ['Thanh Ngang'],
      tipsVi: 'Giữ thanh quản ổn định, phát âm ngang bằng và nhẹ nhàng.',
      tipsEn: 'Keep vocal cords relaxed, maintaining a smooth, level mid-pitch.',
    },
    vocabulary: [
      {
        id: 'v1-1',
        vietnamese: 'Việt Nam',
        english: 'Vietnam',
        ipa: '/viət̚ˀ˨˩ naːm˧˧/',
        category: 'Địa danh',
        tone: 'Nặng - Ngang',
        exampleVi: 'Tôi yêu đất nước Việt Nam.',
        exampleEn: 'I love Vietnam.',
      },
      {
        id: 'v1-2',
        vietnamese: 'Tiếng Việt',
        english: 'Vietnamese language',
        ipa: '/tiəŋ˦˥ viət̚ˀ˨˩/',
        category: 'Ngôn ngữ',
        tone: 'Sắc - Nặng',
        exampleVi: 'Tiếng Việt rất thú vị.',
        exampleEn: 'Vietnamese is very fascinating.',
      },
      {
        id: 'v1-3',
        vietnamese: 'Chào',
        english: 'To greet / Hello',
        ipa: '/caːw˨˩/',
        category: 'Chào hỏi',
        tone: 'Thanh Huyền',
        exampleVi: 'Chào bạn nhé!',
        exampleEn: 'Hello there, friend!',
      },
      {
        id: 'v1-4',
        vietnamese: 'Vui',
        english: 'Happy / Glad',
        ipa: '/vwi˧˧/',
        category: 'Cảm xúc',
        tone: 'Thanh Ngang',
        exampleVi: 'Hôm nay tôi rất vui.',
        exampleEn: 'Today I am very glad.',
      },
    ],
    grammarPoints: [
      {
        title: 'Đặc trưng từ đơn lập tiếng Việt',
        structure: 'Mỗi chữ viết rời là một âm tiết có nghĩa hoàn chỉnh',
        explanationVi:
          'Trong tiếng Việt, các từ không thay đổi hình thức theo thời gian hay số lượng. Ví dụ: từ "học" luôn giữ nguyên dạng dù ở quá khứ, hiện tại hay tương lai.',
        explanationEn:
          'Words never change form. Tense and plurality are indicated by adding separate functional words rather than modifying endings.',
        examples: [
          { vi: 'Tôi học tiếng Việt.', en: 'I study Vietnamese.' },
          { vi: 'Ngày mai tôi học tiếng Việt.', en: 'Tomorrow I will study Vietnamese.' },
        ],
      },
    ],
    dialogue: {
      title: 'Ấn tượng đầu tiên về tiếng Việt',
      context: 'Học viên trao đổi về cảm nhận khi bắt đầu học tiếng Việt',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Chào bạn! Tiếng Việt nghe như một giai điệu âm nhạc.',
          english: 'Hello friend! Vietnamese sounds like a musical melody.',
          avatarRole: 'male',
        },
        {
          speaker: 'Minh',
          vietnamese: 'Đúng vậy! Nhờ có 6 thanh điệu nên tiếng Việt rất trầm bổng.',
          english: 'Indeed! Thanks to the six tones, Vietnamese is very expressive and melodic.',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đọc to cụm từ làm quen',
        promptEn: 'Read aloud the greeting phrase',
        modelSentence: 'Chào bạn, tôi học tiếng Việt!',
        modelAudioText: 'Chào bạn, tôi học tiếng Việt!',
        tips: 'Phát âm tròn chữ, nhấn nhẹ vào từ "học" và "tiếng Việt".',
      },
    ],
    exercises: [
      {
        id: 'ex-1-1',
        type: 'multiple-choice',
        question: 'Tiếng Việt thuộc loại hình ngôn ngữ nào?',
        promptEn: 'What linguistic type does Vietnamese belong to?',
        options: ['Ngôn ngữ đơn lập (không chia động từ)', 'Ngôn ngữ hòa kết (chia đuôi từ)', 'Ngôn ngữ chắp dính', 'Ngôn ngữ tượng hình'],
        correctAnswer: 'Ngôn ngữ đơn lập (không chia động từ)',
        explanation: 'Tiếng Việt là ngôn ngữ đơn lập (isolating language), các từ không biến đổi hình thái.',
      },
    ],
    cultureTip: {
      title: 'Vẻ đẹp chữ Quốc ngữ',
      contentVi:
        'Chữ Quốc ngữ dùng mẫu tự Latinh giúp người nước ngoài làm quen với việc đọc viết rất nhanh chóng so với các hệ chữ tượng hình.',
      contentEn:
        'Because Vietnamese uses the Latin script, foreign learners can read and write much faster than with logographic systems.',
    },
    nextLessonId: 2,
  },

  {
    id: 2,
    stageNumber: 1,
    stageTitle: 'Phần 1: Làm quen với tiếng Việt',
    title: 'Bảng chữ cái và cách phát âm',
    subtitle: 'Alphabet, Vowels, Consonants and Phonetics',
    durationMinutes: 25,
    objectives: [
      'Nhận diện 29 chữ cái trong bảng chữ cái tiếng Việt',
      'Phân biệt các nguyên âm có dấu phụ: a/ă/â, e/ê, o/ô/ơ, u/ư',
      'Luyện phụ âm đôi đặc trưng: nh, ng, ngh, th, ph, ch, tr, kh',
    ],
    introVi:
      'Bảng chữ cái tiếng Việt có 29 chữ cái. Việc phát âm chuẩn xác từng nguyên âm và phụ âm ghép là bước đầu tiên để bạn nói tiếng Việt tròn vành rõ chữ.',
    introEn:
      'The Vietnamese alphabet features 29 letters. Mastering vowel nuances and unique consonant digraphs like "nh" and "ng" lays the solid groundwork for your speech.',
    vocabulary: [
      {
        id: 'v2-1',
        vietnamese: 'Nhà',
        english: 'House / Home',
        ipa: '/ɲaː˨˩/',
        category: 'Đời sống',
        tone: 'Thanh Huyền',
        exampleVi: 'Nhà tôi ở gần đây.',
        exampleEn: 'My house is near here.',
      },
      {
        id: 'v2-2',
        vietnamese: 'Ăn',
        english: 'To eat',
        ipa: '/ʔan˧˧/',
        category: 'Hành động',
        tone: 'Thanh Ngang',
        exampleVi: 'Mời bạn ăn cơm.',
        exampleEn: 'Please join us for dinner.',
      },
      {
        id: 'v2-3',
        vietnamese: 'Uống',
        english: 'To drink',
        ipa: '/ʔuəŋ˦˥/',
        category: 'Hành động',
        tone: 'Thanh Sắc',
        exampleVi: 'Tôi uống nước cam.',
        exampleEn: 'I drink orange juice.',
      },
      {
        id: 'v2-4',
        vietnamese: 'Cơm',
        english: 'Cooked rice / Meal',
        ipa: '/kəːm˧˧/',
        category: 'Ẩm thực',
        tone: 'Thanh Ngang',
        exampleVi: 'Cơm rất dẻo và thơm.',
        exampleEn: 'The rice is soft and fragrant.',
      },
    ],
    grammarPoints: [
      {
        title: 'Quy tắc ghép vần tiếng Việt',
        structure: 'Phụ âm đầu + Âm chính (nguyên âm) + Phụ âm cuối',
        explanationVi:
          'Một âm tiết có thể không có phụ âm đầu (ví dụ: "ăn", "uống"), nhưng luôn cần có nguyên âm mang thanh điệu.',
        explanationEn:
          'Initial consonants and codas are optional, but every syllable must center on a vowel nucleus carrying a tone.',
        examples: [
          { vi: 'Nh + à = Nhà', en: 'House' },
          { vi: 'C + ơm = Cơm', en: 'Rice' },
        ],
      },
    ],
    dialogue: {
      title: 'Luyện âm "Nh" và "Ng"',
      context: 'Học viên luyện khẩu hình âm mũi',
      lines: [
        {
          speaker: 'Giáo viên',
          vietnamese: 'Âm "nh" đặt mặt lưỡi chạm ngạc mềm: nhà, nhìn, nhiều.',
          english: 'For the "nh" sound, place the middle of your tongue against the palate: nhà, nhìn, nhiều.',
          avatarRole: 'female',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Em hiểu rồi: "Nhà tôi có nhiều hoa".',
          english: 'I understand: "My house has many flowers".',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đọc chuẩn 3 từ chứa nguyên âm có móc',
        promptEn: 'Pronounce three words with hooked vowels (ơ, ư)',
        modelSentence: 'Cơm, Nước, Mơ',
        modelAudioText: 'Cơm, Nước, Mơ',
        tips: 'Môi hơi bè sang hai bên, không tròn môi khi phát âm chữ Ơ và Ư.',
      },
    ],
    exercises: [
      {
        id: 'ex-2-1',
        type: 'multiple-choice',
        question: 'Chữ cái nào sau đây có dấu móc bên phải?',
        promptEn: 'Which letter has a hook on the right?',
        options: ['Ơ và Ư', 'Ô và Ê', 'Ă và Â', 'O và U'],
        correctAnswer: 'Ơ và Ư',
        explanation: 'Chữ Ơ và Ư là nguyên âm mở có dấu móc đặc trưng trong tiếng Việt.',
      },
    ],
    cultureTip: {
      title: 'Sự nhất quán ngữ âm',
      contentVi:
        'Chữ Quốc ngữ có tính nhất quán phát âm rất cao: viết sao đọc vậy, không có chữ cái câm như tiếng Anh hay tiếng Pháp.',
      contentEn:
        'Vietnamese orthography is highly phonetic: words are pronounced virtually as they are spelled, with no silent letters.',
    },
    nextLessonId: 3,
  },

  {
    id: 3,
    stageNumber: 1,
    stageTitle: 'Phần 1: Làm quen với tiếng Việt',
    title: 'Sáu thanh điệu tiếng Việt',
    subtitle: 'The Six Tones and Pitch Contours',
    durationMinutes: 30,
    objectives: [
      'Phân biệt trọn vẹn 6 thanh: Ngang, Sắc, Huyền, Hỏi, Ngã, Nặng',
      'Hiểu rõ sự biến đổi ngữ nghĩa: ma, má, mà, mả, mã, mạ',
      'Nắm vững phương pháp điều chỉnh cao độ giọng nói theo từng thanh',
    ],
    introVi:
      'Thanh điệu là linh hồn của tiếng Việt. Một từ dù viết giống nhau nhưng khi thay đổi dấu thanh sẽ mang nghĩa hoàn toàn khác biệt.',
    introEn:
      'Tones are the heartbeat of Vietnamese. Changing the tone changes the fundamental meaning of the word.',
    toneGuide: {
      focusTones: ['Ngang', 'Sắc', 'Huyền', 'Hỏi', 'Ngã', 'Nặng'],
      tipsVi: 'Ngang: 33, Sắc: 35, Huyền: 21, Hỏi: 312, Ngã: 45 (gãy), Nặng: 21 (ngắt dứt khoát).',
      tipsEn: 'Level, High-rising, Low-falling, Dipping-rising, Glottalized-rising, Dropped-constricted.',
    },
    vocabulary: [
      {
        id: 'v3-1',
        vietnamese: 'Cá',
        english: 'Fish',
        ipa: '/kaː˦˥/',
        category: 'Thanh điệu',
        tone: 'Thanh Sắc',
        exampleVi: 'Con cá bơi dưới nước.',
        exampleEn: 'The fish swims under water.',
      },
      {
        id: 'v3-2',
        vietnamese: 'Cà',
        english: 'Eggplant / Tomato',
        ipa: '/kaː˨˩/',
        category: 'Thanh điệu',
        tone: 'Thanh Huyền',
        exampleVi: 'Món cà pháo giòn tan.',
        exampleEn: 'Crispy pickled eggplants.',
      },
      {
        id: 'v3-3',
        vietnamese: 'Cả',
        english: 'All / Whole',
        ipa: '/kaː˧˩˨/',
        category: 'Thanh điệu',
        tone: 'Thanh Hỏi',
        exampleVi: 'Cả nhà cùng ăn cơm.',
        exampleEn: 'The whole family eats dinner together.',
      },
      {
        id: 'v3-4',
        vietnamese: 'Mạ',
        english: 'Young rice plant',
        ipa: '/maːˀ˨˩/',
        category: 'Thanh điệu',
        tone: 'Thanh Nặng',
        exampleVi: 'Ruộng mạ xanh non.',
        exampleEn: 'The lush green young rice seedling field.',
      },
    ],
    grammarPoints: [
      {
        title: 'Hệ thống đối âm 6 thanh điệu',
        structure: 'Ngang (không dấu) - Sắc (/) - Huyền (\\) - Hỏi (?) - Ngã (~) - Nặng (.)',
        explanationVi:
          'Thanh Sắc nâng giọng vút lên cao; thanh Huyền hạ giọng trầm ấm; thanh Nặng ngắt đột ngột dưới đáy cổ họng.',
        explanationEn:
          'Rising tone elevates pitch quickly; Falling tone relaxes into lower chest voice; Heavy tone stops abruptly at throat bottom.',
        examples: [
          { vi: 'Ba (3) -> Bá (aunt) -> Bà (grandmother)', en: 'Three -> Aunt -> Grandmother' },
        ],
      },
    ],
    dialogue: {
      title: 'Phân biệt thanh Hỏi và Ngã',
      context: 'Học viên phân biệt âm điệu hai miền',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Thanh hỏi và thanh ngã nghe có vẻ gần giống nhau?',
          english: 'The hook tone and tilde tone sound somewhat similar?',
          avatarRole: 'male',
        },
        {
          speaker: 'Minh',
          vietnamese: 'Ở miền Bắc, thanh ngã có độ ngắt hơi ở giữa; còn ở miền Nam, hai thanh này thường đọc nhẹ nhàng gần như nhau.',
          english: 'In the North, the tilde tone has a distinct mid-glottal break; in the South, both soften and merge similarly.',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đọc chuỗi 6 thanh kinh điển',
        promptEn: 'Recite the classic 6-tone sequence',
        modelSentence: 'Ma, Má, Mà, Mả, Mã, Mạ',
        modelAudioText: 'Ma, Má, Mà, Mả, Mã, Mạ',
        tips: 'Tưởng tượng ngón tay vẽ theo đường cong cao độ trong không gian khi đọc.',
      },
    ],
    exercises: [
      {
        id: 'ex-3-1',
        type: 'multiple-choice',
        question: 'Dấu thanh nào được biểu thị bằng dấu chấm dưới chữ cái?',
        promptEn: 'Which tone mark is represented by a dot under the letter?',
        options: ['Thanh Nặng', 'Thanh Huyền', 'Thanh Hỏi', 'Thanh Sắc'],
        correctAnswer: 'Thanh Nặng',
        explanation: 'Thanh Nặng có ký hiệu dấu chấm đặt dưới nguyên âm (ví dụ: mạ, mẹ, một).',
      },
    ],
    cultureTip: {
      title: 'Thanh điệu và tính cách vùng miền',
      contentVi:
        'Ngữ điệu thanh điệu miền Bắc sắc nét, miền Trung đậm đà và miền Nam mềm mại tạo nên bức tranh ngôn ngữ phong phú.',
      contentEn:
        'Northern tones are sharp and crisp, Central tones are deep and resonant, while Southern tones are warm and melodic.',
    },
    nextLessonId: 4,
  },

  {
    id: 4,
    stageNumber: 2,
    stageTitle: 'Phần 2: Giao tiếp đầu tiên',
    title: 'Chào hỏi và giới thiệu bản thân',
    subtitle: 'Greetings, Name, Nationality and Basic Polite Expressions',
    durationMinutes: 30,
    objectives: [
      'Nói lời chào lịch sự: Xin chào, Chào bạn, Rất vui được gặp bạn',
      'Giới thiệu họ tên và xuất thân: Tôi tên là..., Tôi đến từ...',
      'Hỏi thăm tên và quốc tịch của người đối diện',
    ],
    introVi:
      'Lời chào là khởi đầu của mọi cuộc trò chuyện. Người Việt rất quý mến người nước ngoài biết mở lời chào bằng tiếng Việt chuẩn xác và nụ cười thân thiện.',
    introEn:
      'A warm greeting is the golden key to Vietnamese hospitality. Locals deeply appreciate foreigners who open conversations with polite Vietnamese.',
    vocabulary: [
      {
        id: 'v4-1',
        vietnamese: 'Xin chào',
        english: 'Hello / Greetings',
        ipa: '/sin˧˧ caːw˨˩/',
        category: 'Chào hỏi',
        tone: 'Ngang - Huyền',
        exampleVi: 'Xin chào, tôi tên là Alex.',
        exampleEn: 'Hello, my name is Alex.',
      },
      {
        id: 'v4-2',
        vietnamese: 'Tên là',
        english: 'Name is / Called',
        ipa: '/ten˧˧ laː˨˩/',
        category: 'Giới thiệu',
        tone: 'Ngang - Huyền',
        exampleVi: 'Bạn tên là gì?',
        exampleEn: 'What is your name?',
      },
      {
        id: 'v4-3',
        vietnamese: 'Đến từ',
        english: 'Come from',
        ipa: '/ɗen˦˥ tɨ˨˩/',
        category: 'Giới thiệu',
        tone: 'Sắc - Huyền',
        exampleVi: 'Tôi đến từ Canada.',
        exampleEn: 'I come from Canada.',
      },
      {
        id: 'v4-4',
        vietnamese: 'Rất vui',
        english: 'Very pleased / Nice',
        ipa: '/zat̚˦˥ vwi˧˧/',
        category: 'Xã giao',
        tone: 'Sắc - Ngang',
        exampleVi: 'Rất vui được gặp bạn.',
        exampleEn: 'Very pleased to meet you.',
      },
    ],
    grammarPoints: [
      {
        title: 'Cấu trúc câu tự giới thiệu',
        structure: 'Tôi tên là + [Tên riêng]. Tôi là người + [Quốc gia].',
        explanationVi:
          'Từ "là" đóng vai trò liên từ tương đương "to be" trong tiếng Anh để định danh tên tuổi và quốc tịch.',
        explanationEn:
          'Use "là" to connect the subject with names and nationalities.',
        examples: [
          { vi: 'Tôi tên là Alex.', en: 'My name is Alex.' },
          { vi: 'Tôi là người Mỹ.', en: 'I am American.' },
        ],
      },
    ],
    dialogue: {
      title: 'Làm quen lần đầu',
      context: 'Gặp gỡ bạn bè tại trung tâm văn hóa',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Xin chào! Tôi tên là Alex. Tôi đến từ Canada.',
          english: 'Hello! My name is Alex. I come from Canada.',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Chào Alex! Rất vui được gặp bạn. Tôi là Lan, người Hà Nội.',
          english: 'Hello Alex! Nice to meet you. I am Lan, from Hanoi.',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nói câu giới thiệu bản thân hoàn chỉnh',
        promptEn: 'Introduce yourself completely in one sentence',
        modelSentence: 'Xin chào, tôi tên là Alex, rất vui được gặp bạn!',
        modelAudioText: 'Xin chào, tôi tên là Alex, rất vui được gặp bạn!',
        tips: 'Phát âm rõ cụm "tên là" và mỉm cười nhẹ khi nói.',
      },
    ],
    exercises: [
      {
        id: 'ex-4-1',
        type: 'reorder',
        question: 'Sắp xếp thành câu đúng: [Tôi] [là] [Alex] [tên]',
        promptEn: 'Reorder into a correct sentence: [Tôi] [là] [Alex] [tên]',
        options: ['Tôi tên là Alex', 'Alex tên là Tôi', 'Tôi là Alex tên', 'Tên Alex là Tôi'],
        correctAnswer: 'Tôi tên là Alex',
        explanation: 'Trật tự câu chuẩn: Chủ ngữ (Tôi) + tên là + [Tên].',
      },
    ],
    cultureTip: {
      title: 'Nụ cười khi chào hỏi',
      contentVi:
        'Ở Việt Nam, nụ cười kèm theo ánh mắt nhìn trực diện thể hiện sự tôn trọng, cởi mở và thiện chí gắn kết.',
      contentEn:
        'A gentle smile and friendly eye contact demonstrate respect and sincere goodwill in Vietnamese culture.',
    },
    nextLessonId: 5,
  },

  {
    id: 5,
    stageNumber: 2,
    stageTitle: 'Phần 2: Giao tiếp đầu tiên',
    title: 'Số đếm, ngày tháng và thời gian',
    subtitle: 'Numbers 1-100, Days, Months and Telling Time',
    durationMinutes: 30,
    objectives: [
      'Đếm thành thạo từ 1 đến 100 và nắm các quy tắc biến âm: mốt, lăm, tư',
      'Hỏi và trả lời giờ giấc: Bây giờ là mấy giờ?',
      'Nói ngày tháng năm và các thứ trong tuần',
    ],
    introVi:
      'Hệ thống số đếm tiếng Việt cực kỳ logic theo hệ thập phân. Nắm vững số đếm giúp bạn tự tin mua sắm, hỏi giờ và hẹn gặp bạn bè.',
    introEn:
      'Vietnamese numbers follow a strictly logical decimal system. Mastering them enables you to tell time, manage dates, and shop with confidence.',
    vocabulary: [
      {
        id: 'v5-1',
        vietnamese: 'Một, Hai, Ba',
        english: 'One, Two, Three',
        ipa: '/mot̚ˀ˨˩ haːj˧˧ ɓaː˧˧/',
        category: 'Số đếm',
        tone: 'Nặng - Ngang - Ngang',
        exampleVi: 'Một, hai, ba, bắt đầu!',
        exampleEn: 'One, two, three, begin!',
      },
      {
        id: 'v5-2',
        vietnamese: 'Mười lăm',
        english: 'Fifteen',
        ipa: '/mɨəj˨˩ laːm˧˧/',
        category: 'Số đếm',
        tone: 'Huyền - Ngang',
        exampleVi: 'Bây giờ là tám giờ mười lăm phút.',
        exampleEn: 'Now it is eight fifteen.',
      },
      {
        id: 'v5-3',
        vietnamese: 'Hai mươi mốt',
        english: 'Twenty-one',
        ipa: '/haːj˧˧ mɨəj˨˩ mot̚˦˥/',
        category: 'Số đếm',
        tone: 'Ngang - Huyền - Sắc',
        exampleVi: 'Hôm nay là ngày hai mươi mốt.',
        exampleEn: 'Today is the twenty-first.',
      },
      {
        id: 'v5-4',
        vietnamese: 'Bây giờ',
        english: 'Now / Currently',
        ipa: '/ɓəj˧˧ zəː˨˩/',
        category: 'Thời gian',
        tone: 'Ngang - Huyền',
        exampleVi: 'Bây giờ là mấy giờ?',
        exampleEn: 'What time is it now?',
      },
    ],
    grammarPoints: [
      {
        title: 'Quy tắc biến âm số đếm',
        structure: '1 -> mốt (21, 31, 91) | 5 -> lăm (15, 25, 35) | 4 -> tư (24, 34)',
        explanationVi:
          'Số 1 sau từ mươi đọc là "mốt" (hai mươi mốt). Số 5 sau từ mươi đọc là "lăm" (hai mươi lăm).',
        explanationEn:
          'In compound numbers, 1 becomes "mốt" and 5 becomes "lăm" to maintain phonetic clarity.',
        examples: [
          { vi: '25: Hai mươi lăm', en: 'Twenty-five' },
          { vi: '31: Ba mươi mốt', en: 'Thirty-one' },
        ],
      },
    ],
    dialogue: {
      title: 'Hỏi giờ hẹn học',
      context: 'Hỏi giờ chuẩn bị vào lớp',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Bây giờ là mấy giờ rồi bạn ơi?',
          english: 'What time is it now, friend?',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Bây giờ là chín giờ rưỡi sáng.',
          english: 'Now it is 9:30 in the morning.',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đọc giờ hiện tại',
        promptEn: 'Say current time',
        modelSentence: 'Bây giờ là mười giờ sáng.',
        modelAudioText: 'Bây giờ là mười giờ sáng.',
        tips: 'Phát âm rõ ràng từ "bây giờ" và "giờ sáng".',
      },
    ],
    exercises: [
      {
        id: 'ex-5-1',
        type: 'multiple-choice',
        question: 'Số 35 trong tiếng Việt đọc là gì?',
        promptEn: 'How is number 35 read in Vietnamese?',
        options: ['Ba mươi lăm', 'Ba mươi năm', 'Mười lăm ba', 'Ba năm'],
        correctAnswer: 'Ba mươi lăm',
        explanation: 'Số 5 sau hàng chục "mươi" đổi âm thành "lăm".',
      },
    ],
    cultureTip: {
      title: 'Các thứ trong tuần',
      contentVi:
        'Tuần lễ Việt Nam đếm từ Thứ Hai (Monday) đến Thứ Bảy (Saturday), và ngày cuối cùng là Chủ Nhật.',
      contentEn:
        'Vietnamese weekdays are numbered from Monday (Thứ Hai) to Saturday (Thứ Bảy), ending with Sunday (Chủ Nhật).',
    },
    nextLessonId: 6,
  },

  // GIAI ĐOẠN 2: XƯNG HÔ & CẤU TRÚC CÂU CƠ BẢN (CHƯƠNG 6 - 9)
  {
    id: 6,
    stageNumber: 3,
    stageTitle: 'Phần 3: Xây dựng câu tiếng Việt',
    title: 'Đại từ nhân xưng và cách xưng hô',
    subtitle: 'Kinship Pronouns and Contextual Addressing',
    durationMinutes: 35,
    objectives: [
      'Hiểu bản chất xưng hô theo tuổi tác và quan hệ xã hội: Anh, Chị, Em, Cô, Chú, Bác',
      'Sử dụng các cặp xưng hô đối ứng chuẩn xác',
      'Biết cách xưng hô trung tính và lịch thiệp với bạn bè (Bạn - Tôi / Mình)',
    ],
    introVi:
      'Tiếng Việt không chỉ có "I - You". Người Việt dùng các từ quan hệ gia đình để xưng hô trong xã hội, tạo cảm giác gắn bó và kính trọng.',
    introEn:
      'Vietnamese pronouns reflect social warmth and relative age. Learning the reciprocal pairs allows you to communicate with natural respect.',
    vocabulary: [
      {
        id: 'v6-1',
        vietnamese: 'Anh',
        english: 'Older brother / Male slightly older',
        ipa: '/ʔajŋ˧˧/',
        category: 'Xưng hô',
        tone: 'Thanh Ngang',
        exampleVi: 'Anh có khỏe không?',
        exampleEn: 'How are you, older brother?',
      },
      {
        id: 'v6-2',
        vietnamese: 'Chị',
        english: 'Older sister / Female slightly older',
        ipa: '/ciˀ˨˩/',
        category: 'Xưng hô',
        tone: 'Thanh Nặng',
        exampleVi: 'Chị Lan rất nhiệt tình.',
        exampleEn: 'Sister Lan is very enthusiastic.',
      },
      {
        id: 'v6-3',
        vietnamese: 'Em',
        english: 'Younger sibling / Younger person',
        ipa: '/ʔɛm˧˧/',
        category: 'Xưng hô',
        tone: 'Thanh Ngang',
        exampleVi: 'Em cảm ơn anh ạ.',
        exampleEn: 'I (younger) thank you, brother.',
      },
      {
        id: 'v6-4',
        vietnamese: 'Cô / Chú',
        english: 'Aunt / Uncle (middle-aged adult)',
        ipa: '/ko˧˧ cu˦˥/',
        category: 'Xưng hô',
        tone: 'Ngang - Sắc',
        exampleVi: 'Cháu chào cô chú ạ.',
        exampleEn: 'I greet you, aunt and uncle.',
      },
    ],
    grammarPoints: [
      {
        title: 'Cặp xưng hô đối ứng',
        structure: 'Gọi người khác là [A] thì tự xưng mình là [B]',
        explanationVi:
          'Gọi "Anh/Chị" thì xưng "Em". Gọi "Cô/Chú/Bác" thì xưng "Cháu". Bạn bè cùng tuổi thì xưng "Tôi - Bạn" hoặc "Mình - Bạn".',
        explanationEn:
          'Always use reciprocal pairs: Anh - Em, Chị - Em, Cô/Chú - Cháu, Bạn - Tôi.',
        examples: [
          { vi: 'Em chào anh ạ!', en: 'Hello brother (polite)!' },
        ],
      },
    ],
    dialogue: {
      title: 'Chào hỏi nhân viên phục vụ',
      context: 'Alex nói chuyện với người phục vụ trẻ hơn mình',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Chào em! Cho anh xem thực đơn với nhé.',
          english: 'Hello! Please show me the menu.',
          avatarRole: 'male',
        },
        {
          speaker: 'Phục vụ',
          vietnamese: 'Dạ vâng, em gửi anh thực đơn ạ.',
          english: 'Yes sir, here is the menu for you.',
          avatarRole: 'server',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nói lời chào lịch sự với người lớn tuổi',
        promptEn: 'Greet an elder respectfully',
        modelSentence: 'Cháu chào bác ạ, chúc bác một ngày tốt lành!',
        modelAudioText: 'Cháu chào bác ạ, chúc bác một ngày tốt lành!',
        tips: 'Thêm từ "ạ" ở cuối câu khi nói với người lớn tuổi.',
      },
    ],
    exercises: [
      {
        id: 'ex-6-1',
        type: 'multiple-choice',
        question: 'Khi nói chuyện với người nam hơn tuổi mình, bạn nên xưng hô cặp nào?',
        promptEn: 'Which pronoun pair is used with a male slightly older than you?',
        options: ['Anh - Em', 'Chú - Cháu', 'Bác - Tôi', 'Em - Tôi'],
        correctAnswer: 'Anh - Em',
        explanation: 'Gọi người nam lớn hơn là "Anh" và tự xưng là "Em".',
      },
    ],
    cultureTip: {
      title: 'Ý nghĩa kính trọng của từ "Ạ"',
      contentVi:
        'Từ "ạ" ở cuối câu là biểu hiện cao quý của sự lễ phép trong văn hóa ứng xử Việt Nam.',
      contentEn:
        'Ending sentences with "ạ" expresses heartfelt politeness toward elders and esteemed hosts.',
    },
    nextLessonId: 7,
  },

  {
    id: 7,
    stageNumber: 3,
    stageTitle: 'Phần 3: Xây dựng câu tiếng Việt',
    title: 'Từ vựng và cấu trúc câu cơ bản',
    subtitle: 'Basic Word Order (S + V + O) and Sentence Building',
    durationMinutes: 35,
    objectives: [
      'Nắm vững trật tự từ cơ bản: Chủ ngữ + Động từ + Tân ngữ (S + V + O)',
      'Đặt câu khẳng định và phủ định với từ "không" hoặc "chưa"',
      'Mở rộng cụm danh từ với tính từ bổ nghĩa',
    ],
    introVi:
      'Ngữ pháp tiếng Việt rất trực tiếp: Trật tự từ S + V + O tương đồng với tiếng Anh, giúp bạn nhanh chóng ghép từ thành câu giao tiếp hoàn chỉnh.',
    introEn:
      'Vietnamese sentence order follows S + V + O. Adjectives follow the nouns they modify.',
    vocabulary: [
      {
        id: 'v7-1',
        vietnamese: 'Tôi',
        english: 'I / Me',
        ipa: '/toj˧˧/',
        category: 'Đại từ',
        tone: 'Thanh Ngang',
        exampleVi: 'Tôi học tiếng Việt.',
        exampleEn: 'I study Vietnamese.',
      },
      {
        id: 'v7-2',
        vietnamese: 'Thích',
        english: 'To like',
        ipa: '/tʰik̚˦˥/',
        category: 'Động từ',
        tone: 'Thanh Sắc',
        exampleVi: 'Tôi thích cà phê Việt Nam.',
        exampleEn: 'I like Vietnamese coffee.',
      },
      {
        id: 'v7-3',
        vietnamese: 'Không',
        english: 'No / Not',
        ipa: '/xəwŋ͡m˧˧/',
        category: 'Phủ định',
        tone: 'Thanh Ngang',
        exampleVi: 'Tôi không ăn cay được.',
        exampleEn: 'I cannot eat spicy food.',
      },
      {
        id: 'v7-4',
        vietnamese: 'Ngon',
        english: 'Delicious',
        ipa: '/ŋɔn˧˧/',
        category: 'Tính từ',
        tone: 'Thanh Ngang',
        exampleVi: 'Món này rất ngon.',
        exampleEn: 'This dish is very delicious.',
      },
    ],
    grammarPoints: [
      {
        title: 'Trật tự tính từ đi sau danh từ',
        structure: 'Danh từ + Tính từ bổ nghĩa',
        explanationVi:
          'Trong tiếng Việt, tính từ đứng sau danh từ (ngược lại với tiếng Anh). Ví dụ: "cà phê đen" (coffee black), "áo đẹp" (shirt beautiful).',
        explanationEn:
          'Adjectives follow the noun: "cà phê đen" = black coffee, "nhà to" = big house.',
        examples: [
          { vi: 'Trái cây tươi', en: 'Fresh fruit' },
          { vi: 'Trà đá', en: 'Iced tea' },
        ],
      },
    ],
    dialogue: {
      title: 'Bày tỏ sở thích ẩm thực',
      context: 'Nói về món ăn yêu thích',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Tôi rất thích món phở bò.',
          english: 'I really like beef pho.',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Phở bò Hà Nội rất ngon và thanh đạm!',
          english: 'Hanoi beef pho is very delicious and savory!',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nói một câu khẳng định sở thích của bạn',
        promptEn: 'State your food preference',
        modelSentence: 'Tôi thích uống trà đá và ăn bánh mì.',
        modelAudioText: 'Tôi thích uống trà đá và ăn bánh mì.',
        tips: 'Nối các vế câu bằng từ "và" nhẹ nhàng.',
      },
    ],
    exercises: [
      {
        id: 'ex-7-1',
        type: 'multiple-choice',
        question: 'Cụm từ nào có trật tự từ đúng cho "cà phê ngon"?',
        promptEn: 'Which phrase has correct word order for "delicious coffee"?',
        options: ['Cà phê ngon', 'Ngon cà phê', 'Là cà phê ngon', 'Cà phê là ngon'],
        correctAnswer: 'Cà phê ngon',
        explanation: 'Danh từ đứng trước tính từ: Cà phê (noun) + ngon (adj).',
      },
    ],
    cultureTip: {
      title: 'Thói quen uống cà phê',
      contentVi:
        'Cà phê vỉa hè là nét văn hóa đậm đà của người Việt. Mọi người ngồi trên những chiếc ghế nhỏ vừa uống cà phê vừa ngắm phố xá.',
      contentEn:
        'Street-side coffee on low stools is an iconic cultural tradition where locals enjoy coffee while watching street life.',
    },
    nextLessonId: 8,
  },

  {
    id: 8,
    stageNumber: 3,
    stageTitle: 'Phần 3: Xây dựng câu tiếng Việt',
    title: 'Đặt câu hỏi và trả lời',
    subtitle: 'Question Words (Ai, Gì, Ở đâu, Khi nào, Bao nhiêu)',
    durationMinutes: 35,
    objectives: [
      'Nắm vững các từ để hỏi cốt lõi: Ai, Cái gì, Ở đâu, Khi nào, Tại sao, Thế nào, Bao nhiêu',
      'Đặt câu hỏi theo nguyên tắc in-situ (từ để hỏi giữ nguyên vị trí cần trả lời)',
      'Hỏi và trả lời câu hỏi Yes/No với cấu trúc "...có...không?"',
    ],
    introVi:
      'Hỏi đúng câu hỏi giúp bạn thu thập thông tin và kết nối sâu sắc với người dân địa phương trong mọi chuyến đi.',
    introEn:
      'Vietnamese questions do not require word inversion or auxiliary verbs. The question word simply takes the place of the missing information.',
    vocabulary: [
      {
        id: 'v8-1',
        vietnamese: 'Ở đâu',
        english: 'Where',
        ipa: '/ʔəː˧˩˨ ɗəw˧˧/',
        category: 'Từ để hỏi',
        tone: 'Hỏi - Ngang',
        exampleVi: 'Nhà vệ sinh ở đâu?',
        exampleEn: 'Where is the restroom?',
      },
      {
        id: 'v8-2',
        vietnamese: 'Cái gì',
        english: 'What',
        ipa: '/kaːj˦˥ zi˨˩/',
        category: 'Từ để hỏi',
        tone: 'Sắc - Huyền',
        exampleVi: 'Đây là cái gì?',
        exampleEn: 'What is this?',
      },
      {
        id: 'v8-3',
        vietnamese: 'Bao nhiêu',
        english: 'How much / How many',
        ipa: '/ɓaːw˧˧ ɲiəw˧˧/',
        category: 'Từ để hỏi',
        tone: 'Ngang - Ngang',
        exampleVi: 'Cái này bao nhiêu tiền?',
        exampleEn: 'How much is this?',
      },
      {
        id: 'v8-4',
        vietnamese: 'Khi nào',
        english: 'When',
        ipa: '/kʰi˧˧ naːw˨˩/',
        category: 'Từ để hỏi',
        tone: 'Ngang - Huyền',
        exampleVi: 'Khi nào bạn đi Hà Nội?',
        exampleEn: 'When are you going to Hanoi?',
      },
    ],
    grammarPoints: [
      {
        title: 'Cấu trúc câu hỏi Yes/No',
        structure: 'Chủ ngữ + có + Động từ/Tính từ + không?',
        explanationVi:
          'Để hỏi có... không: "Bạn có khỏe không?" hoặc "Món này có cay không?". Trả lời: "Có" hoặc "Không".',
        explanationEn:
          'Formula: [Subject] + có + [Verb/Adj] + không? Answer with "Có" (Yes) or "Không" (No).',
        examples: [
          { vi: 'Bạn có thích phở không? - Có, tôi rất thích!', en: 'Do you like pho? - Yes, I like it very much!' },
        ],
      },
    ],
    dialogue: {
      title: 'Hỏi thông tin lớp học',
      context: 'Hỏi giờ bắt đầu lớp học tiếng Việt',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Lớp học của chúng ta khi nào bắt đầu?',
          english: 'When does our class begin?',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Lớp học bắt đầu lúc tám giờ sáng mai.',
          english: 'Class begins at 8 AM tomorrow morning.',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Hỏi vị trí của một địa điểm',
        promptEn: 'Ask for the location of an eatery',
        modelSentence: 'Quán cà phê gần nhất ở đâu ạ?',
        modelAudioText: 'Quán cà phê gần nhất ở đâu ạ?',
        tips: 'Ngữ điệu tự nhiên, nhấn nhẹ vào cụm "ở đâu ạ".',
      },
    ],
    exercises: [
      {
        id: 'ex-8-1',
        type: 'multiple-choice',
        question: 'Từ để hỏi nào dùng để hỏi về số lượng hoặc giá tiền?',
        promptEn: 'Which question word asks for quantity or price?',
        options: ['Bao nhiêu', 'Ai', 'Ở đâu', 'Khi nào'],
        correctAnswer: 'Bao nhiêu',
        explanation: '"Bao nhiêu" dùng để hỏi số lượng hoặc số tiền ("bao nhiêu tiền").',
      },
    ],
    cultureTip: {
      title: 'Hỏi thăm "Ăn cơm chưa?"',
      contentVi:
        'Người Việt hay hỏi "Ăn cơm chưa?". Đây thực chất là lời chào hỏi quan tâm chứ không phải lời mời ăn uống trang trọng.',
      contentEn:
        'Asking "Have you eaten yet?" (Ăn cơm chưa?) is a caring friendly greeting equivalent to "How are you doing?".',
    },
    nextLessonId: 9,
  },

  {
    id: 9,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Gia đình và các mối quan hệ',
    subtitle: 'Family Members, Kinship and Talking About Relatives',
    durationMinutes: 35,
    objectives: [
      'Từ vựng các thành viên gia đình: Ông, Bà, Bố/Ba, Mẹ/Má, Anh, Chị, Em, Con',
      'Miêu tả số lượng thành viên trong gia đình',
      'Hỏi thăm về nghề nghiệp và nơi ở của người thân',
    ],
    introVi:
      'Gia đình là nền tảng văn hóa Việt Nam. Người Việt rất thích chia sẻ về người thân và luôn vui vẻ lắng nghe bạn kể về tổ ấm của mình.',
    introEn:
      'Family is the center of Vietnamese society. Talking about family members creates immediate warmth and rapport.',
    vocabulary: [
      {
        id: 'v9-1',
        vietnamese: 'Gia đình',
        english: 'Family',
        ipa: '/zaː˧˧ ɗiɲ˨˩/',
        category: 'Gia đình',
        tone: 'Ngang - Huyền',
        exampleVi: 'Gia đình tôi có bốn người.',
        exampleEn: 'My family has four people.',
      },
      {
        id: 'v9-2',
        vietnamese: 'Bố / Ba',
        english: 'Father / Dad',
        ipa: '/ɓo˦˥ / ɓaː˧˧/',
        category: 'Gia đình',
        tone: 'Thanh Sắc / Ngang',
        exampleVi: 'Bố tôi là bác sĩ.',
        exampleEn: 'My father is a doctor.',
      },
      {
        id: 'v9-3',
        vietnamese: 'Mẹ / Má',
        english: 'Mother / Mom',
        ipa: '/mɛˀ˨˩ / maː˦˥/',
        category: 'Gia đình',
        tone: 'Thanh Nặng / Sắc',
        exampleVi: 'Mẹ tôi nấu ăn rất ngon.',
        exampleEn: 'My mother cooks very deliciously.',
      },
      {
        id: 'v9-4',
        vietnamese: 'Anh trai / Chị gái',
        english: 'Older brother / Older sister',
        ipa: '/ʔajŋ˧˧ caːj˧˧/',
        category: 'Gia đình',
        tone: 'Ngang - Ngang',
        exampleVi: 'Anh trai tôi sống ở Canada.',
        exampleEn: 'My older brother lives in Canada.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu miêu tả gia đình',
        structure: 'Gia đình tôi có + [Số lượng] + người: [Liệt kê]',
        explanationVi:
          'Dùng loại từ "người" khi đếm thành viên gia đình: "Nhà tôi có ba người: bố, mẹ và tôi".',
        explanationEn:
          'Use the classifier "người" when counting human family members.',
        examples: [
          { vi: 'Gia đình bạn có mấy người?', en: 'How many people are in your family?' },
        ],
      },
    ],
    dialogue: {
      title: 'Kể về gia đình',
      context: 'Xem ảnh gia đình cùng bạn bè',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Đây là gia đình tôi: bố, mẹ và một em gái.',
          english: 'This is my family: dad, mom, and a younger sister.',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Gia đình bạn trông thật hạnh phúc và ấm áp!',
          english: 'Your family looks so happy and warm!',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Kể về số thành viên trong gia đình',
        promptEn: 'State your family size in Vietnamese',
        modelSentence: 'Gia đình tôi có bốn người: bố, mẹ, anh trai và tôi.',
        modelAudioText: 'Gia đình tôi có bốn người: bố, mẹ, anh trai và tôi.',
        tips: 'Phát âm rõ ràng các danh từ chỉ người thân.',
      },
    ],
    exercises: [
      {
        id: 'ex-9-1',
        type: 'multiple-choice',
        question: 'Loại từ nào dùng khi đếm thành viên trong gia đình?',
        promptEn: 'Which classifier is used for counting family members?',
        options: ['Người', 'Cái', 'Con', 'Chiếc'],
        correctAnswer: 'Người',
        explanation: 'Dùng loại từ "người" để đếm người (bốn người, năm người).',
      },
    ],
    cultureTip: {
      title: 'Truyền thống tam đại đồng đường',
      contentVi:
        'Ở Việt Nam, nhiều gia đình có ba thế hệ (ông bà, cha mẹ, con cái) cùng sống chung dưới một mái nhà hòa thuận.',
      contentEn:
        'Multi-generational living (grandparents, parents, children) under one roof is a celebrated cultural value in Vietnam.',
    },
    nextLessonId: 10,
  },

  // GIAI ĐOẠN 3: GIAO TIẾP ĐỜI SỐNG THƯỜNG NHẬT (CHƯƠNG 10 - 16)
  {
    id: 10,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Ăn uống và gọi món',
    subtitle: 'Ordering Food, Drinks, Customizations and Asking for the Bill',
    durationMinutes: 40,
    objectives: [
      'Gọi các món ăn phổ biến: Phở, Bún chả, Cơm tấm, Trà đá, Cà phê sữa đá',
      'Đưa ra yêu cầu riêng: Đừng bỏ hành, Không ăn cay, Ít đường, Ít đá',
      'Gọi thanh toán lịch sự: Em ơi tính tiền!',
    ],
    introVi:
      'Thưởng thức ẩm thực đường phố là một trong những trải nghiệm tuyệt vời nhất tại Việt Nam. Nắm vững cách gọi món giúp bạn có được bữa ăn hoàn hảo như ý muốn.',
    introEn:
      'Vietnamese culinary adventures start with confident ordering, custom spice preferences, and friendly payment phrases.',
    vocabulary: [
      {
        id: 'v10-1',
        vietnamese: 'Phở bò tái',
        english: 'Rare beef pho',
        ipa: '/fəː˧˩˨ ɓɔ˨˩ taːj˦˥/',
        category: 'Ẩm thực',
        tone: 'Hỏi - Huyền - Sắc',
        exampleVi: 'Cho anh một tô phở bò tái.',
        exampleEn: 'Give me a bowl of rare beef pho.',
      },
      {
        id: 'v10-2',
        vietnamese: 'Đừng bỏ hành',
        english: 'No scallions / green onions please',
        ipa: '/ɗɨŋ˨˩ ɓɔ˧˩˨ hajŋ˨˩/',
        category: 'Yêu cầu',
        tone: 'Huyền - Hỏi - Huyền',
        exampleVi: 'Tô của em đừng bỏ hành nhé.',
        exampleEn: 'Please don’t put green onions in my bowl.',
      },
      {
        id: 'v10-3',
        vietnamese: 'Cà phê sữa đá',
        english: 'Iced coffee with condensed milk',
        ipa: '/kaː˨˩ fe˧˧ sɨə˦ˀ˥ ɗaː˦˥/',
        category: 'Đồ uống',
        tone: 'Huyền - Ngang - Ngã - Sắc',
        exampleVi: 'Một ly cà phê sữa đá ít ngọt.',
        exampleEn: 'One iced milk coffee with less sugar.',
      },
      {
        id: 'v10-4',
        vietnamese: 'Tính tiền',
        english: 'Check please / Bill please',
        ipa: '/tiŋ˦˥ tiən˨˩/',
        category: 'Thanh toán',
        tone: 'Sắc - Huyền',
        exampleVi: 'Em ơi, cho anh tính tiền!',
        exampleEn: 'Server, check please!',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu gọi món tại bàn',
        structure: 'Cho [Xưng hô] + [Số lượng] + [Món ăn/uống], [Yêu cầu phụ] nhé!',
        explanationVi:
          'Ví dụ: "Cho anh một bát phở bò chín, không cay nhé!" hoặc "Cho chị một cốc trà đá".',
        explanationEn:
          'Pattern: "Cho [pronoun] [quantity] [dish], [customization] nhé!"',
        examples: [
          { vi: 'Cho tôi một bát bún chả không ớt.', en: 'Give me a bowl of bun cha with no chili.' },
        ],
      },
    ],
    dialogue: {
      title: 'Gọi món tại quán phở',
      context: 'Alex gọi món và yêu cầu không cay',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Em ơi, cho anh một bát phở bò tái nạm, đừng bỏ hành nhé!',
          english: 'Server, give me a bowl of rare and flank beef pho, no scallions please!',
          avatarRole: 'male',
        },
        {
          speaker: 'Phục vụ',
          vietnamese: 'Dạ có ngay ạ! Anh có dùng thêm quẩy hay trà đá không ạ?',
          english: 'Yes right away sir! Would you like fried crullers or iced tea too?',
          avatarRole: 'server',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Gọi phục vụ tính tiền khi ăn xong',
        promptEn: 'Call waiter for bill',
        modelSentence: 'Em ơi, tính tiền bàn số năm giúp anh nhé!',
        modelAudioText: 'Em ơi, tính tiền bàn số năm giúp anh nhé!',
        tips: 'Nói to vừa phải, phát âm rõ từ "tính tiền".',
      },
    ],
    exercises: [
      {
        id: 'ex-10-1',
        type: 'multiple-choice',
        question: 'Khi không muốn ăn cay, bạn nên nói thế nào?',
        promptEn: 'How to ask for non-spicy food?',
        options: ['Không ăn cay / Đừng cho ớt', 'Cho nhiều ớt', 'Tính tiền', 'Cho thêm đá'],
        correctAnswer: 'Không ăn cay / Đừng cho ớt',
        explanation: '"Không ăn cay" hoặc "Đừng cho ớt" là cách dặn đầu bếp chuẩn nhất.',
      },
    ],
    cultureTip: {
      title: 'Gọi phục vụ "Em ơi"',
      contentVi:
        'Gọi "Em ơi!" là nét xưng hô thân mật chuẩn mực trong các hàng quán tại Việt Nam.',
      contentEn:
        'Calling the waiter "Em ơi!" (younger sibling!) is completely polite and standard in Vietnamese eateries.',
    },
    nextLessonId: 11,
  },

  {
    id: 11,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Mua sắm và hỏi giá',
    subtitle: 'Shopping at Markets, Asking Prices, Bargaining and Payment',
    durationMinutes: 40,
    objectives: [
      'Hỏi giá các mặt hàng nông sản, quần áo và đồ lưu niệm',
      'Mặc cả lịch thiệp: Bớt một chút được không cô?, Giảm giá cho cháu nhé',
      'Hỏi về phương thức thanh toán tiền mặt và chuyển khoản VietQR',
    ],
    introVi:
      'Chợ truyền thống là không gian giao thương sinh động. Biết cách hỏi giá và mặc cả vui vẻ giúp bạn mua được những món đồ ưng ý với giá phải chăng.',
    introEn:
      'Traditional markets are vibrant centers of social life. Learning friendly bargaining turns shopping into a cheerful cultural exchange.',
    vocabulary: [
      {
        id: 'v11-1',
        vietnamese: 'Bao nhiêu một ký',
        english: 'How much per kilogram',
        ipa: '/ɓaːw˧˧ ɲiəw˧˧ mot̚ˀ˨˩ ki˧˧/',
        category: 'Mua sắm',
        tone: 'Ngang - Ngang - Nặng - Ngang',
        exampleVi: 'Xoài này bao nhiêu một ký vậy cô?',
        exampleEn: 'How much per kilo are these mangoes, auntie?',
      },
      {
        id: 'v11-2',
        vietnamese: 'Đắt quá / Mắc quá',
        english: 'Too expensive (Đắt: North / Mắc: South)',
        ipa: '/ɗat̚˦˥ kwaː˦˥/',
        category: 'Mua sắm',
        tone: 'Sắc - Sắc',
        exampleVi: 'Đắt quá, cô bớt cho cháu chút đi!',
        exampleEn: 'Too expensive, please discount a little for me!',
      },
      {
        id: 'v11-3',
        vietnamese: 'Bớt một chút',
        english: 'Discount a little bit',
        ipa: '/ɓəːt̚˦˥ mot̚ˀ˨˩ cut̚˦˥/',
        category: 'Mua sắm',
        tone: 'Sắc - Nặng - Sắc',
        exampleVi: 'Bớt mười nghìn được không?',
        exampleEn: 'Can you lower the price by 10,000 VND?',
      },
      {
        id: 'v11-4',
        vietnamese: 'Quét mã QR',
        english: 'Scan QR code payment',
        ipa: '/kwɛt̚˦˥ maː˦ˀ˥ QR/',
        category: 'Thanh toán',
        tone: 'Sắc - Ngã',
        exampleVi: 'Cháu quét mã chuyển khoản nhé.',
        exampleEn: 'Let me scan the QR code to transfer payment.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu thương lượng giá',
        structure: '[Mặt hàng] + này bao nhiêu một [Đơn vị]? Bớt cho cháu chút nhé!',
        explanationVi:
          'Khi mặc cả, luôn giữ nụ cười tươi và dùng các từ xưng hô tôn trọng như "Cô ơi", "Chị ơi".',
        explanationEn:
          'Keep your tone lighthearted and friendly. Politeness yields better discounts.',
        examples: [
          { vi: 'Hoa quả tươi quá, cô bớt cho cháu nhé!', en: 'The fruit is so fresh, please discount for me!' },
        ],
      },
    ],
    dialogue: {
      title: 'Mua hoa quả ở chợ',
      context: 'Alex hỏi mua măng cụt',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Cô ơi, măng cụt này bao nhiêu một ký vậy ạ?',
          english: 'Auntie, how much is a kilo of these mangosteens?',
          avatarRole: 'male',
        },
        {
          speaker: 'Cô bán hàng',
          vietnamese: 'Sáu mươi nghìn một ký con nhé! Ngon ngọt lắm.',
          english: 'Sixty thousand a kilo dear! Very sweet and delicious.',
          avatarRole: 'seller',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Hỏi giá và đề nghị bớt giá nhẹ nhàng',
        promptEn: 'Inquire price and ask for small discount',
        modelSentence: 'Cô ơi, cái này bao nhiêu tiền? Bớt một chút cháu lấy hai cái nhé!',
        modelAudioText: 'Cô ơi, cái này bao nhiêu tiền? Bớt một chút cháu lấy hai cái nhé!',
        tips: 'Nói với thái độ vui tươi, thân mật.',
      },
    ],
    exercises: [
      {
        id: 'ex-11-1',
        type: 'multiple-choice',
        question: 'Từ nào ở miền Nam đồng nghĩa với từ "Đắt"?',
        promptEn: 'Which word in the South means "expensive"?',
        options: ['Mắc', 'Rẻ', 'Nặng', 'Cao'],
        correctAnswer: 'Mắc',
        explanation: 'Người miền Nam thường nói "Mắc quá" thay cho "Đắt quá".',
      },
    ],
    cultureTip: {
      title: 'Tục "Mở hàng"',
      contentVi:
        'Người bán hàng rất trân trọng vị khách đầu tiên trong ngày để lấy may mắn buôn may bán đắt.',
      contentEn:
        'The first customer ("mở hàng") brings fortune for the day. Decisive, friendly purchases are warmly welcomed.',
    },
    nextLessonId: 12,
  },

  {
    id: 12,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Hỏi đường và phương tiện di chuyển',
    subtitle: 'Directions, Grab, Taxis and Bus Navigation',
    durationMinutes: 35,
    objectives: [
      'Hỏi phương hướng: Đi thẳng, Rẽ trái, Rẽ phải, Quay đầu, Ngã tư',
      'Giao tiếp với tài xế xe công nghệ: Tôi đang đứng trước cổng, Cho tôi xuống ở đây',
      'Hỏi khoảng cách và thời gian di chuyển',
    ],
    introVi:
      'Đường phố Việt Nam nhộn nhịp xe cộ. Biết cách chỉ đường và xác nhận điểm đến giúp chuyến đi của bạn an toàn và thuận lợi.',
    introEn:
      'Navigating Vietnamese traffic via Grab, taxis, or on foot requires clear directions and landmark vocabulary.',
    vocabulary: [
      {
        id: 'v12-1',
        vietnamese: 'Đi thẳng',
        english: 'Go straight',
        ipa: '/ɗi˧˧ tʰaːŋ˧˩˨/',
        category: 'Phương hướng',
        tone: 'Ngang - Hỏi',
        exampleVi: 'Bạn cứ đi thẳng qua ngã tư.',
        exampleEn: 'Just go straight through the intersection.',
      },
      {
        id: 'v12-2',
        vietnamese: 'Rẽ trái / Quẹo trái',
        english: 'Turn left',
        ipa: '/rɛ˦ˀ˥ caːj˦˥/',
        category: 'Phương hướng',
        tone: 'Ngã - Sắc',
        exampleVi: 'Đến đèn đỏ thì rẽ trái.',
        exampleEn: 'Turn left at the red traffic light.',
      },
      {
        id: 'v12-3',
        vietnamese: 'Rẽ phải / Quẹo phải',
        english: 'Turn right',
        ipa: '/rɛ˦ˀ˥ faːj˧˩˨/',
        category: 'Phương hướng',
        tone: 'Ngã - Hỏi',
        exampleVi: 'Qua cầu rồi rẽ phải vào ngõ.',
        exampleEn: 'Cross the bridge then turn right into the alley.',
      },
      {
        id: 'v12-4',
        vietnamese: 'Cho tôi xuống ở đây',
        english: 'Drop me off here please',
        ipa: '/cɔ˧˧ toj˧˧ swəwŋ͡m˦˥ ʔəː˧˩˨ ɗəj˧˧/',
        category: 'Đi lại',
        tone: 'Ngang - Ngang - Sắc - Hỏi - Ngang',
        exampleVi: 'Anh ơi, cho tôi xuống ở ngay góc kia.',
        exampleEn: 'Driver, please drop me off right at that corner.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu hỏi khoảng cách và thời gian',
        structure: 'Từ đây đến [Địa điểm] đi mất bao lâu / bao xa?',
        explanationVi:
          'Dùng "bao xa" để hỏi cự ly (km, mét) và "bao lâu" để hỏi thời gian di chuyển (phút, tiếng).',
        explanationEn:
          'Use "bao xa" for distance and "bao lâu" for duration.',
        examples: [
          { vi: 'Từ đây ra hồ Gươm đi mất khoảng mười phút.', en: 'From here to Hoan Kiem Lake takes about 10 minutes.' },
        ],
      },
    ],
    dialogue: {
      title: 'Đón xe Grab',
      context: 'Alex gọi điện cho tài xế xe máy',
      lines: [
        {
          speaker: 'Tài xế',
          vietnamese: 'Alo, anh đang đứng ở số nhà bao nhiêu vậy?',
          english: 'Hello, what house number are you standing at?',
          avatarRole: 'male',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Tôi đang đứng trước cổng ngân hàng Vietcombank, áo màu xanh.',
          english: 'I am standing in front of the Vietcombank gate, wearing a blue shirt.',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Yêu cầu tài xế dừng xe tại điểm đến',
        promptEn: 'Instruct driver where to drop off',
        modelSentence: 'Anh ơi, sắp đến rồi, cho tôi xuống ở ngay trước cổng trường nhé!',
        modelAudioText: 'Anh ơi, sắp đến rồi, cho tôi xuống ở ngay trước cổng trường nhé!',
        tips: 'Báo trước một đoạn để tài xế kịp xi-nhan tấp vào lề đường.',
      },
    ],
    exercises: [
      {
        id: 'ex-12-1',
        type: 'multiple-choice',
        question: 'Từ nào mang nghĩa "Turn left" trong tiếng Việt miền Nam?',
        promptEn: 'Which word means "Turn left" in Southern Vietnamese?',
        options: ['Quẹo trái', 'Rẽ phải', 'Đi thẳng', 'Dừng lại'],
        correctAnswer: 'Quẹo trái',
        explanation: 'Người miền Nam dùng từ "Quẹo" thay cho "Rẽ".',
      },
    ],
    cultureTip: {
      title: 'Bí quyết qua đường ở Việt Nam',
      contentVi:
        'Hãy bước đi chậm rãi, đều nhịp và mắt quan sát dòng xe. Các tài xế xe máy sẽ tự động điều chỉnh hướng lái tránh bạn.',
      contentEn:
        'Walk at a steady, predictable pace with good eye contact. Motorbike riders naturally navigate smoothly around you.',
    },
    nextLessonId: 13,
  },

  {
    id: 13,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Nhà ở, trường học và công việc',
    subtitle: 'Rooms, Housing, School and Workplace Communication',
    durationMinutes: 35,
    objectives: [
      'Từ vựng về nhà ở: Phòng khách, Phòng ngủ, Bếp, Ban công, Thang máy',
      'Nói về công việc và trường học: Đi làm, Tan làm, Họp, Học bài',
      'Miêu tả không gian sống và văn phòng làm việc',
    ],
    introVi:
      'Ngôi nhà và nơi làm việc là trung tâm của nhịp sống hằng ngày. Học cách chia sẻ về môi trường sống giúp bạn kết nối thân tình hơn với đồng nghiệp và bạn học.',
    introEn:
      'Your home and workplace form the foundation of daily routine. Describing your living space and office life builds strong camaraderie.',
    vocabulary: [
      {
        id: 'v13-1',
        vietnamese: 'Phòng khách',
        english: 'Living room',
        ipa: '/fəwŋ͡m˨˩ xat̚˦˥/',
        category: 'Nhà cửa',
        tone: 'Huyền - Sắc',
        exampleVi: 'Phòng khách rất thoáng mát.',
        exampleEn: 'The living room is very airy and cool.',
      },
      {
        id: 'v13-2',
        vietnamese: 'Căn hộ / Nhà riêng',
        english: 'Apartment / Private house',
        ipa: '/kăn˧˧ hoˀ˨˩/',
        category: 'Nhà cửa',
        tone: 'Ngang - Nặng',
        exampleVi: 'Tôi thuê một căn hộ ở quận 1.',
        exampleEn: 'I rent an apartment in District 1.',
      },
      {
        id: 'v13-3',
        vietnamese: 'Đi làm',
        english: 'Go to work',
        ipa: '/ɗi˧˧ laːm˨˩/',
        category: 'Công việc',
        tone: 'Ngang - Huyền',
        exampleVi: 'Tám giờ sáng tôi đi làm.',
        exampleEn: 'At 8 AM I go to work.',
      },
      {
        id: 'v13-4',
        vietnamese: 'Đồng nghiệp',
        english: 'Colleague / Co-worker',
        ipa: '/ɗəwŋ͡m˨˩ ŋiəp̚ˀ˨˩/',
        category: 'Công việc',
        tone: 'Huyền - Nặng',
        exampleVi: 'Đồng nghiệp của tôi rất thân thiện.',
        exampleEn: 'My colleagues are very friendly.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu miêu tả nơi ở',
        structure: 'Tôi sống ở + [Khu vực / Loại nhà] + với + [Người cùng sống]',
        explanationVi:
          'Ví dụ: "Tôi sống ở một căn hộ chung cư với bạn cùng phòng."',
        explanationEn:
          'Pattern: "Tôi sống ở [place] với [roommates/family]."',
        examples: [
          { vi: 'Tôi làm việc ở công ty công nghệ.', en: 'I work at a tech company.' },
        ],
      },
    ],
    dialogue: {
      title: 'Hỏi thăm nơi ở mới',
      context: 'Nói về căn hộ mới thuê',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Tôi vừa chuyển đến một căn hộ gần công ty.',
          english: 'I just moved into an apartment near the company.',
          avatarRole: 'male',
        },
        {
          speaker: 'Minh',
          vietnamese: 'Tuyệt quá, thế thì đi làm rất tiện lợi!',
          english: 'Fantastic, that makes commuting to work very convenient!',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Kể về căn phòng hoặc nơi làm việc của bạn',
        promptEn: 'Describe your room or workplace',
        modelSentence: 'Tôi sống ở một căn hộ nhỏ nhưng rất yên tĩnh và nhiều ánh sáng.',
        modelAudioText: 'Tôi sống ở một căn hộ nhỏ nhưng rất yên tĩnh và nhiều ánh sáng.',
        tips: 'Phát âm rõ ràng các tính từ "nhỏ", "yên tĩnh", "nhiều ánh sáng".',
      },
    ],
    exercises: [
      {
        id: 'ex-13-1',
        type: 'multiple-choice',
        question: 'Từ nào mang nghĩa là "Living room"?',
        promptEn: 'Which word means "Living room"?',
        options: ['Phòng khách', 'Phòng ngủ', 'Nhà bếp', 'Nhà vệ sinh'],
        correctAnswer: 'Phòng khách',
        explanation: '"Phòng khách" là căn phòng tiếp đón bạn bè và khách đến chơi nhà.',
      },
    ],
    cultureTip: {
      title: 'Tình làng nghĩa xóm',
      contentVi:
        'Người Việt có câu "Bán anh em xa, mua láng giềng gần". Mối quan hệ hòa nhã với hàng xóm láng giềng luôn được trân quý.',
      contentEn:
        'Vietnamese cherish close bonds with neighbors ("Neighbors near are better than relatives far"). Friendly greetings create a warm neighborhood.',
    },
    nextLessonId: 14,
  },

  {
    id: 14,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Sinh hoạt hằng ngày và sở thích',
    subtitle: 'Daily Routines, Hobbies, Sports and Leisure',
    durationMinutes: 35,
    objectives: [
      'Kể về trình tự một ngày: Thức dậy, Ăn sáng, Đi làm, Nấu cơm, Đi ngủ',
      'Nói về sở thích: Nghe nhạc, Đọc sách, Chạy bộ, Chơi thể thao, Chụp ảnh',
      'Sử dụng các từ chỉ tần suất: Luôn luôn, Thường xuyên, Thỉnh thoảng, Hiếm khi',
    ],
    introVi:
      'Chia sẻ về thói quen sinh hoạt và những niềm vui lúc rảnh rỗi là chủ đề trò chuyện thú vị nhất khi gặp gỡ bạn bè mới.',
    introEn:
      'Talking about daily habits, exercise, and leisure passions is the best bridge to building genuine friendships.',
    vocabulary: [
      {
        id: 'v14-1',
        vietnamese: 'Thức dậy',
        english: 'Wake up',
        ipa: '/tʰɨk̚˦˥ zəjˀ˨˩/',
        category: 'Thói quen',
        tone: 'Sắc - Nặng',
        exampleVi: 'Tôi thức dậy lúc sáu giờ sáng.',
        exampleEn: 'I wake up at 6 AM.',
      },
      {
        id: 'v14-2',
        vietnamese: 'Tập thể dục',
        english: 'Exercise / Workout',
        ipa: '/taːp̚ˀ˨˩ tʰe˧˩˨ zuk̚ˀ˨˩/',
        category: 'Thể thao',
        tone: 'Nặng - Hỏi - Nặng',
        exampleVi: 'Buổi sáng tôi chạy bộ tập thể dục.',
        exampleEn: 'In the morning I jog and exercise.',
      },
      {
        id: 'v14-3',
        vietnamese: 'Lúc rảnh rỗi',
        english: 'In free time / Leisure time',
        ipa: '/luk̚˦˥ rajŋ˧˩˨ roj˦ˀ˥/',
        category: 'Thời gian',
        tone: 'Sắc - Hỏi - Ngã',
        exampleVi: 'Lúc rảnh rỗi tôi hay đọc sách.',
        exampleEn: 'In my free time I often read books.',
      },
      {
        id: 'v14-4',
        vietnamese: 'Cuối tuần',
        english: 'Weekend',
        ipa: '/kwoj˦˥ twən˨˩/',
        category: 'Thời gian',
        tone: 'Sắc - Huyền',
        exampleVi: 'Cuối tuần này bạn có kế hoạch gì không?',
        exampleEn: 'Do you have any plans this weekend?',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu diễn đạt thói quen',
        structure: '[Thời điểm] + Tôi thường + [Hành động] + với + [Ai]',
        explanationVi:
          'Ví dụ: "Buổi chiều tôi thường đi dạo quanh bờ hồ với bạn."',
        explanationEn:
          'Formula: "[Time] + Tôi thường [verb] + với [person]."',
        examples: [
          { vi: 'Tôi thường xuyên nấu ăn ở nhà.', en: 'I regularly cook meals at home.' },
        ],
      },
    ],
    dialogue: {
      title: 'Hẹn nhau cuối tuần',
      context: 'Rủ bạn đi dạo phố cuối tuần',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Thứ Bảy này bạn có rảnh không, mình đi cà phê nhé?',
          english: 'Are you free this Saturday, let’s go for coffee?',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Được chứ! Mình biết một quán có view bờ hồ rất đẹp.',
          english: 'Sure! I know a cafe with a very nice lake view.',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Kể về thói quen yêu thích của bạn',
        promptEn: 'Share your favorite routine',
        modelSentence: 'Mỗi sáng tôi thích dậy sớm uống một ly trà nóng và đọc sách.',
        modelAudioText: 'Mỗi sáng tôi thích dậy sớm uống một ly trà nóng và đọc sách.',
        tips: 'Phát âm rõ ràng liên từ "và" và cụm "trà nóng".',
      },
    ],
    exercises: [
      {
        id: 'ex-14-1',
        type: 'multiple-choice',
        question: 'Từ nào mang nghĩa là "thường xuyên, lặp lại"?',
        promptEn: 'Which word means "regularly / frequently"?',
        options: ['Thường xuyên', 'Không bao giờ', 'Hôm qua', 'Ngày mai'],
        correctAnswer: 'Thường xuyên',
        explanation: '"Thường xuyên" chỉ hành động diễn ra đều đặn, thường nhật.',
      },
    ],
    cultureTip: {
      title: 'Tập thể dục bờ hồ',
      contentVi:
        'Vào lúc bình minh, các bờ hồ và công viên tại Việt Nam rộn ràng người dân tập thể dục, thái cực quyền và cầu lông.',
      contentEn:
        'At dawn, Vietnamese parks and lake shores bustle with citizens jogging, practicing Tai Chi, and playing badminton.',
    },
    nextLessonId: 15,
  },

  {
    id: 15,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Thời tiết, lịch hẹn và kế hoạch',
    subtitle: 'Weather Conditions, Appointments and Making Plans',
    durationMinutes: 35,
    objectives: [
      'Miêu tả các kiểu thời tiết: Nóng, Mát mẻ, Lạnh, Mưa rào, Nắng gắt',
      'Hẹn thời gian và địa điểm gặp mặt cụ thể',
      'Xử lý tình huống thay đổi lịch hẹn hoặc đến muộn lịch sự',
    ],
    introVi:
      'Thời tiết Việt Nam mang nét nhiệt đới đặc sắc với bốn mùa ở miền Bắc và hai mùa mưa - nắng ở miền Nam. Biết cách trao đổi về thời tiết giúp việc hẹn hò thuận tiện hơn.',
    introEn:
      'Vietnam’s climate varies from Northern four seasons to Southern tropical wet/dry seasons. Discussing weather conditions makes organizing appointments smooth.',
    vocabulary: [
      {
        id: 'v15-1',
        vietnamese: 'Thời tiết',
        english: 'Weather',
        ipa: '/tʰəːj˨˩ tiət̚˦˥/',
        category: 'Thời tiết',
        tone: 'Huyền - Sắc',
        exampleVi: 'Hôm nay thời tiết rất dễ chịu.',
        exampleEn: 'Today the weather is very pleasant.',
      },
      {
        id: 'v15-2',
        vietnamese: 'Trời mưa',
        english: 'It is raining',
        ipa: '/cəːj˨˩ mɨə˧˧/',
        category: 'Thời tiết',
        tone: 'Huyền - Ngang',
        exampleVi: 'Trời đang mưa to, bạn nhớ mang ô nhé.',
        exampleEn: 'It is raining hard, remember to take an umbrella.',
      },
      {
        id: 'v15-3',
        vietnamese: 'Hẹn gặp',
        english: 'To meet / Appointment',
        ipa: '/hɛnˀ˨˩ ɣap̚ˀ˨˩/',
        category: 'Kế hoạch',
        tone: 'Nặng - Nặng',
        exampleVi: 'Hẹn gặp bạn lúc ba giờ chiều.',
        exampleEn: 'Meet you at 3 PM.',
      },
      {
        id: 'v15-4',
        vietnamese: 'Đến muộn / Trễ',
        english: 'Arrive late',
        ipa: '/ɗen˦˥ mwənˀ˨˩/',
        category: 'Thời gian',
        tone: 'Sắc - Nặng',
        exampleVi: 'Xin lỗi vì tắc đường nên tôi đến muộn mười phút.',
        exampleEn: 'Sorry, due to traffic jam I arrived 10 minutes late.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu hẹn giờ và địa điểm',
        structure: 'Chúng mình gặp nhau lúc [Giờ] ở [Địa điểm] nhé!',
        explanationVi:
          'Để thỏa thuận: "Mấy giờ tiện cho bạn?" hoặc "Khoảng hai giờ chiều được không?".',
        explanationEn:
          'Pattern: "Chúng mình gặp nhau lúc [time] ở [place] nhé!"',
        examples: [
          { vi: 'Chiều mai mấy giờ bạn rảnh?', en: 'What time are you free tomorrow afternoon?' },
        ],
      },
    ],
    dialogue: {
      title: 'Hẹn lịch thảo luận',
      context: 'Alex và Lan thống nhất giờ gặp mặt',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Chiều nay thời tiết mát mẻ, chúng ta gặp nhau lúc bốn giờ nhé?',
          english: 'The weather is cool this afternoon, shall we meet at 4 PM?',
          avatarRole: 'male',
        },
        {
          speaker: 'Lan',
          vietnamese: 'Được chứ, hẹn gặp bạn ở quán cà phê phố cổ nhé!',
          english: 'Sure, see you at the cafe in the Old Quarter!',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đưa ra lời hẹn giờ và báo địa điểm',
        promptEn: 'Propose meeting time and place',
        modelSentence: 'Ngày mai chúng ta gặp nhau lúc chín giờ sáng ở thư viện nhé!',
        modelAudioText: 'Ngày mai chúng ta gặp nhau lúc chín giờ sáng ở thư viện nhé!',
        tips: 'Phát âm rõ ràng mốc thời gian và tên địa điểm.',
      },
    ],
    exercises: [
      {
        id: 'ex-15-1',
        type: 'multiple-choice',
        question: 'Từ nào dùng để chỉ "chiếc ô che mưa" ở miền Nam?',
        promptEn: 'Which word means "umbrella" in Southern Vietnam?',
        options: ['Cây dù', 'Cái ô', 'Áo mưa', 'Nón lá'],
        correctAnswer: 'Cây dù',
        explanation: 'Người miền Nam gọi chiếc ô là "Cây dù".',
      },
    ],
    cultureTip: {
      title: 'Văn hóa đúng giờ',
      contentVi:
        'Nếu gặp tắc đường hoặc có sự cố đột xuất, hãy nhắn tin báo trước cho đối tác hoặc bạn bè để thể hiện sự chu đáo.',
      contentEn:
        'If hindered by traffic jams, texting 15 minutes ahead is deeply appreciated as a mark of respect.',
    },
    nextLessonId: 16,
  },

  {
    id: 16,
    stageNumber: 4,
    stageTitle: 'Phần 4: Giao tiếp trong đời sống',
    title: 'Nhờ giúp đỡ và xử lý hiểu lầm',
    subtitle: 'Asking for Help, Clarifying Misunderstandings and Pharmacy',
    durationMinutes: 35,
    objectives: [
      'Nói câu đề nghị giúp đỡ lịch thiệp: Làm ơn giúp tôi với, Xin vui lòng...',
      'Làm rõ khi nghe chưa rõ: Làm ơn nói chậm lại một chút, Câu này nghĩa là gì?',
      'Giao tiếp tại tiệm thuốc tây khi bị ốm nhẹ (đau đầu, đau bụng, cảm sốt)',
    ],
    introVi:
      'Khi sinh sống hay du lịch ở nước ngoài, sẽ có lúc bạn nghe chưa kịp hoặc cần giúp đỡ. Sự chân thành và lịch sự sẽ luôn nhận được sự tương trợ nồng ấm từ người Việt.',
    introEn:
      'Foreigners often need clarification or assistance. Courteous phrasing ensures you receive immediate, generous help from locals.',
    vocabulary: [
      {
        id: 'v16-1',
        vietnamese: 'Giúp tôi với',
        english: 'Help me please',
        ipa: '/zup˦˥ toj˧˧ vəːj˦˥/',
        category: 'Nhờ vả',
        tone: 'Sắc - Ngang - Sắc',
        exampleVi: 'Làm ơn giúp tôi với ạ!',
        exampleEn: 'Please help me!',
      },
      {
        id: 'v16-2',
        vietnamese: 'Nói chậm lại',
        english: 'Speak more slowly',
        ipa: '/nɔj˦˥ caːmˀ˨˩ laːjˀ˨˩/',
        category: 'Giao tiếp',
        tone: 'Sắc - Nặng - Nặng',
        exampleVi: 'Làm ơn nói chậm lại một chút.',
        exampleEn: 'Please speak a little slower.',
      },
      {
        id: 'v16-3',
        vietnamese: 'Tôi chưa hiểu',
        english: 'I do not understand yet',
        ipa: '/toj˧˧ cɨə˧˧ hiəw˧˩˨/',
        category: 'Giao tiếp',
        tone: 'Ngang - Ngang - Hỏi',
        exampleVi: 'Xin lỗi, tôi chưa hiểu từ này.',
        exampleEn: 'Sorry, I don’t understand this word yet.',
      },
      {
        id: 'v16-4',
        vietnamese: 'Nhà thuốc tây',
        english: 'Pharmacy / Drugstore',
        ipa: '/ɲaː˨˩ tʰwək̚˦˥ təj˧˧/',
        category: 'Y tế',
        tone: 'Huyền - Sắc - Ngang',
        exampleVi: 'Nhà thuốc tây gần nhất ở đâu?',
        exampleEn: 'Where is the nearest pharmacy?',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu nhờ nhắc lại hoặc giải thích',
        structure: 'Làm ơn + [Động từ] + lại một lần nữa được không ạ?',
        explanationVi:
          'Ví dụ: "Làm ơn nhắc lại được không ạ?" hoặc "Từ này viết thế nào ạ?".',
        explanationEn:
          'Pattern: "Làm ơn [verb] lại một lần nữa được không ạ?"',
        examples: [
          { vi: 'Làm ơn giải thích giúp tôi từ này.', en: 'Please help explain this word to me.' },
        ],
      },
    ],
    dialogue: {
      title: 'Hỏi mua thuốc cảm',
      context: 'Alex ghé nhà thuốc gần nhà',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Chào chị, tôi bị đau họng và sốt nhẹ từ sáng.',
          english: 'Hello sister, I have a sore throat and slight fever since morning.',
          avatarRole: 'male',
        },
        {
          speaker: 'Dược sĩ',
          vietnamese: 'Em gửi anh vỉ thuốc ngậm đau họng. Ngày uống hai lần sau khi ăn nhé!',
          english: 'Here are throat lozenges. Take twice daily after meals!',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đề nghị đối phương nói chậm lại một chút',
        promptEn: 'Politely ask someone to speak slower',
        modelSentence: 'Xin lỗi, tôi mới học tiếng Việt, bạn làm ơn nói chậm lại một chút nhé!',
        modelAudioText: 'Xin lỗi, tôi mới học tiếng Việt, bạn làm ơn nói chậm lại một chút nhé!',
        tips: 'Nói với thái độ khiêm nhường, tươi cười.',
      },
    ],
    exercises: [
      {
        id: 'ex-16-1',
        type: 'multiple-choice',
        question: 'Khi không nghe rõ người khác nói gì, bạn nên nói câu nào?',
        promptEn: 'What should you say when you didn’t catch what was said?',
        options: [
          'Làm ơn nói chậm lại một chút được không ạ?',
          'Tôi không muốn nghe nữa',
          'Bạn nói sai rồi',
          'Bao nhiêu tiền đấy?',
        ],
        correctAnswer: 'Làm ơn nói chậm lại một chút được không ạ?',
        explanation: 'Đây là câu nhờ đối phương nói chậm lại rất lịch thiệp.',
      },
    ],
    cultureTip: {
      title: 'Nhà thuốc và sự tận tình',
      contentVi:
        'Dược sĩ tại các nhà thuốc Việt Nam thường tư vấn rất kỹ về cách uống thuốc trước hay sau bữa ăn. Đừng ngại hỏi thêm nếu chưa rõ.',
      contentEn:
        'Vietnamese pharmacists are exceptionally helpful. Feel completely free to clarify dosage and intake times.',
    },
    nextLessonId: 17,
  },

  // GIAI ĐOẠN 4: ĐÀM THOẠI CHUYÊN SÂU & VẬN DỤNG (CHƯƠNG 17 - 22)
  {
    id: 17,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Du lịch và lưu trú',
    subtitle: 'Hotel Check-in, Amenities, Sightseeing and Travel',
    durationMinutes: 40,
    objectives: [
      'Làm thủ tục nhận phòng (Check-in) và trả phòng (Check-out) khách sạn',
      'Hỏi về các tiện nghi: Mật khẩu Wifi, Điều hòa, Bữa sáng buffet',
      'Hỏi thăm điểm tham quan danh thắng và đặt vé tham quan',
    ],
    introVi:
      'Từ vịnh Hạ Long kỳ vĩ đến phố cổ Hội An rực rỡ đèn lồng, du lịch khắp Việt Nam sẽ trở nên trọn vẹn hơn khi bạn tự tin giao tiếp tại khách sạn và các điểm tham quan.',
    introEn:
      'Traveling across Vietnam becomes infinitely richer when you smoothly handle hotel check-ins, ask for local travel tips, and interact with tour staff.',
    vocabulary: [
      {
        id: 'v17-1',
        vietnamese: 'Nhận phòng',
        english: 'Check-in (hotel)',
        ipa: '/ɲaːnˀ˨˩ fəwŋ͡m˨˩/',
        category: 'Khách sạn',
        tone: 'Nặng - Huyền',
        exampleVi: 'Tôi muốn làm thủ tục nhận phòng.',
        exampleEn: 'I would like to check in.',
      },
      {
        id: 'v17-2',
        vietnamese: 'Trả phòng',
        english: 'Check-out (hotel)',
        ipa: '/caː˧˩˨ fəwŋ͡m˨˩/',
        category: 'Khách sạn',
        tone: 'Hỏi - Huyền',
        exampleVi: 'Mười hai giờ trưa mai tôi trả phòng.',
        exampleEn: 'Tomorrow at 12 noon I check out.',
      },
      {
        id: 'v17-3',
        vietnamese: 'Hộ chiếu',
        english: 'Passport',
        ipa: '/hoˀ˨˩ ciəw˦˥/',
        category: 'Giấy tờ',
        tone: 'Nặng - Sắc',
        exampleVi: 'Đây là hộ chiếu của tôi.',
        exampleEn: 'Here is my passport.',
      },
      {
        id: 'v17-4',
        vietnamese: 'Tham quan',
        english: 'Sightseeing / Visit places',
        ipa: '/tʰaːm˧˧ kwaːn˧˧/',
        category: 'Du lịch',
        tone: 'Ngang - Ngang',
        exampleVi: 'Hôm nay chúng tôi đi tham quan vịnh Hạ Long.',
        exampleEn: 'Today we go sightseeing in Ha Long Bay.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu hỏi tiện nghi khách sạn',
        structure: 'Khách sạn có + [Tiện nghi] + miễn phí không ạ?',
        explanationVi:
          'Ví dụ: "Khách sạn có phục vụ ăn sáng miễn phí không ạ?" hoặc "Cho tôi xin mật khẩu Wifi".',
        explanationEn:
          'Pattern: "Khách sạn có [amenity] miễn phí không ạ?"',
        examples: [
          { vi: 'Cho tôi xin thêm hai chiếc khăn tắm.', en: 'Please give me two more bath towels.' },
        ],
      },
    ],
    dialogue: {
      title: 'Làm thủ tục nhận phòng tại Đà Nẵng',
      context: 'Alex check-in tại quầy lễ tân',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Chào em, anh đã đặt trước phòng đôi tên là Alex.',
          english: 'Hello, I booked a double room under the name Alex.',
          avatarRole: 'male',
        },
        {
          speaker: 'Lễ tân',
          vietnamese: 'Dạ em chào anh! Em đã thấy thông tin. Anh cho em mượn hộ chiếu để làm thủ tục nhé.',
          english: 'Hello sir! I found your booking. Please lend me your passport for registration.',
          avatarRole: 'female',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nói câu xin mật khẩu Wifi tại sảnh',
        promptEn: 'Ask for Wifi password at the lobby',
        modelSentence: 'Em ơi, cho anh xin mật khẩu Wifi của khách sạn với nhé!',
        modelAudioText: 'Em ơi, cho anh xin mật khẩu Wifi của khách sạn với nhé!',
        tips: 'Nói với ngữ điệu niềm nở, tự nhiên.',
      },
    ],
    exercises: [
      {
        id: 'ex-17-1',
        type: 'multiple-choice',
        question: 'Từ nào mang nghĩa là "Check-out" trong khách sạn?',
        promptEn: 'Which phrase means "Check-out" in Vietnamese?',
        options: ['Trả phòng', 'Nhận phòng', 'Đặt phòng', 'Dọn phòng'],
        correctAnswer: 'Trả phòng',
        explanation: '"Trả phòng" là hành động hoàn tất thời gian lưu trú và thanh toán chi phí.',
      },
    ],
    cultureTip: {
      title: 'Đăng ký tạm trú cho du khách',
      contentVi:
        'Lễ tân mượn hộ chiếu để làm thủ tục khai báo tạm trú theo quy định an ninh du lịch là hoàn toàn bình thường.',
      contentEn:
        'Providing your passport at hotel check-in for temporary residence registration is standard legal practice in Vietnam.',
    },
    nextLessonId: 18,
  },

  {
    id: 18,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Điện thoại và giao tiếp trực tuyến',
    subtitle: 'Phone Calls, Text Messaging, Zalo and Online Communication',
    durationMinutes: 35,
    objectives: [
      'Mở đầu và kết thúc cuộc gọi điện thoại: Alo, Cho tôi gặp..., Tôi gọi lại sau nhé',
      'Nhắn tin nhanh qua Zalo, Messenger bằng tiếng Việt ngắn gọn',
      'Xử lý cuộc gọi khi đường truyền chập chờn hoặc gọi nhầm số',
    ],
    introVi:
      'Giao tiếp qua điện thoại và các ứng dụng nhắn tin như Zalo là một phần không thể thiếu trong đời sống hiện đại tại Việt Nam.',
    introEn:
      'Phone conversations and messaging apps like Zalo are central to everyday connectivity in Vietnam.',
    vocabulary: [
      {
        id: 'v18-1',
        vietnamese: 'A-lô',
        english: 'Hello (on the phone)',
        ipa: '/ʔaː˧˧ lo˧˧/',
        category: 'Điện thoại',
        tone: 'Ngang - Ngang',
        exampleVi: 'A-lô, ai ở đầu dây đấy ạ?',
        exampleEn: 'Hello, who is on the line please?',
      },
      {
        id: 'v18-2',
        vietnamese: 'Gọi lại sau',
        english: 'Call back later',
        ipa: '/ɣɔjˀ˨˩ laːjˀ˨˩ saw˧˧/',
        category: 'Điện thoại',
        tone: 'Nặng - Nặng - Ngang',
        exampleVi: 'Bây giờ tôi đang bận, tôi sẽ gọi lại sau nhé.',
        exampleEn: 'I am busy right now, I will call you back later.',
      },
      {
        id: 'v18-3',
        vietnamese: 'Nhầm số',
        english: 'Wrong number',
        ipa: '/ɲaːm˨˩ so˦˥/',
        category: 'Điện thoại',
        tone: 'Huyền - Sắc',
        exampleVi: 'Xin lỗi, bạn gọi nhầm số rồi.',
        exampleEn: 'Sorry, you dialed the wrong number.',
      },
      {
        id: 'v18-4',
        vietnamese: 'Nhắn tin',
        english: 'Send a text message',
        ipa: '/ɲaːn˦˥ tin˧˧/',
        category: 'Liên lạc',
        tone: 'Sắc - Ngang',
        exampleVi: 'Có gì bạn nhắn tin Zalo cho mình nhé.',
        exampleEn: 'Message me on Zalo if anything comes up.',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu nhờ kết nối máy điện thoại',
        structure: 'Làm ơn cho tôi gặp + [Tên người cần nói chuyện]',
        explanationVi:
          'Ví dụ: "A-lô, làm ơn cho cháu gặp cô Lan ạ!". Khi nghe máy: "Dạ vâng, xin chờ một chút".',
        explanationEn:
          'Formula: "A-lô, làm ơn cho [pronoun] gặp [Name] ạ!"',
        examples: [
          { vi: 'Tôi là Alex, bạn của Minh.', en: 'I am Alex, Minh’s friend.' },
        ],
      },
    ],
    dialogue: {
      title: 'Gọi điện xác nhận giờ hẹn',
      context: 'Alex gọi cho Minh trước buổi gặp',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'A-lô Minh à, chiều nay chúng mình vẫn gặp nhau lúc bốn giờ chứ?',
          english: 'Hello Minh, are we still meeting at 4 PM this afternoon?',
          avatarRole: 'male',
        },
        {
          speaker: 'Minh',
          vietnamese: 'A-lô Alex! Đúng rồi nhé, bốn giờ ở quán cũ, lát gặp nhé!',
          english: 'Hello Alex! That’s right, 4 PM at the usual cafe, see you shortly!',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Mở đầu cuộc gọi điện thoại tự tin',
        promptEn: 'Open a phone call in Vietnamese',
        modelSentence: 'A-lô, em chào anh ạ! Em là Alex gọi đến từ lớp học tiếng Việt.',
        modelAudioText: 'A-lô, em chào anh ạ! Em là Alex gọi đến từ lớp học tiếng Việt.',
        tips: 'Ngân rõ từ "A-lô" ở đầu câu như người bản xứ.',
      },
    ],
    exercises: [
      {
        id: 'ex-18-1',
        type: 'multiple-choice',
        question: 'Từ ngữ mở đầu tiêu chuẩn khi nhấc máy nghe điện thoại là gì?',
        promptEn: 'What is the standard opening word when answering a phone in Vietnam?',
        options: ['A-lô', 'Chào bạn', 'Tạm biệt', 'Ai đấy'],
        correctAnswer: 'A-lô',
        explanation: 'Người Việt luôn nói "A-lô" khi bắt đầu cuộc đàm thoại qua điện thoại.',
      },
    ],
    cultureTip: {
      title: 'Ứng dụng nhắn tin Zalo',
      contentVi:
        'Zalo là ứng dụng liên lạc phổ biến nhất tại Việt Nam trong cả công việc lẫn đời sống cá nhân.',
      contentEn:
        'Zalo is the ubiquitous messaging platform in Vietnam for both social chat and business collaboration.',
    },
    nextLessonId: 19,
  },

  {
    id: 19,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Mời, cảm ơn, xin lỗi và từ chối lịch sự',
    subtitle: 'Invitations, Gratitude, Apologies and Graceful Refusal',
    durationMinutes: 35,
    objectives: [
      'Đưa ra lời mời chân thành: Mời bạn đi ăn cơm, Mời bạn uống nước',
      'Bày tỏ lòng biết ơn sâu sắc và hồi đáp: Cảm ơn bạn rất nhiều, Không có chi',
      'Từ chối khéo léo, giữ hòa khí: Tiếc quá hôm nay mình có việc bận, Để dịp khác nhé',
    ],
    introVi:
      'Nghệ thuật ứng xử tinh tế nằm ở chỗ biết đón nhận sự thịnh tình và biết từ chối một cách khéo léo mà không làm người khác phật lòng.',
    introEn:
      'Graceful invitations, sincere gratitude, and polite refusal ensure harmonious relationships and deep social trust.',
    vocabulary: [
      {
        id: 'v19-1',
        vietnamese: 'Mời bạn',
        english: 'Invite you / Please have',
        ipa: '/məːj˨˩ ɓaːnˀ˨˩/',
        category: 'Lịch sự',
        tone: 'Huyền - Nặng',
        exampleVi: 'Hôm nay tôi mời bạn ăn phở nhé!',
        exampleEn: 'Today I treat you to pho!',
      },
      {
        id: 'v19-2',
        vietnamese: 'Tiếc quá',
        english: 'What a pity / So unfortunate',
        ipa: '/tiək̚˦˥ kwaː˦˥/',
        category: 'Cảm xúc',
        tone: 'Sắc - Sắc',
        exampleVi: 'Tiếc quá, tối nay tôi có việc bận rồi.',
        exampleEn: 'What a pity, I am busy tonight.',
      },
      {
        id: 'v19-3',
        vietnamese: 'Để dịp khác nhé',
        english: 'Let’s do it another time',
        ipa: '/ɗe˧˩˨ zip̚ˀ˨˩ xat̚˦˥ ɲɛ˦˥/',
        category: 'Từ chối lịch sự',
        tone: 'Hỏi - Nặng - Sắc - Sắc',
        exampleVi: 'Hôm nay mình không đi được, để dịp khác nhé!',
        exampleEn: 'I cannot make it today, let’s do it another time!',
      },
      {
        id: 'v19-4',
        vietnamese: 'Không sao đâu',
        english: 'It’s totally fine / No worries',
        ipa: '/xəwŋ͡m˧˧ saːw˧˧ ɗəw˧˧/',
        category: 'Hồi đáp',
        tone: 'Ngang - Ngang - Ngang',
        exampleVi: 'Dạ không sao đâu bạn ơi!',
        exampleEn: 'It is totally fine, don’t worry!',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu từ chối khéo léo',
        structure: 'Cảm ơn bạn đã mời, nhưng tiếc quá hôm nay mình + [Lý do]. Để dịp khác nhé!',
        explanationVi:
          'Luôn bắt đầu bằng lời cảm ơn trước khi nêu lý do bận, và kết thúc bằng lời hẹn dịp sau để giữ sự ấm áp.',
        explanationEn:
          'Always thank the host first, state your prior commitment gently, and propose a raincheck.',
        examples: [
          { vi: 'Cảm ơn anh, nhưng chiều nay em có hẹn rồi ạ.', en: 'Thank you brother, but I have an appointment this afternoon.' },
        ],
      },
    ],
    dialogue: {
      title: 'Lời mời dự tiệc sinh nhật',
      context: 'Alex được mời dự tiệc nhưng bận thi',
      lines: [
        {
          speaker: 'Lan',
          vietnamese: 'Tối mai sinh nhật mình, Alex đến chung vui nhé!',
          english: 'Tomorrow evening is my birthday, Alex come celebrate with us!',
          avatarRole: 'female',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Ôi chúc mừng sinh nhật Lan! Tiếc quá tối mai mình phải thi, để hôm sau mình mời bạn cà phê nhé!',
          english: 'Happy birthday Lan! What a pity I have an exam tomorrow evening, let me treat you to coffee another day!',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nói lời cảm ơn chân thành khi nhận được sự giúp đỡ',
        promptEn: 'Express sincere thanks for help',
        modelSentence: 'Cảm ơn bạn rất nhiều vì đã nhiệt tình giúp đỡ mình!',
        modelAudioText: 'Cảm ơn bạn rất nhiều vì đã nhiệt tình giúp đỡ mình!',
        tips: 'Nhấn mạnh từ "rất nhiều" và "nhiệt tình".',
      },
    ],
    exercises: [
      {
        id: 'ex-19-1',
        type: 'multiple-choice',
        question: 'Câu nào là cách từ chối lời mời khéo léo và lịch sự nhất?',
        promptEn: 'Which is the most courteous way to decline an invitation?',
        options: [
          'Tiếc quá hôm nay mình có việc bận, để dịp khác nhé!',
          'Tôi không đi đâu',
          'Chán quá tôi ở nhà',
          'Đừng mời tôi nữa',
        ],
        correctAnswer: 'Tiếc quá hôm nay mình có việc bận, để dịp khác nhé!',
        explanation: 'Nói "tiếc quá" và hẹn "để dịp khác" thể hiện sự tế nhị, tôn trọng người mời.',
      },
    ],
    cultureTip: {
      title: 'Tôn trọng thể diện trong giao tiếp',
      contentVi:
        'Người Việt coi trọng sự hòa thuận và thể diện. Lời từ chối tế nhị giúp cả hai bên luôn giữ được tình cảm tốt đẹp.',
      contentEn:
        'Preserving social face and harmony is paramount. Gentle, tactful refusals maintain mutual warmth.',
    },
    nextLessonId: 20,
  },

  {
    id: 20,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Bày tỏ cảm xúc, sở thích và ý kiến',
    subtitle: 'Expressing Feelings, Opinions, Preferences and Reactions',
    durationMinutes: 35,
    objectives: [
      'Miêu tả cảm xúc: Vui vẻ, Buồn, Ngạc nhiên, Thú vị, Hồi hộp, Tự hào',
      'Đưa ra ý kiến cá nhân: Theo tôi nghĩ..., Tôi thấy rằng...',
      'Đồng tình hoặc không đồng tình một cách lịch thiệp',
    ],
    introVi:
      'Bày tỏ cảm xúc và góc nhìn cá nhân giúp bạn trò chuyện sâu sắc hơn, chia sẻ những suy nghĩ chân thật về văn hóa và cuộc sống.',
    introEn:
      'Sharing nuanced opinions and personal emotions elevates your Vietnamese from basic survival phrases to rich, meaningful conversation.',
    vocabulary: [
      {
        id: 'v20-1',
        vietnamese: 'Theo tôi nghĩ',
        english: 'In my opinion / I think that',
        ipa: '/tʰɛw˧˧ toj˧˧ ŋi˦ˀ˥/',
        category: 'Ý kiến',
        tone: 'Ngang - Ngang - Ngã',
        exampleVi: 'Theo tôi nghĩ, học tiếng Việt rất bổ ích.',
        exampleEn: 'In my opinion, studying Vietnamese is very rewarding.',
      },
      {
        id: 'v20-2',
        vietnamese: 'Thú vị',
        english: 'Interesting / Fascinating',
        ipa: '/tʰu˦˥ viət̚ˀ˨˩/',
        category: 'Cảm xúc',
        tone: 'Sắc - Nặng',
        exampleVi: 'Văn hóa Việt Nam rất thú vị.',
        exampleEn: 'Vietnamese culture is very fascinating.',
      },
      {
        id: 'v20-3',
        vietnamese: 'Đồng ý',
        english: 'To agree',
        ipa: '/ɗəwŋ͡m˨˩ ʔi˦˥/',
        category: 'Ý kiến',
        tone: 'Huyền - Sắc',
        exampleVi: 'Tôi hoàn toàn đồng ý với ý kiến của bạn.',
        exampleEn: 'I completely agree with your opinion.',
      },
      {
        id: 'v20-4',
        vietnamese: 'Tuyệt vời',
        english: 'Wonderful / Terrific',
        ipa: '/twiət̚ˀ˨˩ vəːj˨˩/',
        category: 'Cảm xúc',
        tone: 'Nặng - Huyền',
        exampleVi: 'Chuyến du lịch thật tuyệt vời!',
        exampleEn: 'The trip was wonderful!',
      },
    ],
    grammarPoints: [
      {
        title: 'Mẫu câu nêu quan điểm cá nhân',
        structure: 'Tôi thấy + [Chủ đề] + rất + [Tính từ đánh giá]',
        explanationVi:
          'Ví dụ: "Tôi thấy con người Việt Nam rất mến khách và thân thiện."',
        explanationEn:
          'Pattern: "Tôi thấy [topic] rất [adjective]."',
        examples: [
          { vi: 'Tôi nghĩ món ăn này rất hợp khẩu vị.', en: 'I think this dish suits my taste very well.' },
        ],
      },
    ],
    dialogue: {
      title: 'Thảo luận về trải nghiệm ở Việt Nam',
      context: 'Alex chia sẻ cảm nghĩ sau chuyến tham quan',
      lines: [
        {
          speaker: 'Lan',
          vietnamese: 'Alex cảm thấy thế nào sau một tháng sống ở Việt Nam?',
          english: 'How do you feel after one month living in Vietnam?',
          avatarRole: 'female',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Tôi thấy cuộc sống ở đây rất năng động và con người cực kỳ mến khách!',
          english: 'I find life here very dynamic and people are extraordinarily hospitable!',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Nêu cảm nghĩ về một món ăn bạn vừa thưởng thức',
        promptEn: 'Express opinion on a dish you tasted',
        modelSentence: 'Theo tôi nghĩ, phở gà là một trong những món ăn ngon nhất mà tôi từng thử.',
        modelAudioText: 'Theo tôi nghĩ, phở gà là một trong những món ăn ngon nhất mà tôi từng thử.',
        tips: 'Nhấn vào cụm "ngon nhất" với cảm xúc chân thực.',
      },
    ],
    exercises: [
      {
        id: 'ex-20-1',
        type: 'multiple-choice',
        question: 'Cụm từ nào dùng để mở đầu khi muốn nêu quan điểm riêng?',
        promptEn: 'Which phrase introduces personal perspective?',
        options: ['Theo tôi nghĩ', 'Không biết', 'Cảm ơn nhiều', 'Bao nhiêu tiền'],
        correctAnswer: 'Theo tôi nghĩ',
        explanation: '"Theo tôi nghĩ" (In my opinion) là cách mở đầu câu nêu quan điểm tự nhiên.',
      },
    ],
    cultureTip: {
      title: 'Sự cởi mở và hiếu khách',
      contentVi:
        'Người Việt rất hào hứng khi nghe người nước ngoài chia sẻ những cảm nhận chân thực và yêu mến về văn hóa ẩm thực đất nước mình.',
      contentEn:
        'Vietnamese warmly welcome honest reflections and appreciate foreigners’ love for local culture and food.',
    },
    nextLessonId: 21,
  },

  {
    id: 21,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Hội thoại thực tế tổng hợp',
    subtitle: 'Integrated Situational Roleplays and Spontaneous Fluency',
    durationMinutes: 40,
    objectives: [
      'Tổng hợp phản xạ giao tiếp liên hoàn: Chào hỏi -> Hỏi đường -> Gọi món -> Trả giá -> Cảm ơn',
      'Xử lý tình huống đối thoại phát sinh bất ngờ với người bản xứ',
      'Nâng cao tốc độ phản xạ và nhịp điệu nói tự nhiên',
    ],
    introVi:
      'Bước vào chương đàm thoại tổng hợp, bạn sẽ vận dụng toàn bộ vốn từ vựng và cấu trúc đã học vào một chuỗi tình huống đời thực liên tục.',
    introEn:
      'In this capstone dialogue chapter, you synthesize all learned vocabulary, tone fluency, and sentence patterns into spontaneous everyday conversations.',
    vocabulary: [
      {
        id: 'v21-1',
        vietnamese: 'Tất nhiên rồi',
        english: 'Of course / Naturally',
        ipa: '/tat̚˦˥ ɲiən˧˧ zəːj˨˩/',
        category: 'Hội thoại',
        tone: 'Sắc - Ngang - Huyền',
        exampleVi: 'Tất nhiên rồi, tôi sẽ giúp bạn!',
        exampleEn: 'Of course, I will help you!',
      },
      {
        id: 'v21-2',
        vietnamese: 'Thế à? / Thật sao?',
        english: 'Really? / Is that so?',
        ipa: '/tʰe˦˥ ʔaː˨˩/',
        category: 'Cảm thán',
        tone: 'Sắc - Huyền',
        exampleVi: 'Thế à? Tin tức này thật bất ngờ!',
        exampleEn: 'Really? That news is quite surprising!',
      },
      {
        id: 'v21-3',
        vietnamese: 'Hẹn gặp lại',
        english: 'See you again',
        ipa: '/hɛnˀ˨˩ ɣap̚ˀ˨˩ laːjˀ˨˩/',
        category: 'Chào tạm biệt',
        tone: 'Nặng - Nặng - Nặng',
        exampleVi: 'Hẹn gặp lại bạn vào ngày mai nhé!',
        exampleEn: 'See you again tomorrow!',
      },
      {
        id: 'v21-4',
        vietnamese: 'Chúc một ngày tốt lành',
        english: 'Have a great day',
        ipa: '/cuk̚˦˥ mot̚ˀ˨˩ ŋaːj˨˩ tot̚˦˥ laːɲ˨˩/',
        category: 'Chúc mừng',
        tone: 'Sắc - Nặng - Huyền - Sắc - Huyền',
        exampleVi: 'Chúc bạn một ngày làm việc tốt lành!',
        exampleEn: 'Wish you have a wonderful working day!',
      },
    ],
    grammarPoints: [
      {
        title: 'Kỹ thuật giữ nhịp đàm thoại với tiểu từ cảm thán',
        structure: 'Dạ, thế à? + [Câu phản hồi] + nhé/nhỉ?',
        explanationVi:
          'Sử dụng các tiểu từ như "nhé", "nhỉ", "à", "ừ" giúp cuộc trò chuyện trở nên sống động và gắn kết tự nhiên.',
        explanationEn:
          'Intersperse natural discourse markers like "nhé", "nhỉ", "à" to keep conversation flowing effortlessly.',
        examples: [
          { vi: 'Trời hôm nay đẹp quá bạn nhỉ?', en: 'The weather today is so nice, isn’t it?' },
        ],
      },
    ],
    dialogue: {
      title: 'Một buổi sáng trọn vẹn tại Hà Nội',
      context: 'Alex đi ăn phở, uống cà phê và hỏi đường dạo phố',
      lines: [
        {
          speaker: 'Alex',
          vietnamese: 'Em ơi, cho anh một tô phở chín và một ly trà đá nhé!',
          english: 'Server, give me a bowl of well-done beef pho and an iced tea please!',
          avatarRole: 'male',
        },
        {
          speaker: 'Phục vụ',
          vietnamese: 'Dạ có ngay ạ! Anh Alex nói tiếng Việt giỏi quá!',
          english: 'Yes right away sir! Alex, you speak Vietnamese so well!',
          avatarRole: 'server',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Cảm ơn em nhiều, anh đang cố gắng luyện tập mỗi ngày cùng VietSpeak!',
          english: 'Thank you very much, I am practicing every day with VietSpeak!',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đàm thoại liên hoàn từ chào hỏi đến chúc tốt lành',
        promptEn: 'Speak a complete conversational sequence',
        modelSentence: 'Chào anh, cảm ơn anh đã giúp đỡ, chúc anh một ngày thật nhiều niềm vui nhé!',
        modelAudioText: 'Chào anh, cảm ơn anh đã giúp đỡ, chúc anh một ngày thật nhiều niềm vui nhé!',
        tips: 'Nói liền mạch với ngữ điệu vui vẻ, tự tin.',
      },
    ],
    exercises: [
      {
        id: 'ex-21-1',
        type: 'multiple-choice',
        question: 'Khi ai đó khen "Bạn nói tiếng Việt giỏi quá!", bạn nên đáp lại thế nào?',
        promptEn: 'How to respond modestly when complimented on your Vietnamese?',
        options: [
          'Dạ cảm ơn bạn, mình vẫn đang cố gắng học thêm!',
          'Tôi là số một',
          'Tôi không cần học nữa',
          'Bao nhiêu tiền?',
        ],
        correctAnswer: 'Dạ cảm ơn bạn, mình vẫn đang cố gắng học thêm!',
        explanation: 'Đây là câu hồi đáp khiêm tốn và đẹp lòng người nghe nhất trong văn hóa Việt.',
      },
    ],
    cultureTip: {
      title: 'Đức tính khiêm nhường',
      contentVi:
        'Sự khiêm tốn và cầu tiến là nét đẹp đạo đức truyền thống. Khi được khen ngợi, lời đáp khiêm tốn luôn để lại ấn tượng sâu đậm.',
      contentEn:
        'Modesty and continuous learning are deeply admired. Responding with humble gratitude wins immense respect.',
    },
    nextLessonId: 22,
  },

  {
    id: 22,
    stageNumber: 5,
    stageTitle: 'Phần 5: Luyện tập và vận dụng',
    title: 'Ôn tập và vận dụng tiếng Việt trong đời sống',
    subtitle: 'Comprehensive Review, Life Application and Lifelong Fluency',
    durationMinutes: 45,
    objectives: [
      'Tổng kết toàn diện 22 chủ đề then chốt trong lộ trình học B05',
      'Tự tin vận dụng tiếng Việt vào đời sống thường nhật: mua sắm, ăn uống, kết bạn, du lịch và làm việc',
      'Định hình phương pháp tự học và duy trì phản xạ tiếng Việt bền vững',
    ],
    introVi:
      'Chúc mừng bạn đã chinh phục trọn vẹn lộ trình 22 chương của VietSpeak B05! Hãy tự hào về hành trình nỗ lực của mình và tiếp tục nuôi dưỡng tình yêu với tiếng Việt mỗi ngày.',
    introEn:
      'Congratulations on completing all 22 chapters of the VietSpeak B05 journey! You now possess a solid, practical communicative foundation to speak Vietnamese confidently in daily life.',
    vocabulary: [
      {
        id: 'v22-1',
        vietnamese: 'Thành công',
        english: 'Success / Successful',
        ipa: '/tʰajŋ˨˩ kəwŋ͡m˧˧/',
        category: 'Đời sống',
        tone: 'Huyền - Ngang',
        exampleVi: 'Chúc mừng bạn đã hoàn thành khóa học thành công!',
        exampleEn: 'Congratulations on successfully completing the course!',
      },
      {
        id: 'v22-2',
        vietnamese: 'Tự tin',
        english: 'Confident / Confidence',
        ipa: '/tɨˀ˨˩ tin˧˧/',
        category: 'Cảm xúc',
        tone: 'Nặng - Ngang',
        exampleVi: 'Bây giờ tôi có thể tự tin nói tiếng Việt.',
        exampleEn: 'Now I can speak Vietnamese confidently.',
      },
      {
        id: 'v22-3',
        vietnamese: 'Mỗi ngày',
        english: 'Every day / Daily',
        ipa: '/moj˦ˀ˥ ŋaːj˨˩/',
        category: 'Thời gian',
        tone: 'Ngã - Huyền',
        exampleVi: 'Hãy luyện nói tiếng Việt mỗi ngày nhé!',
        exampleEn: 'Keep practicing spoken Vietnamese every day!',
      },
      {
        id: 'v22-4',
        vietnamese: 'Bạn bè',
        english: 'Friends',
        ipa: '/ɓaːnˀ˨˩ ɓɛ˨˩/',
        category: 'Mối quan hệ',
        tone: 'Nặng - Huyền',
        exampleVi: 'Tôi có rất nhiều bạn bè người Việt Nam.',
        exampleEn: 'I have many Vietnamese friends.',
      },
    ],
    grammarPoints: [
      {
        title: 'Bí quyết duy trì phản xạ đàm thoại lâu dài',
        structure: 'Lắng nghe mỗi ngày + Luyện nói cùng Trợ lý AI + Trò chuyện với người bản xứ',
        explanationVi:
          'Để duy trì phản xạ: thường xuyên nghe nhạc, xem video tiếng Việt, trò chuyện với bạn bè và sử dụng Trợ lý học tập để sửa câu mỗi khi cần.',
        explanationEn:
          'Immerse in daily spoken media, chat with local friends, and revisit the AI study assistant whenever you compose sentences.',
        examples: [
          { vi: 'Tôi có thể nói tiếng Việt mỗi ngày.', en: 'I can speak Vietnamese every single day.' },
        ],
      },
    ],
    dialogue: {
      title: 'Tự tin nói tiếng Việt',
      context: 'Alex và Lan nhìn lại chặng đường học tập',
      lines: [
        {
          speaker: 'Lan',
          vietnamese: 'Chúc mừng Alex đã hoàn thành toàn bộ lộ trình VietSpeak! Bạn nói tiếng Việt rất tự nhiên.',
          english: 'Congratulations Alex on completing the full VietSpeak path! You speak Vietnamese very naturally.',
          avatarRole: 'female',
        },
        {
          speaker: 'Alex',
          vietnamese: 'Cảm ơn Lan và VietSpeak rất nhiều! Tiếng Việt đã trở thành một phần tuyệt vời trong cuộc sống của mình.',
          english: 'Thank you Lan and VietSpeak very much! Vietnamese has become a wonderful part of my life.',
          avatarRole: 'male',
        },
      ],
    },
    speakingPrompts: [
      {
        promptVi: 'Đọc to thông điệp tốt nghiệp lộ trình học',
        promptEn: 'Speak the graduation message out loud',
        modelSentence: 'Tôi tự hào vì đã kiên trì học và nói tiếng Việt thành công!',
        modelAudioText: 'Tôi tự hào vì đã kiên trì học và nói tiếng Việt thành công!',
        tips: 'Phát âm đầy tự hào và năng lượng tích cực.',
      },
    ],
    exercises: [
      {
        id: 'ex-22-1',
        type: 'multiple-choice',
        question: 'Khẩu hiệu của nền tảng VietSpeak B05 là gì?',
        promptEn: 'What is the guiding motto of VietSpeak B05?',
        options: [
          'Tự tin nói tiếng Việt, từng ngày một',
          'Học tiếng Việt trong một giờ',
          'Không cần thực hành',
          'Chỉ học ngữ pháp',
        ],
        correctAnswer: 'Tự tin nói tiếng Việt, từng ngày một',
        explanation: 'Khẩu hiệu truyền cảm hứng: "Tự tin nói tiếng Việt, từng ngày một."',
      },
    ],
    cultureTip: {
      title: 'Học tập suốt đời',
      contentVi:
        'Người Việt có câu "Học, học nữa, học mãi". Ngôn ngữ là cánh cửa mở ra tâm hồn và văn hóa của một dân tộc.',
      contentEn:
        'Language is the window into the soul and heritage of a people. Continue learning and speaking Vietnamese with passion!',
    },
  },
];
