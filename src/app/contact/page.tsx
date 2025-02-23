import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

export default function ContactPage() {
  return (
    <Container>
      <Intro highlightedLinks={true} currentPage="contact" />
      <div className="max-w-4xl mx-auto px-5 mt-16">
        <h2 className="text-2xl text-[var(--color-accent-1)] font-bold mb-4">Let's be penpals</h2>
        
        <div className="mb-8">
          <a 
            href="mailto:info@itsthatdeep.com" 
            className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition-colors"
          >
            info@itsthatdeep.com
          </a>
        </div>

        {/* Message Box */}
        <div className="mb-8">
          <textarea 
            className="w-full h-48 p-4 border-4 border-[var(--color-accent-1)] bg-transparent text-[var(--color-accent-1)] focus:outline-none resize-none"
            placeholder="Write your message here..."
          />
          <button className="bg-[var(--color-accent-1)] text-[var(--color-background)] px-8 py-2 float-right hover:bg-[var(--color-accent-2)] transition-colors">
            Send
          </button>
        </div>

        {/* Social Links */}
        <div className="space-y-2 mt-20">
          <div>
            <a 
              href="https://youtube.com/@thesubtlefold" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition-colors"
            >
              YouTube: @thesubtlefold
            </a>
          </div>
          <div>
            <a 
              href="https://x.com/its_that_deep" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition-colors"
            >
              Twitter: @itsthatdeep
            </a>
          </div>
          <div>
            <a 
              href="https://instagram.com/itsthatdeep" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition-colors"
            >
              Instagram: @itsthatdeep
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
} 