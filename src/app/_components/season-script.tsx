'use client';

import { getCurrentSeason } from '@/lib/seasons';

export function SeasonScript() {
  const initialSeason = getCurrentSeason();

  // Create the script content
  const scriptContent = `
    (function() {
      try {
        const savedSeason = localStorage.getItem('selected-season') || '${initialSeason}';
        document.documentElement.classList.add(savedSeason + '-theme');
      } catch (e) {
        document.documentElement.classList.add('${initialSeason}-theme');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
} 