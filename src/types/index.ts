export type Screen =
  | 'home'
  | 'roadmap'
  | 'lessons'
  | 'speaking-studio'
  | 'ai-tutor'
  | 'dictionary'
  | 'assessment'
  | 'culture'
  | 'about'
  | 'references';

export interface VocabularyItem {
  id: string;
  vietnamese: string;
  english: string;
  ipa: string;
  category: string;
  tone: string;
  exampleVi: string;
  exampleEn: string;
  notes?: string;
}

export interface DialogueLine {
  speaker: string;
  vietnamese: string;
  english: string;
  audioPrompt?: string;
  avatarRole?: 'male' | 'female' | 'server' | 'seller';
}

export interface ExerciseItem {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder' | 'translate';
  question: string;
  promptEn?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Chapter {
  id: number;
  stageNumber: number;
  stageTitle: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  objectives: string[];
  introVi: string;
  introEn: string;
  toneGuide?: {
    focusTones: string[];
    tipsVi: string;
    tipsEn: string;
  };
  vocabulary: VocabularyItem[];
  grammarPoints: {
    title: string;
    structure: string;
    explanationVi: string;
    explanationEn: string;
    examples: { vi: string; en: string }[];
  }[];
  dialogue: {
    title: string;
    context: string;
    lines: DialogueLine[];
  };
  speakingPrompts: {
    promptVi: string;
    promptEn: string;
    modelSentence: string;
    modelAudioText: string;
    tips: string;
  }[];
  exercises: ExerciseItem[];
  cultureTip: {
    title: string;
    contentVi: string;
    contentEn: string;
  };
  nextLessonId?: number;
}

export interface LearnerProfile {
  fullName: string;
  studentId: string;
  group: string;
  completedLessonIds: number[];
  quizScores: Record<string, number>;
  savedVocabIds: string[];
  masteredVocabIds: string[];
  learningStreakDays: number;
  lastActiveDate: string;
  totalPracticeMinutes: number;
}

export interface SavedError {
  id: string;
  original: string;
  corrected: string;
  explanation: string;
  date: string;
  mastered: boolean;
}

export interface CultureArticle {
  id: string;
  title: string;
  category: 'Xưng hô' | 'Ăn uống' | 'Ứng xử' | 'Phương ngữ' | 'Thói quen';
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    examples?: { vi: string; note: string }[];
  }[];
  regionalTable?: {
    concept: string;
    north: string;
    central: string;
    south: string;
  }[];
}

export interface PlacementQuestion {
  id: number;
  stageName: string;
  question: string;
  questionEn: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface SpeakingDrill {
  id: string;
  category: 'Thanh điệu đối lập' | 'Nguyên âm ngắn & dài' | 'Phụ âm đầu & cuối' | 'Mẫu câu giao tiếp';
  title: string;
  descriptionVi: string;
  descriptionEn: string;
  items: {
    word: string;
    tone: string;
    ipa: string;
    meaningEn: string;
    audioText: string;
    contour: string;
  }[];
}
