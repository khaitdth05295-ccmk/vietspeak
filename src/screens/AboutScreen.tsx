import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  MessageSquare,
  Volume2,
  Layers,
  CheckCircle2,
  AlertCircle,
  Save,
} from 'lucide-react';
import { LearnerProfile } from '../types';
import { storageService } from '../services/storageService';
import { VietSpeakLogo } from '../components/VietSpeakLogo';

interface AboutScreenProps {
  profile: LearnerProfile;
  onUpdateProfile: (profile: LearnerProfile) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const [fullName, setFullName] = useState(profile.fullName || 'Trần Đức Khải');
  const [studentId, setStudentId] = useState(profile.studentId || 'TH05295');
  const [group, setGroup] = useState(profile.group || 'Group 2 — B05');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleSaveStudentInfo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setToastType('error');
      setToastMessage('Vui lòng nhập họ và tên sinh viên.');
      return;
    }

    const updated = storageService.updateStudentInfo(fullName, studentId, group);
    onUpdateProfile(updated);

    setToastType('success');
    setToastMessage('Đã lưu thông tin sinh viên thành công!');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-900/40 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIETSPEAK · DỰ ÁN B05</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-white/15 w-fit">
            <VietSpeakLogo size="sm" showText={true} textColor="text-white" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
          Tự tin nói tiếng Việt, từng ngày một.
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          VietSpeak là nền tảng học tiếng Việt dành cho người nước ngoài, giúp người học phát triển vốn từ vựng, hiểu cách xây dựng câu và thực hành giao tiếp qua một lộ trình học tập có hệ thống.
        </p>
      </section>

      {/* Section: Về VietSpeak */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
        <h2 className="text-xl font-display font-bold text-slate-900">
          Về VietSpeak
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          VietSpeak đưa người học từ những kiến thức nền tảng đến các tình huống giao tiếp thực tế. Thông qua bài học theo chủ đề, hoạt động tương tác, luyện hội thoại và ôn tập, người học có thể từng bước vận dụng tiếng Việt trong đời sống hằng ngày.
        </p>
      </section>

      {/* Section: Khám phá VietSpeak (4 Compact Highlights) */}
      <section className="space-y-3">
        <h2 className="text-xl font-display font-bold text-slate-900">
          Khám phá VietSpeak
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1. Lộ trình học xuyên suốt */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Lộ trình học xuyên suốt
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chuỗi 22 bài học liên tục theo 5 phần kiến thức gắn kết, giúp người học tiếp thu mạch lạc từ ngữ âm cơ bản đến đàm thoại đời thường.
            </p>
          </div>

          {/* 2. Bài học và bài tập tương tác */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              <Volume2 className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Bài học và bài tập tương tác
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Giải thích ngữ pháp ngắn gọn, ví dụ đối chiếu song ngữ, giọng đọc mẫu tham khảo (TTS) và câu hỏi trắc nghiệm có giải thích chi tiết.
            </p>
          </div>

          {/* 3. Luyện hội thoại theo tình huống */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Luyện hội thoại theo tình huống
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Đóng vai các tình huống giao tiếp đời thực (gọi món, mua sắm, hỏi đường) và nhận sửa câu tiếng Việt tự nhiên từng bước.
            </p>
          </div>

          {/* 4. Từ điển và ôn tập kiến thức */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Từ điển và ôn tập kiến thức
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Từ điển tìm kiếm không dấu linh hoạt, thẻ flashcards ghi nhớ từ vựng và lưu lại những câu cần ôn tập để củng cố phản xạ.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Thông tin đề tài */}
      <section className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
        <h2 className="text-lg font-display font-bold text-slate-900">
          Thông tin đề tài
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Tên ứng dụng:</span>
            <div className="font-bold text-slate-900 text-sm">VietSpeak</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Đề tài thực tập / Mã nhóm:</span>
            <div className="font-bold text-slate-900">Group 2 — B05 (Luyện nói tiếng Việt cho người nước ngoài)</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Chương trình thực hiện:</span>
            <div className="font-bold text-slate-900">Chương trình Thực tập sinh Đợt 15</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Đơn vị phối hợp:</span>
            <div className="font-bold text-slate-900">FPT Polytechnic và IMTA TECH</div>
          </div>
        </div>
      </section>

      {/* Section: Thông tin sinh viên thực hiện */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-lg font-display font-bold text-slate-900">
            Thông tin sinh viên thực hiện
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Thông tin sinh viên thực hiện dự án trong khuôn khổ Chương trình Thực tập sinh Đợt 15.
          </p>
        </div>

        {/* Thẻ tóm tắt thông tin sinh viên */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Họ và tên:</span>
            <div className="font-bold text-slate-900 text-sm">{fullName || 'Trần Đức Khải'}</div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Mã số sinh viên (MSSV):</span>
            <div className="font-bold text-emerald-700 text-sm font-mono">{studentId || 'TH05295'}</div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-0.5">
            <span className="text-slate-500 font-medium">Nhóm thực hiện:</span>
            <div className="font-bold text-slate-900 text-sm">{group || 'Group 2 — B05'}</div>
          </div>
        </div>

        {toastMessage && (
          <div
            className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
              toastType === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border border-rose-200 text-rose-800'
            }`}
          >
            {toastType === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{toastMessage}</span>
          </div>
        )}

        <form onSubmit={handleSaveStudentInfo} className="space-y-4 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Họ và tên sinh viên */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Họ và tên sinh viên <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nhập họ và tên đầy đủ"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Mã số sinh viên (MSSV) */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Mã số sinh viên (MSSV)
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Nhập mã số sinh viên"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Nhóm thực hiện */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Nhóm thực hiện
            </label>
            <input
              type="text"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Lưu thông tin</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
