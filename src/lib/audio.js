function chooseVoice(languageCode) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const preferred = voices.find((voice) => voice.lang.toLowerCase().startsWith(languageCode));
  if (preferred) return preferred;

  return voices.find((voice) => voice.lang.toLowerCase().startsWith('en')) || voices[0];
}

export function speakText(text, language) {
  if (typeof window === 'undefined' || !window.speechSynthesis || !text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === 'hindi' ? 'hi-IN' : 'en-US';
  const voice = chooseVoice(utterance.lang.slice(0, 2));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export function speakPrompt(step, promptBuilder, language) {
  if (!step) return;
  const prompt = typeof promptBuilder === 'function' ? promptBuilder(step) : promptBuilder;
  speakText(prompt, language);
}
