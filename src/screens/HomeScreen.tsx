import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Volume2,
  Bot,
  Layers,
  Award,
  Globe2,
  CheckCircle2,
} from 'lucide-react';
import { Screen, LearnerProfile } from '../types';
import { CURRICULUM } from '../data/curriculumData';
import { speechService } from '../services/speechService';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  profile: LearnerProfile;
  onSelectLesson: (lessonId: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  profile,
  onSelectLesson,
}) => {
  const [isPlayingQuote, setIsPlayingQuote] = useState(false);

  // Find next lesson to study in continuous path
  const nextLessonId =
    CURRICULUM.find((c) => !profile.completedLessonIds.includes(c.id))?.id || 1;
  const nextLesson =
    CURRICULUM.find((c) => c.id === nextLessonId) || CURRICULUM[0];

  const handlePlayQuote = () => {
    setIsPlayingQuote(true);
    speechService.speak(
      'Học ăn, học nói, học gói, học mở. Chúc bạn có một ngày học tiếng Việt thật nhiều niềm vui!',
      0.85,
      () => setIsPlayingQuote(false),
      () => setIsPlayingQuote(false)
    );
  };

  const handleContinueLesson = () => {
    onSelectLesson(nextLesson.id);
    onNavigate('lessons');
  };

  const completionPercentage = Math.round(
    (profile.completedLessonIds.length / CURRICULUM.length) * 100
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section - Compact & Educational */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-sm border border-emerald-900/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lộ trình liên tục B05 · Luyện nói tiếng Việt</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight text-white">
            Tự tin nói tiếng Việt, từng ngày một.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Nền tảng học tiếng Việt dành cho người nước ngoài, kết hợp 22 bài học
            theo lộ trình liên tục với hoạt động đàm thoại tương tác và trợ lý học tập AI.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleContinueLesson}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Học tiếp: Bài {nextLesson.id} - {nextLesson.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('roadmap')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Xem toàn bộ 22 bài</span>
            </button>

            <button
              onClick={() => onNavigate('ai-tutor')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 text-teal-200 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Trợ lý học tiếng Việt</span>
            </button>
          </div>
        </div>

        {/* Quick Progress status inside hero */}
        <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
          <div>
            Tiến độ: <strong className="text-white">{profile.completedLessonIds.length} / {CURRICULUM.length}</strong> bài đã học ({completionPercentage}%)
          </div>
          <div>
            Chuỗi học: <strong className="text-amber-300">{profile.learningStreakDays} ngày</strong> liên tục
          </div>
          <div>
            Từ vựng: <strong className="text-emerald-300">{profile.savedVocabIds.length}</strong> từ đã lưu
          </div>
        </div>
      </section>

      {/* Daily Proverb */}
      <section className="bg-gradient-to-r from-amber-50 via-emerald-50/40 to-teal-50 border border-amber-200/70 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            Tục ngữ tiếng Việt mỗi ngày
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900">
            “Học ăn, học nói, học gói, học mở.”
          </h2>
          <p className="text-xs text-slate-600">
            Lời dạy truyền thống về sự khéo léo, thanh lịch và chu đáo trong cách ăn nói, ứng xử đời thường.
          </p>
        </div>

        <button
          onClick={handlePlayQuote}
          disabled={isPlayingQuote}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-amber-100/60 text-amber-900 border border-amber-300 shadow-xs cursor-pointer"
        >
          <Volume2 className="w-4 h-4 text-amber-600" />
          <span>{isPlayingQuote ? 'Đang đọc...' : 'Nghe phát âm mẫu'}</span>
        </button>
      </section>

      {/* Up Next Banner */}
      <section className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Bài học kế tiếp
          </span>
          <h3 className="text-lg font-display font-bold text-slate-900 mt-1">
            Bài {nextLesson.id}: {nextLesson.title}
          </h3>
          <p className="text-xs text-slate-600">{nextLesson.subtitle} · ~{nextLesson.durationMinutes} phút</p>
        </div>

        <button
          onClick={handleContinueLesson}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs cursor-pointer"
        >
          Vào học bài này
        </button>
      </section>
    </div>
  );
};
