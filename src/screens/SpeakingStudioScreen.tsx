import React, { useState } from 'react';
import {
  Volume2,
  Sparkles,
  Info,
  CheckCircle2,
  Check,
  BookOpen,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { SPEAKING_DRILLS } from '../data/speakingDrills';
import { speechService } from '../services/speechService';
import { Screen } from '../types';

interface SpeakingStudioScreenProps {
  onNavigate?: (screen: Screen) => void;
}

export const SpeakingStudioScreen: React.FC<SpeakingStudioScreenProps> = ({
  onNavigate,
}) => {
  const [selectedDrillIndex, setSelectedDrillIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.85);
  const [isPlayingModel, setIsPlayingModel] = useState(false);

  // Self-evaluation checklist
  const [checkedCriteria, setCheckedCriteria] = useState<{
    tonePitch: boolean;
    vowelMouth: boolean;
    finalConsonant: boolean;
  }>({
    tonePitch: false,
    vowelMouth: false,
    finalConsonant: false,
  });

  // Listening drill quiz state
  const [listeningQuizAnswer, setListeningQuizAnswer] = useState<string | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const currentDrill = SPEAKING_DRILLS[selectedDrillIndex];
  const currentItem = currentDrill.items[selectedItemIndex];

  const handlePlayModelAudio = (text?: string) => {
    const toSpeak = text || currentItem.audioText;
    setIsPlayingModel(true);
    speechService.speak(
      toSpeak,
      playbackSpeed,
      () => setIsPlayingModel(false),
      () => setIsPlayingModel(false)
    );
  };

  const handleSelectDrill = (idx: number) => {
    setSelectedDrillIndex(idx);
    setSelectedItemIndex(0);
    setCheckedCriteria({ tonePitch: false, vowelMouth: false, finalConsonant: false });
    setListeningQuizAnswer(null);
    setShowQuizResult(false);
  };

  const handleSelectItem = (idx: number) => {
    setSelectedItemIndex(idx);
    setCheckedCriteria({ tonePitch: false, vowelMouth: false, finalConsonant: false });
    setListeningQuizAnswer(null);
    setShowQuizResult(false);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Studio Header */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-teal-800/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Volume2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Phòng luyện phát âm & Nhắc lại đàm thoại</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Phòng luyện nói tiếng Việt
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Môi trường luyện phát âm và mẫu câu tương tác: Nghe giọng đọc mẫu tham khảo (Text-to-Speech),
            quan sát hướng dẫn đường cong cao độ của 6 thanh điệu, và thực hành nhắc lại từng câu nói tự tin.
          </p>

          <div className="flex items-center gap-2 text-xs text-amber-200/90 bg-amber-950/40 border border-amber-500/30 p-3 rounded-xl max-w-2xl">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Lưu ý:</strong> Âm thanh đọc mẫu sử dụng công nghệ Text-to-Speech (TTS) của trình duyệt nhằm hỗ trợ người học nghe đối chiếu chuẩn mực ngữ âm.
            </span>
          </div>
        </div>
      </div>

      {/* Drill Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {SPEAKING_DRILLS.map((drill, index) => (
          <button
            key={drill.id}
            onClick={() => handleSelectDrill(index)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedDrillIndex === index
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {drill.title}
          </button>
        ))}
      </div>

      {/* Main Practice Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Syllables / Phrases List */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="font-display font-bold text-sm text-slate-900">
              Danh mục luyện tập
            </h3>
            <p className="text-xs text-slate-600">{currentDrill.descriptionVi}</p>
          </div>

          <div className="space-y-1.5">
            {currentDrill.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectItem(idx)}
                className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                  selectedItemIndex === idx
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-950 font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100/80 border border-transparent text-slate-700'
                }`}
              >
                <div>
                  <div className="text-sm font-bold">{item.word}</div>
                  <div className="text-[11px] text-slate-500">{item.tone}</div>
                </div>
                <span className="text-xs font-mono text-slate-600">{item.ipa}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Target Sound Deck & Repetition Prompts */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {/* Target Display */}
          <div className="text-center py-6 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              {currentItem.tone}
            </span>
            <div className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              {currentItem.word}
            </div>
            <div className="text-sm font-mono text-slate-600">{currentItem.ipa}</div>
            <div className="text-xs text-slate-600 italic">
              Nghĩa tiếng Anh: "{currentItem.meaningEn}"
            </div>
            <div className="pt-2 text-xs text-emerald-800 font-medium max-w-md mx-auto">
              💡 {currentItem.contour}
            </div>
          </div>

          {/* Audio Reference Controls */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handlePlayModelAudio()}
                disabled={isPlayingModel}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isPlayingModel
                    ? 'bg-emerald-700 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isPlayingModel ? 'Đang phát âm...' : 'Nghe đọc mẫu tham khảo (TTS)'}</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span>Tốc độ:</span>
                {[0.75, 0.85, 1.0].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setPlaybackSpeed(rate)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                      playbackSpeed === rate
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <span className="text-[11px] text-slate-500 italic">
              Web Speech Synthesis (vi-VN)
            </span>
          </div>

          {/* Sentence Repetition Prompt Card */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Nhiệm vụ luyện nói: Đọc to & Nhắc lại</span>
              </span>
              <span className="text-[11px] text-emerald-800">Tự luyện phát âm</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Hãy nghe mẫu âm thanh 2 lần, sau đó đọc to rõ ràng từ/câu: "<strong>{currentItem.word}</strong>".
              Chú ý giữ đúng cao độ theo hướng dẫn: <em>{currentItem.contour}</em>.
            </p>

            <div className="p-3 bg-white rounded-xl border border-emerald-200/80 flex items-center justify-between gap-3">
              <span className="text-base sm:text-lg font-bold text-slate-900">
                "{currentItem.word}"
              </span>
              <button
                onClick={() => handlePlayModelAudio()}
                className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 cursor-pointer text-xs font-semibold flex items-center gap-1"
                title="Nghe lại"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe lại</span>
              </button>
            </div>
          </div>

          {/* Listening Comprehension Check */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Bài tập luyện nghe nhận diện âm</span>
              </span>
              <button
                onClick={() => handlePlayModelAudio()}
                className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Bấm nghe âm thanh</span>
              </button>
            </div>

            <p className="text-xs text-slate-700">
              Hãy bấm nghe âm thanh mẫu và chọn đúng từ đang được phát âm:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {currentDrill.items.slice(0, 4).map((it, oIdx) => {
                const isSelected = listeningQuizAnswer === it.word;
                const isCorrect = it.word === currentItem.word;
                let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300';

                if (showQuizResult) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-blue-100 border-blue-500 text-blue-900 font-bold';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => {
                      setListeningQuizAnswer(it.word);
                      setShowQuizResult(true);
                    }}
                    className={`p-3 rounded-xl border text-center text-xs sm:text-sm font-semibold transition-all cursor-pointer ${btnStyle}`}
                  >
                    <div>{it.word}</div>
                    <div className="text-[10px] text-slate-500 font-normal">{it.tone}</div>
                  </button>
                );
              })}
            </div>

            {showQuizResult && (
              <div className="text-xs font-semibold p-2.5 rounded-lg flex items-center gap-1.5 bg-white border border-slate-200">
                {listeningQuizAnswer === currentItem.word ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Chính xác! Bạn đã nhận diện đúng thanh điệu của từ "{currentItem.word}".
                  </span>
                ) : (
                  <span className="text-rose-700">
                    Chưa chính xác. Âm vừa phát là "{currentItem.word}" ({currentItem.tone}).
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Self-Assessment Rubric */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Bảng tự đánh giá phát âm (Self-assessment Rubric)
              </span>
              <span className="text-[11px] text-slate-500">Tự tích chọn khi hoàn thành nhắc lại</span>
            </div>

            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkedCriteria.tonePitch}
                  onChange={(e) =>
                    setCheckedCriteria((p) => ({ ...p, tonePitch: e.target.checked }))
                  }
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <span className="text-slate-800">
                  <strong>Cao độ thanh điệu:</strong> Tôi đã phát âm đúng đường cong cao độ (ngang, vút lên, trầm xuống, uốn móc, ngắt dứt khoát)?
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkedCriteria.vowelMouth}
                  onChange={(e) =>
                    setCheckedCriteria((p) => ({ ...p, vowelMouth: e.target.checked }))
                  }
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <span className="text-slate-800">
                  <strong>Khẩu hình miệng & Độ mở nguyên âm:</strong> Miệng mở đủ độ rộng, không bị nuốt âm giữa chừng.
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkedCriteria.finalConsonant}
                  onChange={(e) =>
                    setCheckedCriteria((p) => ({ ...p, finalConsonant: e.target.checked }))
                  }
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <span className="text-slate-800">
                  <strong>Phụ âm cuối / Ngắt hơi:</strong> Điểm dừng hơi ở cuối âm rõ ràng và dứt khoát.
                </span>
              </label>
            </div>
          </div>

          {/* Link to AI Assistant Roleplay */}
          {onNavigate && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-sm">Muốn luyện hội thoại tình huống thực tế?</h4>
                <p className="text-xs text-slate-300">
                  Thực hành đối đáp bằng văn bản cùng Trợ lý học tiếng Việt theo các kịch bản gọi món, mua sắm.
                </p>
              </div>

              <button
                onClick={() => onNavigate('ai-tutor')}
                className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Luyện hội thoại với Trợ lý AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
