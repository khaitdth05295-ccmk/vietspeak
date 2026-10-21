import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Flame,
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
} from 'lucide-react';
import { LearnerProfile, Screen } from '../types';
import { PLACEMENT_QUESTIONS } from '../data/placementQuiz';
import { CURRICULUM } from '../data/curriculumData';
import { storageService } from '../services/storageService';

interface AssessmentScreenProps {
  profile: LearnerProfile;
  onUpdateProfile: (profile: LearnerProfile) => void;
  onNavigate: (screen: Screen) => void;
  onSelectLesson: (id: number) => void;
}

export const AssessmentScreen: React.FC<AssessmentScreenProps> = ({
  profile,
  onUpdateProfile,
  onNavigate,
  onSelectLesson,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'progress' | 'placement'>('progress');

  // Placement Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [recommendedLevel, setRecommendedLevel] = useState<string | null>(null);
  const [recommendedLessonId, setRecommendedLessonId] = useState<number | null>(null);

  // Compute actual curriculum stats
  const completedCount = profile.completedLessonIds.length;
  const totalLessons = CURRICULUM.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const handleSelectOption = (questionId: number, option: string) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    PLACEMENT_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    setQuizScore(score);
    setQuizSubmitted(true);

    // Continuous stage recommendation based on score
    let targetLesson = 1;
    let stageTitle = 'Phần 1: Làm quen với tiếng Việt';

    if (score >= 8) {
      targetLesson = 10; // Part 4: Everyday communication
      stageTitle = 'Phần 4: Giao tiếp trong đời sống';
    } else if (score >= 4) {
      targetLesson = 6; // Part 3: Sentences and pronouns
      stageTitle = 'Phần 3: Xây dựng câu tiếng Việt';
    } else {
      targetLesson = 1; // Part 1: Foundations
      stageTitle = 'Phần 1: Làm quen với tiếng Việt';
    }

    setRecommendedLevel(stageTitle);
    setRecommendedLessonId(targetLesson);

    // Save score to learner profile
    const updated = storageService.saveQuizScore('placement', score);
    onUpdateProfile(updated);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-purple-800/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Đánh giá năng lực & Theo dõi tiến độ thực tế</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Kiểm tra & Tiến độ học tập
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Xem báo cáo trung thực về các bài học đã hoàn thành, làm bài kiểm tra
            đầu vào (Placement Quiz) 10 câu để nhận gợi ý lộ trình phù hợp năng lực.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveSubTab('progress')}
          className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'progress'
              ? 'border-purple-600 text-purple-900 bg-purple-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Bảng tiến độ & Thống kê thực tế</span>
        </button>

        <button
          onClick={() => setActiveSubTab('placement')}
          className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'placement'
              ? 'border-purple-600 text-purple-900 bg-purple-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Bài kiểm tra phân lớp A0–A2</span>
        </button>
      </div>

      {/* TAB 1: PROGRESS DASHBOARD */}
      {activeSubTab === 'progress' && (
        <div className="space-y-6">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-700 font-medium">Lộ trình học tập</span>
              <div className="text-2xl font-display font-bold text-purple-700">
                B05 Liên tục
              </div>
              <p className="text-[11px] text-slate-700">4 giai đoạn liền mạch</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-700 font-medium">Bài học đã hoàn thành</span>
              <div className="text-3xl font-display font-bold text-emerald-600">
                {completedCount} / {totalLessons}
              </div>
              <p className="text-[11px] text-slate-700">{progressPercent}% lộ trình 22 bài</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-700 font-medium">Chuỗi học liên tục</span>
              <div className="text-3xl font-display font-bold text-amber-500 flex items-center gap-1">
                <Flame className="w-6 h-6 fill-amber-500" />
                <span>{profile.learningStreakDays} ngày</span>
              </div>
              <p className="text-[11px] text-slate-700">Ghi nhận qua hoạt động</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
              <span className="text-xs text-slate-700 font-medium">Từ vựng đã thuộc</span>
              <div className="text-3xl font-display font-bold text-blue-600">
                {profile.masteredVocabIds.length} / {profile.savedVocabIds.length}
              </div>
              <p className="text-[11px] text-slate-700">Trong danh mục Flashcard</p>
            </div>
          </div>

          {/* Curriculum completion checklist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Tiến độ từng bài học
                </h3>
                <p className="text-xs text-slate-700">
                  Toàn bộ 22 bài học trong lộ trình B05 và trạng thái hoàn thành
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {completedCount} / 22 đã hoàn thành
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {CURRICULUM.map((ch) => {
                const isDone = profile.completedLessonIds.includes(ch.id);
                return (
                  <div
                    key={ch.id}
                    onClick={() => {
                      onSelectLesson(ch.id);
                      onNavigate('lessons');
                    }}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isDone
                        ? 'bg-emerald-50/40 border-emerald-200 hover:bg-emerald-50'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                          Bài {ch.id}
                        </span>
                        <span className="text-xs font-medium text-emerald-700">
                          Giai đoạn {ch.stageNumber}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{ch.title}</div>
                      <div className="text-xs text-slate-700 italic line-clamp-1">
                        {ch.subtitle}
                      </div>
                    </div>

                    {isDone ? (
                      <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-700 px-3 py-1 rounded-lg bg-white border border-slate-200 shrink-0">
                        Chưa học
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: PLACEMENT QUIZ */}
      {activeSubTab === 'placement' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Bài kiểm tra chẩn đoán năng lực khởi đầu (10 câu)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Đánh giá phản xạ ngữ âm, cấu trúc câu và khả năng ứng biến trong các tình huống thực tế để gợi ý chặng học phù hợp.
            </p>
          </div>

          {/* Quiz Result Banner */}
          {quizSubmitted && quizScore !== null && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-4 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Kết quả kiểm tra năng lực
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                    Điểm số: {quizScore} / {PLACEMENT_QUESTIONS.length} điểm
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    Gợi ý chặng học phù hợp:{' '}
                    <strong className="text-emerald-700 text-sm sm:text-base">
                      {recommendedLevel}
                    </strong>
                  </p>
                </div>

                {recommendedLessonId && (
                  <button
                    onClick={() => {
                      onSelectLesson(recommendedLessonId);
                      onNavigate('lessons');
                    }}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Bắt đầu từ Bài {recommendedLessonId}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-emerald-200/60 leading-relaxed">
                {quizScore >= 8 &&
                  'Bạn đã có nền tảng giao tiếp rất tốt! VietSpeak đề xuất bạn bắt đầu từ Phần 4 (Giao tiếp trong đời sống) để nâng cao vốn từ vựng phản xạ.'}
                {quizScore >= 4 &&
                  quizScore < 8 &&
                  'Bạn đã nắm được các câu chào hỏi và ngữ pháp cơ bản! VietSpeak khuyến nghị bạn bắt đầu từ Phần 3 (Xây dựng câu tiếng Việt) để nói chuyện tự nhiên hơn.'}
                {quizScore < 4 &&
                  'Đừng lo lắng! Tiếng Việt là một ngôn ngữ tuyệt vời. Hãy bắt đầu ngay từ Phần 1 (Bài 1) để làm quen với bảng chữ cái và 6 thanh điệu chuẩn xác.'}
              </div>
            </div>
          )}

          {/* Questions list */}
          <div className="space-y-6">
            {PLACEMENT_QUESTIONS.map((q, idx) => {
              const selected = userAnswers[q.id];
              const isCorrect = selected === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      Câu {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 italic">{q.questionEn}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      let style = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800';

                      if (quizSubmitted) {
                        if (opt === q.correctAnswer) {
                          style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                        } else if (selected === opt && !isCorrect) {
                          style = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                        }
                      } else if (selected === opt) {
                        style = 'bg-purple-100 border-purple-500 text-purple-900 font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(q.id, opt)}
                          disabled={quizSubmitted}
                          className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                      <strong>Giải thích:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            {!quizSubmitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(userAnswers).length < 5}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white font-bold text-sm cursor-pointer shadow-md"
              >
                Nộp bài & Xem đánh giá trình độ
              </button>
            ) : (
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setUserAnswers({});
                  setQuizScore(null);
                }}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
              >
                Làm lại bài kiểm tra
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
