export function getNextStepIndex(steps, currentIndex) {
  if (currentIndex + 1 < steps.length) {
    return currentIndex + 1;
  }
  return 0;
}

export function getRoutineProgress(steps, currentIndex, stepSeconds) {
  const totalDuration = steps.reduce((sum, step) => sum + (step.duration || 0), 0);
  if (totalDuration === 0) return 0;

  const completed = steps
    .slice(0, currentIndex)
    .reduce((sum, step) => sum + (step.duration || 0), 0);

  const current = Math.min(stepSeconds, steps[currentIndex]?.duration || 0);
  return Math.min(100, Math.round(((completed + current) / totalDuration) * 100));
}

export function getStepDisplayName(step) {
  if (!step) return '';
  return `${step.deva} - ${step.roman}${step.english ? ` (${step.english})` : ''}`;
}
