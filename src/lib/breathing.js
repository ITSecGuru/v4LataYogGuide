export function breathingHint(step) {
  if (!step?.breathing) return '';
  if (step.type === 'pranayama' || step.type === 'chant') {
    return 'Breathe in slow, even cycles. Use the nose for inhalation and exhalation.';
  }
  return 'Maintain a steady inhale and exhale rhythm while holding this pose.';
}
