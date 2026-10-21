import React from 'react';
import { ExternalLink, BookOpen, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { REFERENCES_DATABASE } from '../data/referencesData';

export const ReferencesScreen: React.FC = () => {
  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-800/40 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Tài liệu học thuật & Công nghệ nguồn</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
          Nguồn tham khảo chính thức
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          VietSpeak được xây dựng dựa trên các nguồn tư liệu ngôn ngữ học đối chiếu,
          từ điển phát âm bản xứ quốc tế và tài liệu kỹ thuật chính thức từ Google AI.
        </p>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {REFERENCES_DATABASE.map((ref, idx) => (
          <div
            key={ref.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {ref.category}
                </span>
                <span className="text-xs text-slate-700 font-mono">
                  #{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-slate-900 leading-snug">
                  {ref.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {ref.organization}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {ref.descriptionVi}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vai trò tham chiếu trong VietSpeak:</span>
                </div>
                <p>{ref.relevance}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-700 truncate max-w-[200px]">
                {ref.url.replace('https://', '')}
              </span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 transition-colors"
              >
                <span>Mở liên kết nguồn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
