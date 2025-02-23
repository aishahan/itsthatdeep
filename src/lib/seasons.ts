// Create a new file for shared season logic
export type Season = 'summer' | 'autumn' | 'winter' | 'spring';

export const getCurrentSeason = (): Season => {
  const now = new Date();
  const month = now.getMonth();
  
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}; 