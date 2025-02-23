import { CMS_NAME } from "@/lib/constants";

type IntroProps = {
  highlightedLinks?: boolean;
  currentPage?: 'writing' | 'coach' | 'contact' | 'video';
};

export function Intro({ highlightedLinks = false, currentPage }: IntroProps) {
  // Helper function to determine hover color
  const getHoverColor = (linkType: 'writing' | 'coach' | 'other') => {
    // If we're on any page, all links should hover to accent-1
    if (currentPage) {
      return 'hover:text-accent-1';
    }
    // On home page, all links hover to accent-2
    return 'hover:text-accent-2';
  };

  return (
    <section className="sticky top-0 mt-12 bg-background z-50 py-6">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <h1 className="text-5xl md:text-2xl text-accent-1 font-bold tracking-tighter leading-tight">
          <a href="/" className="hover:text-accent-2 transition-colors">
            it's that deep
          </a>
        </h1>
        <nav className="flex gap-6 md:ml-auto">
          <a 
            href="/writing" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${
              currentPage === 'coach' ? 'text-accent-2' : 'text-accent-1'
            } ${getHoverColor('writing')}`}
          >
            writing
          </a>
          <a 
            href="/coach" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${
              currentPage === 'coach' ? 'text-accent-1' : highlightedLinks ? 'text-[#FF8C8C]' : 'text-accent-1'
            } ${getHoverColor('coach')}`}
          >
            coach
          </a>
          <a 
            href="/contact" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${
              highlightedLinks ? 'text-[#FF8C8C]' : 'text-accent-1'
            } ${getHoverColor('other')}`}
          >
            contact
          </a>
          <a 
            href="/video" 
            className={`text-4xl md:text-xl font-normal tracking-tighter transition-colors ${
              highlightedLinks ? 'text-[#FF8C8C]' : 'text-accent-1'
            } ${getHoverColor('other')}`}
          >
            video
          </a>
        </nav>
      </div>
      <h4 className="text-accent-2 max-w-md leading-4 mt-4">
        technologist by trade. exploring topics worth writing about. early career + higher ed admissions strategy coach.
      </h4>
    </section>
  );
}
