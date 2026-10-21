import React, { useState, useMemo } from 'react';
import {
  Search,
  Layers,
  BookOpen,
  Bookmark,
  Volume2,
  Check,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  Info,
} from 'lucide-react';
import { VocabularyItem, LearnerProfile } from '../types';
import { DICTIONARY_DATABASE } from '../data/dictionaryData';
import { speechService } from '../services/speechService';
import { storageService } from '../services/storageService';

interface DictionaryScreenProps {
  profile: LearnerProfile;
  onUpdateProfile: (profile: LearnerProfile) => void;
}

type DictionaryViewMode = 'search' | 'flashcards';

export const DictionaryScreen: React.FC<DictionaryScreenProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const [viewMode, setViewMode] = useState<DictionaryViewMode>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  // Flashcards state
  const [flashcardFilter, setFlashcardFilter] = useState<'all' | 'saved'>('all');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(DICTIONARY_DATABASE.map((d) => d.category)));
    return ['Tất cả', ...cats];
  }, []);

  // Normalize string for diacritic-insensitive search
  const normalize = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  const filteredWords = useMemo(() => {
    return DICTIONARY_DATABASE.filter((item) => {
      const matchCategory =
        selectedCategory === 'Tất cả' || item.category === selectedCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const normQ = normalize(q);

      const viMatch =
        item.vietnamese.toLowerCase().includes(q) ||
        normalize(item.vietnamese).includes(normQ);
      const enMatch = item.english.toLowerCase().includes(q);
      const ipaMatch = item.ipa.toLowerCase().includes(q);

      return viMatch || enMatch || ipaMatch;
    });
  }, [searchQuery, selectedCategory]);

  // Flashcards pool
  const flashcardDeck = useMemo(() => {
    if (flashcardFilter === 'saved') {
      const savedItems = DICTIONARY_DATABASE.filter((d) =>
        profile.savedVocabIds.includes(d.id)
      );
      return savedItems.length > 0 ? savedItems : DICTIONARY_DATABASE;
    }
    return DICTIONARY_DATABASE;
  }, [flashcardFilter, profile.savedVocabIds]);

  const currentFlashcard =
    flashcardDeck[currentCardIndex] || flashcardDeck[0];

  const handlePlayAudio = (text: string, id: string) => {
    setPlayingAudioId(id);
    speechService.speak(
      text,
      0.85,
      () => setPlayingAudioId(null),
      () => setPlayingAudioId(null)
    );
  };

  const handleToggleSave = (vocabId: string) => {
    const { profile: updated } = storageService.toggleSaveVocab(vocabId);
    onUpdateProfile(updated);
  };

  const handleToggleMastered = (vocabId: string) => {
    const { profile: updated } = storageService.toggleMasteredVocab(vocabId);
    onUpdateProfile(updated);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcardDeck.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(
      (prev) => (prev - 1 + flashcardDeck.length) % flashcardDeck.length
    );
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-amber-800/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Kho từ vựng & Thẻ nhớ tương tác</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Từ điển & Flashcards
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tra cứu từ ngữ chuẩn xác với phiên âm IPA, dấu thanh, ví dụ thực tế và
            chế độ luyện thẻ Flashcards ghi nhớ từ vựng hiệu quả.
          </p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setViewMode('search')}
          className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            viewMode === 'search'
              ? 'border-amber-600 text-amber-900 bg-amber-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Tra cứu từ điển ({filteredWords.length} từ)</span>
        </button>

        <button
          onClick={() => {
            setViewMode('flashcards');
            setIsFlipped(false);
          }}
          className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            viewMode === 'flashcards'
              ? 'border-amber-600 text-amber-900 bg-amber-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Luyện thẻ Flashcards ({flashcardDeck.length} thẻ)</span>
        </button>
      </div>

      {/* MODE 1: SEARCH & BROWSE */}
      {viewMode === 'search' && (
        <div className="space-y-6">
          {/* Search bar & Category filter */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bằng tiếng Việt có dấu, không dấu hoặc tiếng Anh (ví dụ: pho, cam on, xin chao, bill)..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Chủ đề:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          {filteredWords.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-2">
              <Search className="w-10 h-10 mx-auto text-slate-300" />
              <h3 className="text-base font-bold text-slate-800">
                Không tìm thấy từ vựng phù hợp
              </h3>
              <p className="text-xs text-slate-700 max-w-sm mx-auto">
                Hãy thử tìm kiếm bằng từ không dấu hoặc gõ từ tiếng Anh tương đương.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWords.map((vocab) => {
                const isSaved = profile.savedVocabIds.includes(vocab.id);
                const isMastered = profile.masteredVocabIds.includes(vocab.id);
                const isPlaying = playingAudioId === vocab.id;

                return (
                  <div
                    key={vocab.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-slate-900">
                              {vocab.vietnamese}
                            </h3>
                            <span className="text-xs font-mono text-slate-700">
                              {vocab.ipa}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-amber-700">
                            {vocab.english}
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handlePlayAudio(vocab.vietnamese, vocab.id)}
                            disabled={isPlaying}
                            className={`p-2 rounded-xl transition-all cursor-pointer ${
                              isPlaying
                                ? 'bg-amber-600 text-white animate-pulse'
                                : 'bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-amber-800'
                            }`}
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleToggleSave(vocab.id)}
                            className={`p-2 rounded-xl transition-all cursor-pointer ${
                              isSaved
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                            }`}
                            title={isSaved ? 'Đã lưu' : 'Lưu từ'}
                          >
                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 text-xs space-y-1">
                        <div className="flex items-center justify-between text-slate-700">
                          <span>{vocab.tone}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {vocab.category}
                          </span>
                        </div>
                        <div className="text-slate-800 font-medium pt-1">
                          "{vocab.exampleVi}"
                        </div>
                        <div className="text-slate-700 italic">
                          "{vocab.exampleEn}"
                        </div>
                        {vocab.notes && (
                          <div className="text-[11px] text-amber-800 bg-amber-50/60 p-1.5 rounded-lg border border-amber-200/50 mt-1">
                            💡 {vocab.notes}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button
                        onClick={() => handleToggleMastered(vocab.id)}
                        className={`flex items-center gap-1 font-semibold cursor-pointer ${
                          isMastered ? 'text-emerald-700' : 'text-slate-700 hover:text-slate-700'
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-600' : ''}`} />
                        <span>{isMastered ? 'Đã thuộc từ này' : 'Chưa thuộc'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* MODE 2: INTERACTIVE FLASHCARDS */}
      {viewMode === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Deck selector & Progress */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setFlashcardFilter('all');
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  flashcardFilter === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                Tất cả từ ({DICTIONARY_DATABASE.length})
              </button>

              <button
                onClick={() => {
                  setFlashcardFilter('saved');
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  flashcardFilter === 'saved'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                Từ đã lưu ({profile.savedVocabIds.length})
              </button>
            </div>

            <span className="text-xs font-bold text-slate-700">
              Thẻ {currentCardIndex + 1} / {flashcardDeck.length}
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[340px] rounded-3xl bg-white border-2 border-amber-200 shadow-md p-8 flex flex-col justify-between text-center transition-all hover:shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-slate-700">
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold">
                {currentFlashcard.category}
              </span>
              <span className="flex items-center gap-1 text-slate-700">
                <RotateCw className="w-3.5 h-3.5" />
                Nhấp thẻ để lật
              </span>
            </div>

            {/* Front vs Back */}
            {!isFlipped ? (
              <div className="space-y-4 my-auto">
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900">
                  {currentFlashcard.vietnamese}
                </div>
                <div className="text-base font-mono text-slate-700">
                  {currentFlashcard.ipa}
                </div>
                <div className="text-xs text-amber-800 font-semibold">
                  Thanh: {currentFlashcard.tone}
                </div>
              </div>
            ) : (
              <div className="space-y-4 my-auto animate-fade-in">
                <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-800">
                  {currentFlashcard.english}
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
                  <div className="font-semibold">"{currentFlashcard.exampleVi}"</div>
                  <div className="text-slate-700 italic">"{currentFlashcard.exampleEn}"</div>
                </div>
                {currentFlashcard.notes && (
                  <div className="text-xs text-amber-900 bg-amber-50 p-2 rounded-lg">
                    💡 {currentFlashcard.notes}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayAudio(currentFlashcard.vietnamese, currentFlashcard.id);
                }}
                className="p-2.5 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 flex items-center gap-1.5 text-xs font-semibold"
              >
                <Volume2 className="w-4 h-4" />
                <span>Phát âm</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleSave(currentFlashcard.id);
                }}
                className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-600 text-xs font-medium flex items-center gap-1.5"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    profile.savedVocabIds.includes(currentFlashcard.id)
                      ? 'fill-amber-600 text-amber-600'
                      : ''
                  }`}
                />
                <span>
                  {profile.savedVocabIds.includes(currentFlashcard.id)
                    ? 'Đã lưu'
                    : 'Lưu từ'}
                </span>
              </button>
            </div>
          </div>

          {/* Flashcard Action Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevCard}
              className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-xs cursor-pointer"
              title="Thẻ trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  handleToggleMastered(currentFlashcard.id);
                  handleNextCard();
                }}
                className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Đã thuộc từ này</span>
              </button>

              <button
                onClick={handleNextCard}
                className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm cursor-pointer"
              >
                Cần ôn lại
              </button>
            </div>

            <button
              onClick={handleNextCard}
              className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-xs cursor-pointer"
              title="Thẻ tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
