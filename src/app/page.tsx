import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import Link from "next/link";

export default async function HomePage() {
  const allPosts = await getAllPosts();

  // Fixed content cells
  const fixedCells = {
    cell2: {
      title: "Instagram",
      content: "info@itsthatdeep.com",
      content2: "YouTube",
      content3: "Twitter",
      link: "mailto:info@itsthatdeep.com"
    },
    cell4: {
      title: "YouTube",
      content: "Twitter",
      link: "https://x.com/its_that_deep"
    },
    cell6: {
      title: "Study with me",
      content: "Cambridge Coaching | Aisha",
      link: "https://cambridgecoaching.com/tutors/aisha-h"
    }
  };

  // Function to interleave posts with fixed content
  const createGridItems = () => {
    const gridItems = [];
    let postIndex = 0;

    for (let i = 0; i < 9; i++) {
      if (i === 1) { // Cell 2
        gridItems.push(
          <div key="fixed-1" className="p-4 text-center flex flex-col justify-center h-full">
            <Link href={fixedCells.cell2.link} className="block">
              <h3 className="text-2xl leading-snug text-accent-1">{fixedCells.cell2.title}</h3>
              <p className="text-2xl text-accent-1">{fixedCells.cell2.content}</p>
              <p className="text-2xl text-accent-1">{fixedCells.cell2.content2}</p>
              <p className="text-2xl text-accent-1">{fixedCells.cell2.content3}</p>
            </Link>
          </div>
        );
      } else if (i === 3) { // Cell 4
        gridItems.push(
          <div key="fixed-2" className="p-4">
            <Link href={fixedCells.cell4.link} className="block">
              <h3 className="text-3xl mb-3 leading-snug text-accent-1">{fixedCells.cell4.title}</h3>
              <p className="text-base text-accent-2">{fixedCells.cell4.content}</p>
            </Link>
          </div>
        );
      } else if (i === 5) { // Cell 6
        gridItems.push(
          <div key="fixed-3" className="p-4">
            <Link href={fixedCells.cell6.link} className="block">
              <h3 className="text-3xl mb-3 leading-snug text-accent-1">{fixedCells.cell6.title}</h3>
              <p className="text-base text-accent-2">{fixedCells.cell6.content}</p>
            </Link>
          </div>
        );
      } else {
        if (postIndex < allPosts.length) {
          gridItems.push(
            <PostPreview
              key={allPosts[postIndex].slug}
              title={allPosts[postIndex].title}
              date={allPosts[postIndex].date}
              excerpt={allPosts[postIndex].excerpt}
              slug={allPosts[postIndex].slug}
            />
          );
          postIndex++;
        }
      }
    }
    return gridItems;
  };

  return (
    <Container>
      <Intro />
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          {createGridItems()}
        </div>
      </div>
    </Container>
  );
}
