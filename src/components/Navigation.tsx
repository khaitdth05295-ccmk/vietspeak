import React, { useState } from 'react';
import {
  Home,
  Map,
  BookOpen,
  Volume2,
  Bot,
  Layers,
  Award,
  Globe2,
  Info,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { Screen, LearnerProfile } from '../types';
import { VietSpeakLogo } from './VietSpeakLogo';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  profile?: LearnerProfile;
}

interface NavItem {
  id: Screen;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Trang chủ', shortLabel: 'Trang chủ', icon: Home },
  { id: 'roadmap', label: 'Lộ trình học', shortLabel: 'Lộ trình', icon: Map },
  { id: 'lessons', label: 'Bài học', shortLabel: 'Bài học', icon: BookOpen },
  { id: 'speaking-studio', label: 'Luyện nói', shortLabel: 'Luyện nói', icon: Volume2 },
  { id: 'ai-tutor', label: 'Trợ lý học tiếng Việt', shortLabel: 'Trợ lý tiếng Việt', icon: Bot },
  { id: 'dictionary', label: 'Từ điển & Thẻ nhớ', shortLabel: 'Từ điển', icon: Layers },
  { id: 'assessment', label: 'Kiểm tra & Tiến độ', shortLabel: 'Tiến độ', icon: Award },
  { id: 'culture', label: 'Văn hóa giao tiếp', shortLabel: 'Văn hóa', icon: Globe2 },
  { id: 'about', label: 'Giới thiệu', shortLabel: 'Giới thiệu', icon: Info },
  { id: 'references', label: 'Nguồn tham khảo', shortLabel: 'Tham khảo', icon: ExternalLink },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (screen: Screen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            onClick={() => handleSelect('home')}
            className="cursor-pointer group shrink-0"
            title="VietSpeak B05 - Trang chủ"
          >
            <VietSpeakLogo size="sm" showText={true} />
          </div>

          {/* Desktop Navigation Links - Compact & Clean */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Medium Screen Navigation Links */}
          <div className="hidden md:flex xl:hidden items-center gap-1">
            {NAV_ITEMS.slice(0, 6).map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  title={item.label}
                  className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white px-4 py-3 space-y-1 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
