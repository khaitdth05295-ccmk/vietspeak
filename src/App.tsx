import React, { useState, useEffect } from 'react';
import { Screen, LearnerProfile } from './types';
import { storageService, DEFAULT_PROFILE } from './services/storageService';
import { Navigation } from './components/Navigation';
import { VietSpeakLogo } from './components/VietSpeakLogo';
import { HomeScreen } from './screens/HomeScreen';
import { RoadmapScreen } from './screens/RoadmapScreen';
import { LessonsScreen } from './screens/LessonsScreen';
import { SpeakingStudioScreen } from './screens/SpeakingStudioScreen';
import { AiTutorScreen } from './screens/AiTutorScreen';
import { DictionaryScreen } from './screens/DictionaryScreen';
import { AssessmentScreen } from './screens/AssessmentScreen';
import { CultureScreen } from './screens/CultureScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ReferencesScreen } from './screens/ReferencesScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [profile, setProfile] = useState<LearnerProfile>(DEFAULT_PROFILE);

  // Load saved profile on mount
  useEffect(() => {
    const loaded = storageService.getProfile();
    setProfile(loaded);
  }, []);

  const handleUpdateProfile = (updated: LearnerProfile) => {
    setProfile(updated);
  };

  const handleSelectLesson = (lessonId: number) => {
    setCurrentLessonId(lessonId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navigation
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        profile={profile}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={setCurrentScreen}
            profile={profile}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentScreen === 'roadmap' && (
          <RoadmapScreen
            onNavigate={setCurrentScreen}
            profile={profile}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentScreen === 'lessons' && (
          <LessonsScreen
            currentLessonId={currentLessonId}
            onSelectLesson={handleSelectLesson}
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'speaking-studio' && <SpeakingStudioScreen />}

        {currentScreen === 'ai-tutor' && (
          <AiTutorScreen profile={profile} />
        )}

        {currentScreen === 'dictionary' && (
          <DictionaryScreen
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {currentScreen === 'assessment' && (
          <AssessmentScreen
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onNavigate={setCurrentScreen}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentScreen === 'culture' && <CultureScreen />}

        {currentScreen === 'about' && (
          <AboutScreen
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {currentScreen === 'references' && <ReferencesScreen />}
      </main>

      {/* Educational Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <VietSpeakLogo size="sm" showText={true} />
              <span className="text-xs text-slate-700 hidden sm:inline border-l border-slate-200 pl-3">
                Luyện nói tiếng Việt cho người nước ngoài
              </span>
            </div>

            <div className="text-xs text-slate-700">
              Đề tài: <strong>Group 2 — B05: Luyện nói tiếng Việt cho người nước ngoài</strong>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentScreen('home')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Trang chủ
            </button>
            <button
              onClick={() => setCurrentScreen('roadmap')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Lộ trình học
            </button>
            <button
              onClick={() => setCurrentScreen('lessons')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Bài học
            </button>
            <button
              onClick={() => setCurrentScreen('speaking-studio')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Luyện nói
            </button>
            <button
              onClick={() => setCurrentScreen('ai-tutor')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Trợ lý học tiếng Việt
            </button>
            <button
              onClick={() => setCurrentScreen('dictionary')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Từ điển & Flashcards
            </button>
            <button
              onClick={() => setCurrentScreen('assessment')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Kiểm tra & Tiến độ
            </button>
            <button
              onClick={() => setCurrentScreen('culture')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Văn hóa giao tiếp
            </button>
            <button
              onClick={() => setCurrentScreen('about')}
              className="hover:text-emerald-700 cursor-pointer font-semibold text-slate-800"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => setCurrentScreen('references')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Nguồn tham khảo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
