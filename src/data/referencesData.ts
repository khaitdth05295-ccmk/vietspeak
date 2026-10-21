export interface ReferenceSource {
  id: string;
  title: string;
  organization: string;
  url: string;
  category: 'Ngữ âm & Phát âm' | 'Từ điển & Ngôn ngữ học' | 'Giáo trình & Học thuật' | 'Công nghệ & AI';
  descriptionVi: string;
  descriptionEn: string;
  relevance: string;
}

export const REFERENCES_DATABASE: ReferenceSource[] = [
  {
    id: 'ref-niu',
    title: 'SEAsite Vietnamese Language & Culture Resource',
    organization: 'Northern Illinois University (Center for Southeast Asian Studies)',
    url: 'https://seasite.niu.edu/Vietnamese/',
    category: 'Giáo trình & Học thuật',
    descriptionVi:
      'Cổng thông tin học thuật trực tuyến kinh điển về ngữ pháp, phát âm và hệ thống văn hóa giao tiếp tiếng Việt dành cho người nước ngoài được xây dựng bởi Đại học Bắc Illinois.',
    descriptionEn:
      'A pioneering online academic repository for Vietnamese grammar, phonology, and socio-cultural communication modules designed for non-native learners.',
    relevance:
      'Tham chiếu cơ sở lý thuyết cho việc phân kỳ khung trình độ A0-A2, cấu trúc bài hội thoại theo chủ đề thực tế và hướng dẫn phương ngữ.',
  },
  {
    id: 'ref-forvo',
    title: 'Forvo Pronunciation Dictionary — Vietnamese Guide',
    organization: 'Forvo Media',
    url: 'https://forvo.com/languages/vi/',
    category: 'Ngữ âm & Phát âm',
    descriptionVi:
      'Kho dữ liệu phát âm từ vựng lớn nhất thế giới được thu âm bởi người bản xứ đến từ nhiều vùng miền khác nhau tại Việt Nam (Hà Nội, Sài Gòn, Đà Nẵng, v.v.).',
    descriptionEn:
      'The world’s largest crowdsourced pronunciation dictionary recorded by native speakers from diverse Vietnamese dialect regions.',
    relevance:
      'Đóng vai trò đối chiếu chuẩn hóa phiên âm quốc tế IPA và cao độ 6 thanh điệu trong phòng luyện phát âm.',
  },
  {
    id: 'ref-wiktionary',
    title: 'Wiktionary: About Vietnamese & Etymological Lexicon',
    organization: 'Wikimedia Foundation',
    url: 'https://en.wiktionary.org/wiki/Wiktionary:About_Vietnamese',
    category: 'Từ điển & Ngôn ngữ học',
    descriptionVi:
      'Từ điển mở cung cấp chi tiết từ loại, phiên âm IPA giọng Hà Nội/Sài Gòn, từ nguyên Hán-Việt và bảng chia loại từ.',
    descriptionEn:
      'Collaborative multilingual dictionary detailing Vietnamese lexical categories, regional IPA phonetics, and Sino-Vietnamese roots.',
    relevance:
      'Cung cấp nguồn gốc từ vựng, phân định từ loại và chuẩn hóa phiên âm chuẩn cho mô-đun Từ điển & Flashcards.',
  },
  {
    id: 'ref-wikipedia',
    title: 'Vietnamese Language Overview & Dialectology',
    organization: 'Wikipedia Encyclopedia',
    url: 'https://en.wikipedia.org/wiki/Vietnamese_language',
    category: 'Giáo trình & Học thuật',
    descriptionVi:
      'Tổng quan học thuật về cấu trúc ngữ pháp ngôn ngữ đơn lập không biến hình (Isolating language), hệ thống thanh điệu và lịch sử hình thành chữ Quốc ngữ.',
    descriptionEn:
      'Academic overview of Vietnamese as an analytic/isolating language, tonogenesis, tone register contours, and orthographic history.',
    relevance:
      'Nền tảng xây dựng các bài giảng nền tảng Phần I (Âm vị học, thanh điệu) và Phần II (Trật tự từ không chia thì).',
  },
  {
    id: 'ref-gemini-docs',
    title: 'Google AI for Developers — Gemini API Documentation',
    organization: 'Google DeepMind & Google Cloud',
    url: 'https://ai.google.dev/gemini-api/docs',
    category: 'Công nghệ & AI',
    descriptionVi:
      'Tài liệu hướng dẫn kỹ thuật chính thức của SDK @google/genai, các mẫu lệnh hệ thống (system instructions), vai trò đàm thoại và phân tích ngôn ngữ tự nhiên.',
    descriptionEn:
      'Official technical developer documentation for the modern @google/genai TypeScript SDK, multimodal context handling, and chat agents.',
    relevance:
      'Cơ sở kỹ thuật triển khai máy chủ Gia sư AI (sửa câu, phân tích từ vựng, đóng vai và tạo đề luyện tập).',
  },
  {
    id: 'ref-glottolog',
    title: 'Glottolog: Comprehensive Reference on Vietic & Austroasiatic Languages',
    organization: 'Max Planck Institute for Evolutionary Anthropology',
    url: 'https://glottolog.org/resource/languoid/id/viet1252',
    category: 'Giáo trình & Học thuật',
    descriptionVi:
      'Hệ thống thư mục khoa học quốc tế ghi nhận phân loại ngữ hệ Nam Á (Austroasiatic) và các nghiên cứu chuyên sâu về ngữ pháp tiếng Việt hiện đại.',
    descriptionEn:
      'Comprehensive linguistic classification catalog for the Austroasiatic family and modern Vietnamese linguistic typologies.',
    relevance:
      'Tham chiếu chuẩn mực cho việc thiết kế các thuật ngữ khoa học và đối chiếu loại hình ngôn ngữ.',
  },
];
