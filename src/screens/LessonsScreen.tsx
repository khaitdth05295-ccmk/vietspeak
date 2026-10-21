import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Check,
  AlertCircle,
  ArrowRight,
  Clock,
  Mic,
} from 'lucide-react';
import { Chapter, LearnerProfile, Screen } from '../types';
import { CURRICULUM } from '../data/curriculumData';
import { speechService } from '../services/speechService';
import { storageService } from '../services/storageService';

interface LessonsScreenProps {
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  profile: LearnerProfile;
  onUpdateProfile: (profile: LearnerProfile) => void;
  onNavigate: (screen: Screen) => void;
}

type LessonTab = 'theory' | 'dialogue' | 'speaking' | 'exercises' | 'culture';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({
  currentLessonId,
  onSelectLesson,
  profile,
  onUpdateProfile,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<LessonTab>('theory');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedExercises, setSubmittedExercises] = useState<Record<string, boolean>>({});
  const [showCompletionToast, setShowCompletionToast] = useState(false);

  const currentChapter =
    CURRICULUM.find((c) => c.id === currentLessonId) || CURRICULUM[0];
  const isCompleted = profile.completedLessonIds.includes(currentChapter.id);

  const handlePlaySpeech = (text: string, id: string) => {
    setPlayingAudioId(id);
    speechService.speak(
      text,
      0.85,
      () => setPlayingAudioId(null),
      () => setPlayingAudioId(null)
    );
  };

  const handleSelectAnswer = (exerciseId: string, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [exerciseId]: answer }));
  };

  const handleCheckAnswer = (exerciseId: string) => {
    setSubmittedExercises((prev) => ({ ...prev, [exerciseId]: true }));
  };

  const handleToggleSaveVocab = (vocabId: string) => {
    const { profile: updated } = storageService.toggleSaveVocab(vocabId);
    onUpdateProfile(updated);
  };

  const handleMarkCompleted = () => {
    const updated = storageService.markLessonCompleted(currentChapter.id);
    onUpdateProfile(updated);
    setShowCompletionToast(true);
    setTimeout(() => setShowCompletionToast(false), 4000);
  };

  const handleNextChapter = () => {
    if (currentChapter.nextLessonId) {
      onSelectLesson(currentChapter.nextLessonId);
      setActiveTab('theory');
      setUserAnswers({});
      setSubmittedExercises({});
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter.id > 1) {
      onSelectLesson(currentChapter.id - 1);
      setActiveTab('theory');
      setUserAnswers({});
      setSubmittedExercises({});
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Lesson Selector Top Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <select
            value={currentChapter.id}
            onChange={(e) => {
              onSelectLesson(Number(e.target.value));
              setActiveTab('theory');
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            {CURRICULUM.map((c) => (
              <option key={c.id} value={c.id}>
                Bài {c.id}: {c.title}
              </option>
            ))}
          </select>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
            {currentChapter.stageTitle}
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-700">
            <Clock className="w-3.5 h-3.5" /> ~{currentChapter.durationMinutes} phút
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevChapter}
            disabled={currentChapter.id <= 1}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Bài trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold text-slate-700 px-1">
            {currentChapter.id} / {CURRICULUM.length}
          </span>
          <button
            onClick={handleNextChapter}
            disabled={!currentChapter.nextLessonId}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Bài tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lesson Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold tracking-wide uppercase">
              <span>{currentChapter.stageTitle}</span>
              <span>·</span>
              <span>Bài {currentChapter.id}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {currentChapter.title}
            </h1>
            <p className="text-emerald-100 text-sm italic">{currentChapter.subtitle}</p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
              {currentChapter.introVi}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start sm:items-end gap-3">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-400 text-emerald-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Đã đánh dấu hoàn thành</span>
              </span>
            ) : (
              <button
                onClick={handleMarkCompleted}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Đánh dấu hoàn thành bài</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showCompletionToast && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Chúc mừng bạn đã hoàn thành Bài {currentChapter.id}! Tiến độ đã được lưu vào hệ thống.</span>
          </div>
          {currentChapter.nextLessonId && (
            <button
              onClick={handleNextChapter}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline ml-4 cursor-pointer"
            >
              Học tiếp Bài {currentChapter.nextLessonId}
            </button>
          )}
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto space-x-1 sm:space-x-3">
        {[
          { id: 'theory', label: 'Lý thuyết & Từ vựng', icon: BookOpen },
          { id: 'dialogue', label: 'Hội thoại mẫu', icon: MessageSquare },
          { id: 'speaking', label: 'Luyện nói & Mẫu câu', icon: Mic },
          { id: 'exercises', label: `Bài tập (${currentChapter.exercises.length})`, icon: HelpCircle },
          { id: 'culture', label: 'Mẹo văn hóa', icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as LessonTab)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Theory & Vocabulary */}
      {activeTab === 'theory' && (
        <div className="space-y-8">
          {/* Learning Objectives */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h3 className="font-display font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Mục tiêu bài học (Learning Objectives)</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentChapter.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tone Guide if present */}
          {currentChapter.toneGuide && (
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-amber-900 text-sm uppercase tracking-wider">
                  Trọng tâm ngữ âm & Thanh điệu
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900">
                  {currentChapter.toneGuide.focusTones.join(', ')}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                {currentChapter.toneGuide.tipsVi}
              </p>
              <p className="text-xs text-amber-800 italic">
                English guide: {currentChapter.toneGuide.tipsEn}
              </p>
            </div>
          )}

          {/* Grammar Points */}
          {currentChapter.grammarPoints.map((gp, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  {gp.title}
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  Cấu trúc câu
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs sm:text-sm text-emerald-900 font-semibold">
                {gp.structure}
              </div>

              <div className="space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{gp.explanationVi}</p>
                <p className="text-xs text-slate-700 italic">{gp.explanationEn}</p>
              </div>

              {gp.examples.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Ví dụ minh họa:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {gp.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900">
                            {ex.vi}
                          </div>
                          <div className="text-xs text-slate-700">{ex.en}</div>
                        </div>
                        <button
                          onClick={() => handlePlaySpeech(ex.vi, `ex-${idx}-${eIdx}`)}
                          className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-100 cursor-pointer"
                          title="Nghe âm thanh mẫu"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Core Vocabulary Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-xl">
                  Từ vựng trọng tâm ({currentChapter.vocabulary.length} từ)
                </h3>
                <p className="text-xs text-slate-700">
                  Nhấn vào loa để nghe đọc mẫu (Text-to-Speech tự động)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentChapter.vocabulary.map((vocab) => {
                const isSaved = profile.savedVocabIds.includes(vocab.id);
                const isPlaying = playingAudioId === vocab.id;
                return (
                  <div
                    key={vocab.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-slate-900">
                            {vocab.vietnamese}
                          </h4>
                          <span className="text-xs font-mono text-slate-700">
                            {vocab.ipa}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-emerald-700">
                          {vocab.english}
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handlePlaySpeech(vocab.vietnamese, vocab.id)}
                          disabled={isPlaying}
                          className={`p-2 rounded-xl transition-all cursor-pointer ${
                            isPlaying
                              ? 'bg-emerald-600 text-white animate-pulse'
                              : 'bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800'
                          }`}
                          title="Nghe phát âm chuẩn"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleToggleSaveVocab(vocab.id)}
                          className={`p-2 rounded-xl transition-all cursor-pointer ${
                            isSaved
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                          }`}
                          title={isSaved ? 'Đã lưu trong sổ từ vựng' : 'Lưu từ vựng'}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Thanh điệu: <strong>{vocab.tone}</strong></span>
                        <span className="px-2 py-0.5 rounded bg-slate-100">{vocab.category}</span>
                      </div>
                      <div className="text-slate-800 font-medium">
                        "{vocab.exampleVi}"
                      </div>
                      <div className="text-slate-700 italic">
                        "{vocab.exampleEn}"
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Dialogue */}
      {activeTab === 'dialogue' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              {currentChapter.dialogue.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              <strong>Bối cảnh:</strong> {currentChapter.dialogue.context}
            </p>
          </div>

          <div className="space-y-4">
            {currentChapter.dialogue.lines.map((line, idx) => {
              const isPlaying = playingAudioId === `diag-${idx}`;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/20 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      {line.speaker}
                    </span>
                    <div className="text-sm sm:text-base font-semibold text-slate-900 pt-1">
                      {line.vietnamese}
                    </div>
                    <div className="text-xs text-slate-700 italic">
                      {line.english}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlaySpeech(line.vietnamese, `diag-${idx}`)}
                    disabled={isPlaying}
                    className={`p-2.5 rounded-xl shrink-0 cursor-pointer ${
                      isPlaying
                        ? 'bg-emerald-600 text-white animate-pulse'
                        : 'bg-white text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 border border-slate-200'
                    }`}
                    title="Nghe câu thoại"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => onNavigate('speaking-studio')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Luyện tập trong Phòng Luyện Nói</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: Speaking Prompts */}
      {activeTab === 'speaking' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Mẫu câu & Nhiệm vụ luyện nói
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Hãy nghe mẫu câu chuẩn, sau đó đọc to lại để tạo phản xạ khẩu hình.
            </p>

            <div className="space-y-4 pt-2">
              {currentChapter.speakingPrompts.map((sp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Nhiệm vụ {idx + 1}: {sp.promptVi}
                    </span>
                    <span className="text-xs text-slate-700 italic">
                      {sp.promptEn}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200 flex items-center justify-between gap-4">
                    <div className="text-base sm:text-lg font-bold text-slate-900">
                      "{sp.modelSentence}"
                    </div>
                    <button
                      onClick={() => handlePlaySpeech(sp.modelAudioText, `sp-${idx}`)}
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                      title="Nghe mẫu câu"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span><strong>Mẹo phát âm:</strong> {sp.tips}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <h4 className="font-bold text-sm">Bạn muốn kiểm tra câu nói của mình với Trợ lý AI?</h4>
                <p className="text-xs text-slate-400">Trợ lý AI sẵn sàng hỗ trợ sửa câu và đóng vai giao tiếp.</p>
              </div>
              <button
                onClick={() => onNavigate('ai-tutor')}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold cursor-pointer whitespace-nowrap"
              >
                Mở Trợ lý học tiếng Việt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Interactive Exercises */}
      {activeTab === 'exercises' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Bài tập thực hành tương tác
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Chọn câu trả lời và nhấn "Kiểm tra đáp án" để xem giải thích chi tiết.
              </p>
            </div>

            <div className="space-y-6">
              {currentChapter.exercises.map((ex, index) => {
                const selected = userAnswers[ex.id];
                const isSubmitted = submittedExercises[ex.id];
                const isCorrect = selected === ex.correctAnswer;

                return (
                  <div
                    key={ex.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                        Câu {index + 1}
                      </span>
                      {ex.promptEn && (
                        <span className="text-xs text-slate-700 italic">
                          {ex.promptEn}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {ex.question}
                    </h4>

                    {/* Options list */}
                    {ex.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ex.options.map((opt, oIdx) => {
                          const isOptSelected = selected === opt;
                          let optStyle = 'bg-white border-slate-200 hover:border-slate-300 text-slate-800';

                          if (isSubmitted) {
                            if (opt === ex.correctAnswer) {
                              optStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                            } else if (isOptSelected && !isCorrect) {
                              optStyle = 'bg-rose-100 border-rose-500 text-rose-900 line-through';
                            }
                          } else if (isOptSelected) {
                            optStyle = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold';
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => !isSubmitted && handleSelectAnswer(ex.id, opt)}
                              disabled={isSubmitted}
                              className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${optStyle}`}
                            >
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Submit and Feedback */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      {!isSubmitted ? (
                        <button
                          onClick={() => handleCheckAnswer(ex.id)}
                          disabled={!selected}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white text-xs font-semibold cursor-pointer"
                        >
                          Kiểm tra đáp án
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-bold">
                          {isCorrect ? (
                            <span className="flex items-center gap-1 text-emerald-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Chính xác! Rất xuất sắc.</span>
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-rose-700">
                              <AlertCircle className="w-4 h-4 text-rose-600" />
                              <span>Chưa chính xác. Đáp án đúng là: {ex.correctAnswer}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {isSubmitted && (
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                        <strong>Giải thích:</strong> {ex.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Culture Tip */}
      {activeTab === 'culture' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Góc văn hóa giao tiếp</span>
          </div>

          <h3 className="font-display font-bold text-2xl text-slate-900">
            {currentChapter.cultureTip.title}
          </h3>

          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
            <p>{currentChapter.cultureTip.contentVi}</p>
            <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-amber-300 pl-3">
              English note: {currentChapter.cultureTip.contentEn}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => onNavigate('culture')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Xem toàn bộ cẩm nang văn hóa Việt Nam</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
