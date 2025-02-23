import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";

export default async function CoachPage() {
  // Get all posts and filter for relevant ones
  const allPosts = await getAllPosts();
  console.log("All posts:", allPosts); // Debug log

  const relatedPosts = allPosts.filter(post => {
    // Check if post has tags and if any of them match what we're looking for
    const relevantTags = ['college', 'career', 'education', 'admissions'];
    return post.tags?.some(tag => relevantTags.includes(tag.toLowerCase()));
  });

  console.log("Related posts:", relatedPosts); // Debug log

  return (
    <Container>
      <Intro highlightedLinks={true} currentPage="coach" />
      <div className="max-w-7xl mx-auto px-5">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32">
          {/* Left column */}
          <div className="md:pl-12">
            <section className="mb-8">
              <details className="group" open>
                <summary className="text-2xl text-[var(--color-accent-1)] font-bold tracking-tighter cursor-pointer list-none flex items-center gap-2 mt-16">
                  Background
                  <span className="text-[var(--color-accent-2)] transition-transform group-open:rotate-180"></span>
                </summary>
                <div className="mt-4 text-[var(--color-accent-2)] space-y-4">
                  <p>
                    I grew up in a low-middle income neighborhood with immigrant parents. Education was the way up and out for not only my parents' upbringing, but also my own.
                  </p>
                  <p>
                    I was fortunate to attend Carnegie Mellon University for undergrad and UCLA on scholarship for grad school. Along the way, I encountered pivotal moments that shaped my trajectory, and a major factor in my success was the guidance of admissions counselors who helped me navigate the complex world of college admissions and career decisions.
                  </p>
                  <p>
                    I know firsthand how challenging it is to get into college, and the process becomes more competitive each year. That's why I started mentoring first-generation, low-income students and MBA students from my hometown as a volunteer.
                  </p>
                  <p>
                    Over time, I realized that access to the right advice and support can make all the difference. My goal is to provide students with the tools, strategies, and confidence they need to not only gain admission to their dream schools but also to build fulfilling careers beyond graduation.
                  </p>
                </div>
              </details>
            </section>
          </div>

          {/* Right column */}
          <div className="md:pr-12">
            <section className="mb-8">
              <h2 className="text-xl text-[var(--color-accent-1)] font-bold mb-4 mt-16 text-right">
                Past high school students have been accepted to:
              </h2>
              <ul className="text-[var(--color-accent-2)] space-y-2 text-right">
                <li>Amherst College</li>
                <li>Brown University</li>
                <li>San Diego State University</li>
                <li>UC Berkeley on the Presidential scholarship</li>
                <li>UCLA</li>
                <li>UC Riverside</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl text-[var(--color-accent-1)] font-bold text-right">
                Past early career clients have been offered roles at:
              </h2>
              <ul className="text-[var(--color-accent-2)] space-y-2 text-right">
                <li>Adobe</li>
                <li>Google</li>
                <li>Groq</li>
                <li>McKinsey</li>
                <li>Amazon</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Full width section for buttons */}
        <section className="space-y-4 md:px-12 mb-32">
          <a 
            href="https://empowerly.as.me/aishahan" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 text-[var(--color-accent-1)] border-2 border-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)] hover:text-[var(--color-background)] transition-colors"
          >
            Book a college admissions session with me ↓
          </a>
          <a 
            href="https://cambridgecoaching.com/tutors/aisha-h?profession=29&tier=1" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 text-[var(--color-accent-1)] border-2 border-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)] hover:text-[var(--color-background)] transition-colors"
          >
            Book a career session with me ↓
          </a>
        </section>

        {/* Related Articles Section */}
        <section className="md:px-12">
          <h2 className="text-2xl text-[var(--color-accent-1)] font-bold m-8 text-center">
            related articles about college and career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  slug={post.slug}
                />
              ))
            ) : (
              <p className="text-[var(--color-accent-2)] col-span-3 text-center">No related articles found.</p>
            )}
          </div>
        </section>
      </div>
    </Container>
  );
} 