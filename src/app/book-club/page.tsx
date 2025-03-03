import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

export default function BookClubPage() {
  return (
    <Container>
      <Intro highlightedLinks={true} />
      <div className="max-w-4xl mx-auto px-5 mt-16">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent-1)] font-bold mb-4 text-center">
          Book Club
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-accent-2)] text-center mt-8">
          coming soon
        </p>
      </div>
    </Container>
  );
} 