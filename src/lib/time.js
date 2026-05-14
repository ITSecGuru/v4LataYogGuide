export function formatSeconds(totalSeconds) {
  const validSeconds = Number.isFinite(totalSeconds) ? Math.max(0, Math.floor(totalSeconds)) : 0;
  const minutes = Math.floor(validSeconds / 60);
  const seconds = validSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
