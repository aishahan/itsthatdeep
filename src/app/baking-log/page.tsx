import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Image from "next/image";

// Type for baking entries
type BakingEntry = {
  id: number;
  image: string;
  title: string;
  date: string;
};

// You can add your baking entries here
const bakingEntries: BakingEntry[] = [
  {
    id: 1,
    image: "/baking-images/banana-bread.jpg", // These will be the paths to your images
    title: "almond butter banana bread",
    date: "2023-12-23",
  },
  {
    id: 2,
    image: "/baking-images/linzer-cookies.jpg", // These will be the paths to your images
    title: "linzer cookies w/ bon maman advent calendar jams",
    date: "2023-12-25",
  },
  {
    id: 3,
    image: "/baking-images/walnut-chip-cookies.jpg", // These will be the paths to your images
    title: "walnut dark choco chip cookies",
    date: "2024-11-05",
  },
  {
    id: 4,
    image: "/baking-images/sesame-pound-cake.jpg", // These will be the paths to your images
    title: "white and black sesame pound cake",
    date: "2024-12-13",
  },
  {
    id: 5,
    image: "/baking-images/butter-candle.jpg", // These will be the paths to your images
    title: "sour cream and onion biscuit w/ butter candle",
    date: "2024-12-18",
  },
  {
    id: 6,
    image: "/baking-images/orange-cake.jpg", // These will be the paths to your images
    title: "sicilian whole orange cake",
    date: "2025-01-17",
  },
  

  // Add more entries as needed
];

export default function BakingLogPage() {
  // Sort entries by date (most recent first)
  const sortedEntries = [...bakingEntries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container>
      <Intro highlightedLinks={true} />
      <div className="max-w-7xl mx-auto px-5 mt-16">
        <h2 className="text-xl md:text-2xl text-[var(--color-accent-1)] font-bold mb-8 text-center">
          Baking Log
        </h2>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {sortedEntries.map((entry) => (
            <div key={entry.id} className="space-y-2">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-background)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              {/* Title and Date below image */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-[var(--color-accent-1)]">{entry.title}</h3>
                <p className="text-sm text-[var(--color-accent-2)]">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
} 