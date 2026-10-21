import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  BookMarked,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Trash2,
  RefreshCw,
  BookmarkPlus,
  Utensils,
  ShoppingBag,
  Compass,
  Building,
} from 'lucide-react';
import { LearnerProfile, SavedError } from '../types';
import { geminiService } from '../services/geminiService';
import { storageService } from '../services/storageService';

interface AiTutorScreenProps {
  profile: LearnerProfile;
}

type TutorTab =
  | 'correction'
  | 'vocabulary'
  | 'conversation'
  | 'roleplay'
  | 'generator'
  | 'notebook';

export const AiTutorScreen: React.FC<AiTutorScreenProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<TutorTab>('correction');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Correction result
  const [correctionResult, setCorrectionResult] = useState<string | null>(null);
  const [lastCorrectedInput, setLastCorrectedInput] = useState('');

  // Vocabulary result
  const [vocabResult, setVocabResult] = useState<string | null>(null);

  // Chat / Guided conversation history
  const [conversationHistory, setConversationHistory] = useState<
    { role: 'user' | 'assistant'; content: string; timestamp: string }[]
  >([
    {
      role: 'assistant',
      content:
        'Xin chào bạn! Tôi là Trợ lý học tiếng Việt VietSpeak. Hôm nay bạn cảm thấy thế nào? Bạn đã ăn cơm chưa?',
      timestamp: '10:00',
    },
  ]);

  // Roleplay
  const [roleplayScenario, setRoleplayScenario] = useState('Nhà hàng - Gọi món và thanh toán');
  const [roleplayHistory, setRoleplayHistory] = useState<
    { role: 'user' | 'assistant'; content: string; timestamp: string }[]
  >([
    {
      role: 'assistant',
      content:
        'Dạ em chào anh/chị ạ! Quán em hôm nay có phở bò tái nạm, bún chả và nem rán rất thơm ngon. Anh/chị muốn dùng món gì ạ?',
      timestamp: '10:00',
    },
  ]);

  // Generator result
  const [generatorTopic, setGeneratorTopic] = useState('Chào hỏi và mua sắm');
  const [generatedExercises, setGeneratedExercises] = useState<string | null>(null);

  // Error Notebook state
  const [savedErrors, setSavedErrors] = useState<SavedError[]>([]);
  const [savedSuccessToast, setSavedSuccessToast] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSavedErrors(storageService.getSavedErrors());
  }, []);

  useEffect(() => {
    if (activeTab === 'conversation' || activeTab === 'roleplay') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversationHistory, roleplayHistory, activeTab]);

  // Handle Sentence Correction
  const handleRunCorrection = async (textToCorrect?: string) => {
    const text = textToCorrect || inputText;
    if (!text.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setLastCorrectedInput(text);

    const res = await geminiService.askTutor({
      mode: 'sentence_correction',
      input: text,
    });

    setIsLoading(false);
    if (res.message) {
      setCorrectionResult(res.message);
    } else {
      setErrorMessage(res.error || 'Không nhận được phân tích từ hệ thống.');
    }
  };

  // Handle Vocabulary Assistant
  const handleRunVocabulary = async (textToQuery?: string) => {
    const text = textToQuery || inputText;
    if (!text.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);

    const res = await geminiService.askTutor({
      mode: 'vocabulary_assistant',
      input: text,
    });

    setIsLoading(false);
    if (res.message) {
      setVocabResult(res.message);
    } else {
      setErrorMessage(res.error || 'Không thể tra từ vựng lúc này.');
    }
  };

  // Handle Send Chat in Guided Conversation
  const handleSendConversation = async (prefilled?: string) => {
    const msg = prefilled || inputText;
    if (!msg.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newHistory = [
      ...conversationHistory,
      { role: 'user' as const, content: msg, timestamp: time },
    ];
    setConversationHistory(newHistory);
    setInputText('');
    setIsLoading(true);
    setErrorMessage(null);

    const res = await geminiService.askTutor({
      mode: 'guided_conversation',
      input: msg,
      history: newHistory.slice(-6).map((m) => ({ role: m.role, content: m.content })),
    });

    setIsLoading(false);
    if (res.message) {
      setConversationHistory([
        ...newHistory,
        {
          role: 'assistant' as const,
          content: res.message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } else {
      setErrorMessage(res.error || 'Lỗi gửi tin nhắn.');
    }
  };

  // Handle Send Roleplay
  const handleSendRoleplay = async (prefilled?: string) => {
    const msg = prefilled || inputText;
    if (!msg.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newHistory = [
      ...roleplayHistory,
      { role: 'user' as const, content: msg, timestamp: time },
    ];
    setRoleplayHistory(newHistory);
    setInputText('');
    setIsLoading(true);
    setErrorMessage(null);

    const res = await geminiService.askTutor({
      mode: 'roleplay',
      input: msg,
      scenario: roleplayScenario,
      history: newHistory.slice(-6).map((m) => ({ role: m.role, content: m.content })),
    });

    setIsLoading(false);
    if (res.message) {
      setRoleplayHistory([
        ...newHistory,
        {
          role: 'assistant' as const,
          content: res.message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } else {
      setErrorMessage(res.error || 'Lỗi kết nối đối thoại.');
    }
  };

  // Handle Exercise Generator
  const handleGenerateExercises = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const res = await geminiService.askTutor({
      mode: 'exercise_generation',
      input: generatorTopic,
    });

    setIsLoading(false);
    if (res.message) {
      setGeneratedExercises(res.message);
    } else {
      setErrorMessage(res.error || 'Không thể tạo bài tập lúc này.');
    }
  };

  // Save current correction to Error Notebook
  const handleSaveToNotebook = () => {
    if (!lastCorrectedInput || !correctionResult) return;
    storageService.saveError(lastCorrectedInput, 'Đã sửa qua Trợ lý tiếng Việt', correctionResult);
    setSavedErrors(storageService.getSavedErrors());
    setSavedSuccessToast(true);
    setTimeout(() => setSavedSuccessToast(false), 3000);
  };

  const handleToggleErrorMastered = (id: string) => {
    const updated = storageService.toggleErrorMastered(id);
    setSavedErrors(updated);
  };

  const handleDeleteError = (id: string) => {
    const updated = storageService.deleteError(id);
    setSavedErrors(updated);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-800/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Bot className="w-3.5 h-3.5" />
            <span>Trợ lý học tiếng Việt</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Trợ lý học tiếng Việt tương tác
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Đồng hành cùng bạn trên lộ trình: Sửa câu ngữ pháp, giải thích từ ngữ theo vùng miền,
            luyện hội thoại phản xạ và đóng vai các tình huống đời sống.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto space-x-2 pb-1">
        {[
          { id: 'correction', label: '1. Sửa câu tiếng Việt', icon: CheckCircle2 },
          { id: 'vocabulary', label: '2. Giải thích từ vựng', icon: BookMarked },
          { id: 'conversation', label: '3. Luyện hội thoại', icon: MessageSquare },
          { id: 'roleplay', label: '4. Đóng vai tình huống', icon: Utensils },
          { id: 'generator', label: '5. Bài tập gợi ý', icon: Sparkles },
          { id: 'notebook', label: `Sổ tay lỗi sai (${savedErrors.length})`, icon: BookmarkPlus },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as TutorTab);
                setErrorMessage(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-50 text-blue-800 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Error feedback */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setErrorMessage(null)}
            className="text-xs font-bold text-rose-700 hover:underline cursor-pointer"
          >
            Đóng
          </button>
        </div>
      )}

      {/* TAB 1: SENTENCE CORRECTION */}
      {activeTab === 'correction' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Sửa câu tiếng Việt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Nhập bất kỳ câu tiếng Việt nào bạn muốn kiểm tra. Trợ lý AI sẽ phân tích
              lỗi thanh điệu, trật tự từ và đề xuất cách diễn đạt chuẩn của người Việt.
            </p>

            {/* Quick Test Case Button matching Section 13 */}
            <div className="flex flex-wrap items-center gap-2 pt-3">
              <span className="text-xs font-bold text-slate-700">Thử nghiệm mẫu:</span>
              <button
                onClick={() => {
                  setInputText('Hôm qua tôi đi chợ và mua nhiều trái cây.');
                  handleRunCorrection('Hôm qua tôi đi chợ và mua nhiều trái cây.');
                }}
                className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200 cursor-pointer"
              >
                “Hôm qua tôi đi chợ và mua nhiều trái cây.”
              </button>
              <button
                onClick={() => {
                  setInputText('Xin chào, tôi tên Alex là.');
                  handleRunCorrection('Xin chào, tôi tên Alex là.');
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                “Xin chào, tôi tên Alex là.”
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Câu tiếng Việt của bạn:
            </label>
            <div className="flex gap-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={3}
                placeholder="Ví dụ: Hôm qua tôi đi chợ mua nhiều trái cây..."
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => handleRunCorrection()}
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isLoading ? 'Đang phân tích...' : 'Kiểm tra câu này'}</span>
            </button>
          </div>

          {/* Result view */}
          {correctionResult && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-sm text-slate-900">
                    Phân tích chi tiết từ Trợ lý học tiếng Việt
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveToNotebook}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 cursor-pointer"
                  >
                    <BookmarkPlus className="w-4 h-4" />
                    <span>Lưu vào sổ tay lỗi sai</span>
                  </button>
                </div>
              </div>

              {savedSuccessToast && (
                <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Đã lưu vào Sổ tay lỗi sai thành công!</span>
                </div>
              )}

              <div className="prose prose-slate max-w-none text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-slate-800">
                {correctionResult}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: VOCABULARY ASSISTANT */}
      {activeTab === 'vocabulary' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Giải nghĩa từ vựng
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Hỏi bất kỳ từ ngữ nào: Trợ lý AI sẽ giải thích định nghĩa, phiên âm, từ
              loại, ngữ cảnh trang trọng/thân mật và so sánh cách dùng giữa ba miền.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunVocabulary()}
                placeholder="Nhập từ cần tra (ví dụ: bún chả, hoa quả, dạ vâng, bắp)..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleRunVocabulary()}
                disabled={isLoading || !inputText.trim()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-xs sm:text-sm shrink-0 cursor-pointer shadow-xs"
              >
                {isLoading ? 'Đang tra...' : 'Tra cứu'}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
              <span>Gợi ý:</span>
              {['phở tái', 'hoa quả', 'cốc / ly', 'mặc cả', 'dạ thưa'].map((word) => (
                <button
                  key={word}
                  onClick={() => {
                    setInputText(word);
                    handleRunVocabulary(word);
                  }}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {vocabResult && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <BookMarked className="w-4 h-4 text-blue-600" />
                <span>Giải nghĩa từ vựng</span>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-slate-800">
                {vocabResult}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: GUIDED CONVERSATION */}
      {activeTab === 'conversation' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Luyện hội thoại tương tác
              </h3>
              <p className="text-xs text-slate-600">
                Luyện trò chuyện tự nhiên cùng Trợ lý học tiếng Việt. Mỗi lượt sẽ hỏi một câu và gợi ý cách trả lời.
              </p>
            </div>
            <button
              onClick={() =>
                setConversationHistory([
                  {
                    role: 'assistant',
                    content:
                      'Xin chào bạn! Tôi là Trợ lý học tiếng Việt VietSpeak. Hôm nay bạn cảm thấy thế nào?',
                    timestamp: '10:00',
                  },
                ])
              }
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Bắt đầu lại</span>
            </button>
          </div>

          {/* Quick test case button matching Section 13 */}
          <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs text-blue-900 font-medium">
              💡 <strong>Thử nghiệm mẫu (Giới thiệu bản thân):</strong>
            </span>
            <button
              onClick={() =>
                handleSendConversation('Xin chào, tôi tên là Alex. Tôi đến từ Canada.')
              }
              className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
            >
              Gửi: “Xin chào, tôi tên là Alex. Tôi đến từ Canada.”
            </button>
          </div>

          {/* Chat message box */}
          <div className="h-96 overflow-y-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            {conversationHistory.map((msg, idx) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-slate-500">
                    <span className="font-bold">{isUser ? 'Bạn' : 'Trợ lý AI'}</span>
                    <span>·</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-xs ${
                      isUser
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
                <Bot className="w-4 h-4 animate-spin text-blue-600" />
                <span>Trợ lý AI đang phản hồi...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input form */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendConversation()}
              placeholder="Nhập câu trả lời bằng tiếng Việt của bạn..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleSendConversation()}
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: ROLEPLAY */}
      {activeTab === 'roleplay' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Đóng vai tình huống
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Thực hành đàm thoại với nhân vật AI theo từng kịch bản sinh động.
            </p>

            {/* Scenario pills */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                { name: 'Nhà hàng - Gọi món và thanh toán', icon: Utensils },
                { name: 'Mua sắm tại chợ & Mặc cả', icon: ShoppingBag },
                { name: 'Hỏi đường & Đi xe Grab', icon: Compass },
                { name: 'Khách sạn - Check in nhận phòng', icon: Building },
              ].map((sc) => {
                const Icon = sc.icon;
                return (
                  <button
                    key={sc.name}
                    onClick={() => {
                      setRoleplayScenario(sc.name);
                      setRoleplayHistory([
                        {
                          role: 'assistant',
                          content: `Chào mừng bạn đến với tình huống "${sc.name}"! Tôi đã sẵn sàng, xin mời bạn bắt đầu.`,
                          timestamp: '10:00',
                        },
                      ]);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      roleplayScenario === sc.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick test case button matching Section 13 */}
          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs text-amber-900 font-medium">
              💡 <strong>Thử nghiệm mẫu (Nhà hàng - Gọi món & hỏi giá):</strong>
            </span>
            <button
              onClick={() =>
                handleSendRoleplay(
                  'Em ơi, cho anh xem thực đơn. Món phở bò giá bao nhiêu một tô?'
                )
              }
              className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold cursor-pointer"
            >
              Gửi: “Em ơi cho anh xem thực đơn, món phở bò giá bao nhiêu?”
            </button>
          </div>

          {/* Roleplay Chat box */}
          <div className="h-96 overflow-y-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            {roleplayHistory.map((msg, idx) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-slate-500">
                    <span className="font-bold">
                      {isUser ? 'Khách hàng (Bạn)' : 'Nhân vật đối thoại'}
                    </span>
                    <span>·</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-xs ${
                      isUser
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="text-xs text-slate-500 italic p-2">
                Nhân vật đối thoại đang trả lời...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendRoleplay()}
              placeholder="Nhập câu thoại của bạn trong tình huống này..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSendRoleplay()}
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-semibold cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: EXERCISE GENERATOR */}
      {activeTab === 'generator' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Bài tập gợi ý
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Yêu cầu Trợ lý AI tạo các bài tập trắc nghiệm hoặc điền từ theo chủ đề bạn chọn để tự rèn luyện thêm.
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Chủ đề bài tập:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={generatorTopic}
                onChange={(e) => setGeneratorTopic(e.target.value)}
                placeholder="Ví dụ: Phân biệt thanh hỏi ngã, gọi món tại quán ăn..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleGenerateExercises}
                disabled={isLoading}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-xs sm:text-sm shrink-0 cursor-pointer shadow-xs"
              >
                {isLoading ? 'Đang tạo...' : 'Tạo 3 bài tập'}
              </button>
            </div>
          </div>

          {generatedExercises && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Bài tập gợi ý mới:</span>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-slate-800">
                {generatedExercises}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 6: ERROR NOTEBOOK */}
      {activeTab === 'notebook' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Sổ tay lỗi sai & Ôn tập (Error Notebook)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Lưu trữ các lỗi ngữ pháp hoặc dùng từ bạn đã mắc phải để xem lại và ghi nhớ.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {savedErrors.length} mục đã lưu
            </span>
          </div>

          {savedErrors.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <BookMarked className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-sm">Chưa có lỗi sai nào được lưu vào sổ tay.</p>
              <p className="text-xs">
                Khi sử dụng tính năng <strong>Sửa câu tiếng Việt</strong>, hãy bấm "Lưu vào sổ tay lỗi sai" để ghi chú tại đây.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedErrors.map((err) => (
                <div
                  key={err.id}
                  className={`p-5 rounded-2xl border transition-all space-y-3 ${
                    err.mastered
                      ? 'bg-emerald-50/30 border-emerald-200 opacity-80'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Ngày lưu: {err.date}
                      </span>
                      <div className="text-sm font-bold text-rose-700 pt-1">
                        ❌ Câu gốc của bạn: "{err.original}"
                      </div>
                      <div className="text-sm font-bold text-emerald-700 pt-0.5">
                        ✅ Câu sửa chuẩn: "{err.corrected}"
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleToggleErrorMastered(err.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                          err.mastered
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {err.mastered ? '✓ Đã hiểu' : 'Đánh dấu đã hiểu'}
                      </button>
                      <button
                        onClick={() => handleDeleteError(err.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                        title="Xóa khỏi sổ tay"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 leading-relaxed">
                    <strong>Giải thích chi tiết:</strong> {err.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
