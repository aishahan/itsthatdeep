import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

export default function VideoPage() {
  return (
    <Container>
      <Intro highlightedLinks={true} currentPage="video" />
      <div className="flex justify-center items-center min-h-[50vh]">
        <h2 className="text-2xl text-accent-1 font-bold">
          coming soon
        </h2>
      </div>
    </Container>
  );
} 