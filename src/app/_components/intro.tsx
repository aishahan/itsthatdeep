import { CMS_NAME } from "@/lib/constants";
import { SeasonSwitcher } from './season-switcher';

type IntroProps = {
  highlightedLinks?: boolean;
  currentPage?: 'writing' | 'coach' | 'contact' | 'video';
};

export function Intro({ highlightedLinks = false, currentPage }: IntroProps) {
  // Helper function to determine text and hover colors
  const getTextAndHoverColors = (isTitle: boolean = false, pageName?: string) => {
    // On homepage
    if (!currentPage) {
      return 'text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)]';
    }
    
    // For the title
    if (isTitle) {
      return 'text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)]';
    }
    
    // For navigation items - active tab gets accent-1 without hover, others get accent-2 with hover
    if (pageName && pageName === currentPage) {
      return 'text-[var(--color-accent-1)]';  // No hover effect for active tab
    }
    
    return 'text-[var(--color-accent-2)] hover:text-[var(--color-accent-1)]';
  };

  return (
    <section className="sticky top-0 mt-12 bg-[var(--color-background)] z-50 py-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <h1 className={`text-5xl md:text-2xl font-bold tracking-tighter leading-tight ${getTextAndHoverColors(true)}`}>
          <a href="/" className="transition-colors">
            it's that deep
          </a>
        </h1>
        <nav className="flex gap-6 md:ml-auto">
          <a 
            href="/writing" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${getTextAndHoverColors(false, 'writing')}`}
          >
            writing
          </a>
          <a 
            href="/coach" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${getTextAndHoverColors(false, 'coach')}`}
          >
            coach
          </a>
          <a 
            href="/contact" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${getTextAndHoverColors(false, 'contact')}`}
          >
            contact
          </a>
          <a 
            href="/video" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${getTextAndHoverColors(false, 'video')}`}
          >
            video
          </a>
          <SeasonSwitcher />
        </nav>
      </div>
      <h4 className="text-[var(--color-accent-2)] max-w-md leading-4 mt-4">
        technologist by trade. exploring topics worth writing about. early career + higher ed admissions strategy coach.
      </h4>
    </section>
  );
}
