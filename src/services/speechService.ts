/**
 * Speech Service using Browser Web Speech Synthesis API
 * Accurately identified as synthetic Text-to-Speech (TTS), not native-speaker recordings.
 */

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private viVoice: SpeechSynthesisVoice | null = null;
  private isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Search for Vietnamese voice
    this.viVoice =
      voices.find((v) => v.lang.startsWith('vi') || v.lang.includes('VIE')) ||
      null;
  }

  public checkSupport(): boolean {
    return this.isSupported;
  }

  public hasVietnameseVoice(): boolean {
    return Boolean(this.viVoice);
  }

  public speak(
    text: string,
    rate: number = 0.85,
    onEnd?: () => void,
    onError?: (error: any) => void
  ): boolean {
    if (!this.synth || !this.isSupported) {
      if (onError) onError(new Error('Trình duyệt không hỗ trợ Web Speech API.'));
      return false;
    }

    try {
      this.synth.cancel(); // Stop any pending utterance

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = rate; // Slightly slower for foreign learners
      utterance.pitch = 1.0;

      if (this.viVoice) {
        utterance.voice = this.viVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        if (onError) onError(e);
      };

      this.synth.speak(utterance);
      return true;
    } catch (err) {
      console.warn('Speech failed:', err);
      if (onError) onError(err);
      return false;
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new SpeechService();
