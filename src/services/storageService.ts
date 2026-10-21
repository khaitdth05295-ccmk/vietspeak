import { LearnerProfile, SavedError } from '../types';

const PROFILE_KEY = 'vietspeak_learner_profile_v2';
const ERRORS_KEY = 'vietspeak_error_notebook_v2';

export const DEFAULT_PROFILE: LearnerProfile = {
  fullName: 'Trần Đức Khải',
  studentId: 'TH05295',
  group: 'Group 2 — B05',
  completedLessonIds: [1],
  quizScores: {},
  savedVocabIds: ['v1', 'v2', 'v3', 'v5', 'v8', 'v10'],
  masteredVocabIds: ['v1', 'v2'],
  learningStreakDays: 3,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  totalPracticeMinutes: 45,
};

export const storageService = {
  getProfile(): LearnerProfile {
    try {
      const data = localStorage.getItem(PROFILE_KEY);
      if (!data) return DEFAULT_PROFILE;
      const parsed = JSON.parse(data);
      return {
        ...DEFAULT_PROFILE,
        ...parsed,
        fullName: parsed.fullName?.trim() ? parsed.fullName : 'Trần Đức Khải',
        studentId: parsed.studentId?.trim() ? parsed.studentId : 'TH05295',
      };
    } catch {
      return DEFAULT_PROFILE;
    }
  },

  saveProfile(profile: Partial<LearnerProfile>): LearnerProfile {
    try {
      const current = this.getProfile();
      const updated: LearnerProfile = {
        ...current,
        ...profile,
      };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('Failed to save profile to localStorage', e);
      return { ...DEFAULT_PROFILE, ...profile };
    }
  },

  updateStudentInfo(fullName: string, studentId: string, group: string): LearnerProfile {
    return this.saveProfile({
      fullName: fullName.trim(),
      studentId: studentId.trim(),
      group: group.trim() || 'Group 2 — B05',
    });
  },

  markLessonCompleted(lessonId: number): LearnerProfile {
    const profile = this.getProfile();
    if (!profile.completedLessonIds.includes(lessonId)) {
      const newIds = [...profile.completedLessonIds, lessonId];
      return this.saveProfile({ completedLessonIds: newIds });
    }
    return profile;
  },

  toggleSaveVocab(vocabId: string): { profile: LearnerProfile; isSaved: boolean } {
    const profile = this.getProfile();
    const isSaved = profile.savedVocabIds.includes(vocabId);
    let newSaved = [...profile.savedVocabIds];
    if (isSaved) {
      newSaved = newSaved.filter((id) => id !== vocabId);
    } else {
      newSaved.push(vocabId);
    }
    const updated = this.saveProfile({ savedVocabIds: newSaved });
    return { profile: updated, isSaved: !isSaved };
  },

  toggleMasteredVocab(vocabId: string): { profile: LearnerProfile; isMastered: boolean } {
    const profile = this.getProfile();
    const isMastered = profile.masteredVocabIds.includes(vocabId);
    let newMastered = [...profile.masteredVocabIds];
    if (isMastered) {
      newMastered = newMastered.filter((id) => id !== vocabId);
    } else {
      newMastered.push(vocabId);
    }
    const updated = this.saveProfile({ masteredVocabIds: newMastered });
    return { profile: updated, isMastered: !isMastered };
  },

  saveQuizScore(quizId: string, score: number): LearnerProfile {
    const profile = this.getProfile();
    const quizScores = { ...profile.quizScores, [quizId]: score };
    return this.saveProfile({ quizScores });
  },

  // Error Notebook
  getSavedErrors(): SavedError[] {
    try {
      const data = localStorage.getItem(ERRORS_KEY);
      if (!data) {
        return [
          {
            id: 'err-1',
            original: 'Tôi đi chợ và mua nhiều trái cây.',
            corrected: 'Hôm qua tôi đi chợ mua nhiều hoa quả / trái cây tươi.',
            explanation: 'Trong tiếng Việt, cụm "đi chợ mua..." rất tự nhiên mà không nhất thiết phải thêm liên từ "và". "Trái cây" (Nam) hoặc "hoa quả" (Bắc).',
            date: '2026-10-18',
            mastered: false,
          },
          {
            id: 'err-2',
            original: 'Xin chào, tôi tên Alex là.',
            corrected: 'Xin chào, tôi tên là Alex.',
            explanation: 'Trật tự câu giới thiệu tên: "Tôi tên là [Tên]" hoặc "Tôi là [Tên]". Từ "là" đặt trước tên riêng.',
            date: '2026-10-19',
            mastered: true,
          },
        ];
      }
      return JSON.parse(data);
    } catch {
      return [];
    }
  },

  saveError(original: string, corrected: string, explanation: string): SavedError {
    const errors = this.getSavedErrors();
    const newErr: SavedError = {
      id: 'err-' + Date.now(),
      original: original.trim(),
      corrected: corrected.trim(),
      explanation: explanation.trim(),
      date: new Date().toISOString().slice(0, 10),
      mastered: false,
    };
    const updated = [newErr, ...errors];
    try {
      localStorage.setItem(ERRORS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save error notebook', e);
    }
    return newErr;
  },

  toggleErrorMastered(id: string): SavedError[] {
    const errors = this.getSavedErrors();
    const updated = errors.map((err) =>
      err.id === id ? { ...err, mastered: !err.mastered } : err
    );
    try {
      localStorage.setItem(ERRORS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to update error notebook', e);
    }
    return updated;
  },

  deleteError(id: string): SavedError[] {
    const errors = this.getSavedErrors();
    const updated = errors.filter((err) => err.id !== id);
    try {
      localStorage.setItem(ERRORS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to delete error from notebook', e);
    }
    return updated;
  },

  resetAllProgress(): LearnerProfile {
    try {
      const current = this.getProfile();
      // Keep student identity information intact during curriculum progress reset
      const resetProfile: LearnerProfile = {
        ...DEFAULT_PROFILE,
        fullName: current.fullName,
        studentId: current.studentId,
        group: current.group,
        completedLessonIds: [1],
        quizScores: {},
        savedVocabIds: ['v1', 'v2'],
        masteredVocabIds: [],
        learningStreakDays: 1,
        totalPracticeMinutes: 0,
      };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(resetProfile));
      return resetProfile;
    } catch {
      return DEFAULT_PROFILE;
    }
  },
};
