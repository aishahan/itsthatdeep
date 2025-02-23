import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <h1 className="text-5xl md:text-2xl text-accent-1 font-bold tracking-tighter leading-tight">
          it's that deep
        </h1>
        <nav className="flex gap-6 md:ml-auto">
          <a href="/writing" className="text-4xl md:text-xl text-accent-1 font-normal tracking-tighter hover:text-accent-2 transition-colors">
            writing
          </a>
          <a href="/coach" className="text-4xl md:text-xl text-accent-1 font-normal tracking-tighter hover:text-accent-2 transition-colors">
            coach
          </a>
          <a href="/contact" className="text-4xl md:text-xl text-accent-1 font-normal tracking-tighter hover:text-accent-2 transition-colors">
            contact
          </a>
          <a href="/video" className="text-4xl md:text-xl text-accent-1 font-normal tracking-tighter hover:text-accent-2 transition-colors">
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
