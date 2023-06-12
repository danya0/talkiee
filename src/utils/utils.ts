export function getRandomValueInRange(min: number, max: number): number {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}
