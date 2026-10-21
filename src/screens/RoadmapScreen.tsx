import React from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Screen, LearnerProfile } from '../types';
import { CURRICULUM } from '../data/curriculumData';

interface RoadmapScreenProps {
  onNavigate: (screen: Screen) => void;
  profile: LearnerProfile;
  onSelectLesson: (lessonId: number) => void;
}

export const RoadmapScreen: React.FC<RoadmapScreenProps> = ({
  onNavigate,
  profile,
  onSelectLesson,
}) => {
  const completedCount = profile.completedLessonIds.length;
  const totalCount = CURRICULUM.length;
  const percent = Math.round((completedCount / totalCount) * 100);

  const handleOpenLesson = (lessonId: number) => {
    onSelectLesson(lessonId);
    onNavigate('lessons');
  };

  // Group chapters by 5 sequential parts
  const stages = [
    {
      stageNumber: 1,
      title: 'Phần 1: Làm quen với tiếng Việt',
      range: 'Bài 1 – 3',
      description: 'Giới thiệu về tiếng Việt, bảng chữ cái Quốc ngữ Latinh, nguyên âm, phụ âm và 6 thanh điệu kinh điển.',
    },
    {
      stageNumber: 2,
      title: 'Phần 2: Giao tiếp đầu tiên',
      range: 'Bài 4 – 5',
      description: 'Chào hỏi, tạm biệt, giới thiệu bản thân, tên, quốc tịch, số đếm, ngày tháng và thời gian.',
    },
    {
      stageNumber: 3,
      title: 'Phần 3: Xây dựng câu tiếng Việt',
      range: 'Bài 6 – 8',
      description: 'Đại từ nhân xưng và cách xưng hô theo tuổi tác, trật tự câu S + V + O, câu hỏi và từ để hỏi.',
    },
    {
      stageNumber: 4,
      title: 'Phần 4: Giao tiếp trong đời sống',
      range: 'Bài 9 – 16',
      description: 'Gia đình, ẩm thực gọi món, mua sắm hỏi giá, hỏi đường, nhà ở & công việc, sinh hoạt và nhờ giúp đỡ.',
    },
    {
      stageNumber: 5,
      title: 'Phần 5: Luyện tập và vận dụng',
      range: 'Bài 17 – 22',
      description: 'Du lịch lưu trú, giao tiếp điện thoại trực tuyến, ứng xử lịch thiệp, đàm thoại tổng hợp và vận dụng đời sống.',
    },
  ];

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đề tài B05 · Lộ trình học liên tục 22 bài</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
            Lộ trình luyện nói tiếng Việt cho người nước ngoài
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Hành trình học tập liên tục được thiết kế liền mạch từ âm vị học, câu từ cơ bản
            đến phản xạ giao tiếp đời sống thực tế. Bạn có thể tự do mở bài học, ôn tập lại bất kỳ lúc nào.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1 w-full sm:w-72">
            <div className="flex justify-between font-semibold text-slate-700">
              <span>Đã hoàn thành</span>
              <span className="text-slate-900 font-bold">{completedCount} / {totalCount} bài ({percent}%)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <span className="text-slate-500 text-[11px]">
            Lộ trình học tập liên tục · Không giới hạn cấp độ
          </span>
        </div>
      </div>

      {/* One Continuous Vertical Learning Path */}
      <div className="space-y-10">
        {stages.map((stage) => {
          const stageLessons = CURRICULUM.filter(
            (c) => c.stageNumber === stage.stageNumber
          );

          return (
            <div key={stage.stageNumber} className="space-y-4">
              {/* Stage Divider & Title */}
              <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      {stage.range}
                    </span>
                    <h2 className="font-display font-bold text-slate-900 text-base">
                      {stage.title}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Sequential Lesson Nodes along one connected vertical path */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-200 ml-4 sm:ml-6 space-y-4">
                {stageLessons.map((chapter) => {
                  const isCompleted = profile.completedLessonIds.includes(
                    chapter.id
                  );

                  return (
                    <div
                      key={chapter.id}
                      className="relative group"
                    >
                      {/* Node circle on the continuous line */}
                      <div
                        className={`absolute -left-[31px] sm:-left-[39px] top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                          isCompleted
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'bg-white border-slate-300 text-slate-600 group-hover:border-emerald-500'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <span>{chapter.id}</span>
                        )}
                      </div>

                      {/* Lesson Card */}
                      <div
                        className={`bg-white rounded-2xl p-5 border transition-all ${
                          isCompleted
                            ? 'border-emerald-200/90 bg-emerald-50/15'
                            : 'border-slate-200 hover:border-slate-300 shadow-xs'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-slate-900 text-base">
                              Bài {chapter.id}: {chapter.title}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] text-slate-500">
                              <Clock className="w-3 h-3" /> ~{chapter.durationMinutes}p
                            </span>
                          </div>

                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full w-fit">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Đã hoàn thành</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full w-fit">
                              <Circle className="w-3 h-3" />
                              <span>Sẵn sàng học</span>
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 mb-3 italic">
                          {chapter.subtitle}
                        </p>

                        <div className="space-y-1 mb-4 text-xs text-slate-600">
                          {chapter.objectives.slice(0, 2).map((obj, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-bold">·</span>
                              <span className="line-clamp-1">{obj}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-xs text-slate-500">
                            {chapter.vocabulary.length} từ vựng · {chapter.exercises.length} bài tập
                          </span>

                          <button
                            onClick={() => handleOpenLesson(chapter.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isCompleted
                                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{isCompleted ? 'Ôn lại bài này' : 'Bắt đầu học'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
