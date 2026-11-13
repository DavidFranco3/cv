/**
 * Lightweight Web Audio API Synthesizer for tactile mechanical feedback.
 * No external mp3/wav files required, zero latency, runs entirely in browser.
 */

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.enabled = true; // Enabled by default
  }

  init() {
    try {
      if (!this.audioCtx && typeof window !== 'undefined') {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
    } catch {
      // AudioContext policy safe fallback
    }
  }

  setEnabled(val) {
    this.enabled = Boolean(val);
    if (this.enabled) {
      this.init();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playClick(800, 0.03);
    }
    return this.enabled;
  }

  playClick(freq = 600, duration = 0.02) {
    this.playMechanicalClick(freq, duration);
  }

  playBeep() {
    this.playBeepSuccess();
  }

  playMechanicalClick(freq = 600, duration = 0.02) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // AudioContext policy fallback - fail silently without blocking UI
    }
  }

  playBeepSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime + 0.05); // A5

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch {
      // fail silently without blocking UI
    }
  }
}

export const soundManager = new SoundManager();
