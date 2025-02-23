'use client';

import { useState, useEffect } from 'react';
import { Season, getCurrentSeason } from '@/lib/seasons';

export function SeasonSwitcher() {
  const [currentSeason, setCurrentSeason] = useState<Season>(getCurrentSeason());
  const seasons: Season[] = ['summer', 'autumn', 'winter', 'spring'];

  const updateTheme = (season: Season) => {
    document.documentElement.classList.remove(
      'summer-theme',
      'autumn-theme',
      'winter-theme',
      'spring-theme'
    );
    document.documentElement.classList.add(`${season}-theme`);
    setCurrentSeason(season);
    localStorage.setItem('selected-season', season);
  };

  const handleClick = () => {
    const currentIndex = seasons.indexOf(currentSeason);
    const nextIndex = (currentIndex + 1) % seasons.length;
    updateTheme(seasons[nextIndex]);
  };

  useEffect(() => {
    const savedSeason = localStorage.getItem('selected-season') as Season | null;
    if (savedSeason && seasons.includes(savedSeason)) {
      updateTheme(savedSeason);
    } else {
      updateTheme(getCurrentSeason());
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className="text-4xl md:text-xl font-normal tracking-tighter transition-colors text-[var(--color-accent-2)] hover:text-[var(--color-accent-1)]"
    >
      {currentSeason}
    </button>
  );
} 