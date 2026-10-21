import { SpeakingDrill } from '../types';

export const SPEAKING_DRILLS: SpeakingDrill[] = [
  {
    id: 'drill-tones-ma',
    category: 'Thanh điệu đối lập',
    title: 'Chuỗi 6 thanh kinh điển: Ma - Má - Mà - Mả - Mã - Mạ',
    descriptionVi:
      'Luyện làm chủ toàn bộ 6 đường cong cao độ của thanh điệu tiếng Việt trên cùng một âm tiết nền.',
    descriptionEn:
      'Master all six pitch contours of the Vietnamese tonal system on the classic base syllable "ma".',
    items: [
      {
        word: 'Ma',
        tone: 'Thanh Ngang (Không dấu)',
        ipa: '/maː˧˧/',
        meaningEn: 'Ghost',
        audioText: 'Ma',
        contour: 'Cao độ phẳng, đều nhịp ở mức trung bình (33).',
      },
      {
        word: 'Má',
        tone: 'Thanh Sắc',
        ipa: '/maː˦˥/',
        meaningEn: 'Cheek / Mother (South)',
        audioText: 'Má',
        contour: 'Bắt đầu ở mức 4, vút mạnh và nhanh lên mức 5 (35).',
      },
      {
        word: 'Mà',
        tone: 'Thanh Huyền',
        ipa: '/maː˨˩/',
        meaningEn: 'But / Yet / Which',
        audioText: 'Mà',
        contour: 'Hạ trầm đều từ mức 2 xuống mức 1 (21), thả lỏng hơi.',
      },
      {
        word: 'Mả',
        tone: 'Thanh Hỏi',
        ipa: '/maː˧˩˨/',
        meaningEn: 'Tomb / Grave',
        audioText: 'Mả',
        contour: 'Hạ sâu xuống đáy rồi nhấc nhẹ lên (312), uốn như chiếc móc câu.',
      },
      {
        word: 'Mã',
        tone: 'Thanh Ngã',
        ipa: '/maː˦ˀ˥/',
        meaningEn: 'Horse / Code',
        audioText: 'Mã',
        contour: 'Lên cao, ngắt nhẹ thanh môn ở giữa rồi vút tiếp lên cao (45 glottal).',
      },
      {
        word: 'Mạ',
        tone: 'Thanh Nặng',
        ipa: '/maːˀ˨˩/',
        meaningEn: 'Young rice seedling',
        audioText: 'Mạ',
        contour: 'Rơi thẳng xuống đáy và ngắt dứt khoát đột ngột (21 drop).',
      },
    ],
  },
  {
    id: 'drill-tones-ca',
    category: 'Thanh điệu đối lập',
    title: 'Cặp đối âm có nghĩa: Ca - Cá - Cà - Cả',
    descriptionVi:
      'Nhận biết sự khác biệt giữa các thanh qua những danh từ thực phẩm và đời sống thường ngày.',
    descriptionEn:
      'Contrast everyday food and object words differing only by tone mark.',
    items: [
      {
        word: 'Ca',
        tone: 'Thanh Ngang',
        ipa: '/kaː˧˧/',
        meaningEn: 'Sing / Mug / Shift',
        audioText: 'Ca',
        contour: 'Ngang bằng phẳng, không lên không xuống.',
      },
      {
        word: 'Cá',
        tone: 'Thanh Sắc',
        ipa: '/kaː˦˥/',
        meaningEn: 'Fish',
        audioText: 'Cá',
        contour: 'Vút lên cao, ngân ngắn.',
      },
      {
        word: 'Cà',
        tone: 'Thanh Huyền',
        ipa: '/kaː˨˩/',
        meaningEn: 'Eggplant / Tomato (cà chua)',
        audioText: 'Cà',
        contour: 'Hạ giọng trầm, êm ái.',
      },
      {
        word: 'Cả',
        tone: 'Thanh Hỏi',
        ipa: '/kaː˧˩˨/',
        meaningEn: 'All / Whole / Eldest',
        audioText: 'Cả',
        contour: 'Hơi trầm xuống rồi nhấc lên.',
      },
    ],
  },
  {
    id: 'drill-vowels-a',
    category: 'Nguyên âm ngắn & dài',
    title: 'Phân biệt nguyên âm: A - Ă - Â',
    descriptionVi:
      'Chữ "A" là nguyên âm dài; chữ "Ă" và "Â" là hai nguyên âm ngắn luôn cần phụ âm cuối đi kèm.',
    descriptionEn:
      'Contrast long "A" with short vowels "Ă" and "Â" requiring a final consonant.',
    items: [
      {
        word: 'Can',
        tone: 'Thanh Ngang',
        ipa: '/kaːn˧˧/',
        meaningEn: 'To dissuade / Gallon container',
        audioText: 'Can',
        contour: 'Nguyên âm /aː/ dài, mở rộng miệng.',
      },
      {
        word: 'Căn',
        tone: 'Thanh Ngang',
        ipa: '/kăn˧˧/',
        meaningEn: 'Apartment unit / Base',
        audioText: 'Căn',
        contour: 'Nguyên âm /ă/ rất ngắn, dứt khoát hơn.',
      },
      {
        word: 'Cân',
        tone: 'Thanh Ngang',
        ipa: '/kə̆n˧˧/',
        meaningEn: 'Scale / Kilogram / Balanced',
        audioText: 'Cân',
        contour: 'Nguyên âm /ə̆/ nửa đóng, khẩu hình trung gian.',
      },
    ],
  },
  {
    id: 'drill-phrases-daily',
    category: 'Mẫu câu giao tiếp',
    title: 'Các mẫu câu giao tiếp tự nhiên hằng ngày',
    descriptionVi:
      'Luyện nhịp điệu (cadence) và ngữ điệu toàn câu trong các tình huống thực tế của người nước ngoài.',
    descriptionEn:
      'Practice natural sentence rhythm, intonation, and linking in everyday situations.',
    items: [
      {
        word: 'Xin chào, rất vui được gặp bạn!',
        tone: 'Ngữ điệu chào hỏi',
        ipa: '/sin˧˧ caːw˨˩ zat̚˦˥ vwi˧˧ ɗɨək̚ˀ˨˩ ɣap̚ˀ˨˩ ɓaːnˀ˨˩/',
        meaningEn: 'Hello, very nice to meet you!',
        audioText: 'Xin chào, rất vui được gặp bạn!',
        contour: 'Giọng điệu niềm nở, tươi vui, nhấn vào "vui" và "bạn".',
      },
      {
        word: 'Em ơi, cho anh xin thực đơn với!',
        tone: 'Ngữ điệu gọi món',
        ipa: '/ʔɛm˧˧ ʔəːj˧˧ cɔ˧˧ ʔajŋ˧˧ sin˧˧ tʰɨk̚ˀ˨˩ ɗəːn˧˧ vəːj˦˥/',
        meaningEn: 'Server, please let me see the menu!',
        audioText: 'Em ơi, cho anh xin thực đơn với!',
        contour: 'Ngữ điệu thân thiện, dâng nhẹ ở chữ "ơi" và "với".',
      },
      {
        word: 'Cái này bao nhiêu một ký vậy cô?',
        tone: 'Ngữ điệu mua sắm',
        ipa: '/kaːj˦˥ naj˨˩ ɓaːw˧˧ ɲiəw˧˧ mot̚ˀ˨˩ ki˧˧ vəjˀ˨˩ ko˧˧/',
        meaningEn: 'How much is a kilo of this, auntie?',
        audioText: 'Cái này bao nhiêu một ký vậy cô?',
        contour: 'Lên giọng nhẹ ở "bao nhiêu", hạ nhẹ tình cảm ở "cô".',
      },
      {
        word: 'Làm ơn cho tôi xuống ở ngã tư phía trước.',
        tone: 'Ngữ điệu chỉ đường',
        ipa: '/laːm˨˩ ʔəːn˧˧ cɔ˧˧ toj˧˧ swəwŋ͡m˦˥ ʔəː˧˩˨ ŋaː˦ˀ˥ tɨ˧˧ fiə˦˥ cɨək̚˦˥/',
        meaningEn: 'Please drop me off at the intersection ahead.',
        audioText: 'Làm ơn cho tôi xuống ở ngã tư phía trước.',
        contour: 'Rõ ràng, dứt khoát để tài xế nghe rõ tín hiệu.',
      },
    ],
  },
];
