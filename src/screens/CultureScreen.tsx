import React, { useState } from 'react';
import {
  Globe2,
  Users,
  Utensils,
  Home,
  MessageCircle,
  MapPin,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { CULTURE_ARTICLES } from '../data/cultureData';

export const CultureScreen: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(CULTURE_ARTICLES[0].id);

  const currentArticle =
    CULTURE_ARTICLES.find((a) => a.id === selectedArticleId) || CULTURE_ARTICLES[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-800/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Văn hóa giao tiếp & Phương ngữ 3 miền</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Văn hóa & Nghệ thuật giao tiếp tiếng Việt
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Học một ngôn ngữ là học cả một nền văn hóa. Nắm vững nghệ thuật xưng
            hô kính trên nhường dưới, phong tục bàn ăn và sự khác biệt phương ngữ
            giúp bạn nói chuyện tự nhiên và chạm đến trái tim người bản xứ.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Navigation: Topics list */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700 px-2 pb-1">
            Chủ đề văn hóa thực tiễn
          </div>
          {CULTURE_ARTICLES.map((article) => {
            const isSelected = selectedArticleId === article.id;
            return (
              <button
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-700">{article.readTime}</span>
                </div>
                <div className="text-sm font-display font-bold leading-snug line-clamp-2">
                  {article.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Content View */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              {currentArticle.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
              {currentArticle.title}
            </h2>
            <p className="text-sm text-slate-700 italic">{currentArticle.summary}</p>
          </div>

          {/* Article sections */}
          <div className="space-y-6 text-sm sm:text-base text-slate-800 leading-relaxed">
            {currentArticle.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{sec.heading}</span>
                </h3>
                <p>{sec.content}</p>

                {sec.examples && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {sec.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1"
                      >
                        <div className="font-bold text-emerald-800 text-sm">
                          {ex.vi}
                        </div>
                        <div className="text-slate-700">{ex.note}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Regional Table if present */}
            {currentArticle.regionalTable && (
              <div className="pt-4 space-y-4">
                <h3 className="text-lg font-display font-bold text-slate-900">
                  Bảng đối chiếu phương ngữ Bắc — Trung — Nam
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[11px]">
                      <tr>
                        <th className="p-3.5">Khái niệm</th>
                        <th className="p-3.5 bg-blue-50/60 text-blue-900">Miền Bắc</th>
                        <th className="p-3.5 bg-amber-50/60 text-amber-900">Miền Trung</th>
                        <th className="p-3.5 bg-emerald-50/60 text-emerald-900">Miền Nam</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {currentArticle.regionalTable.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.concept}</td>
                          <td className="p-3.5 text-blue-900">{row.north}</td>
                          <td className="p-3.5 text-amber-900">{row.central}</td>
                          <td className="p-3.5 text-emerald-900 font-medium">{row.south}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
