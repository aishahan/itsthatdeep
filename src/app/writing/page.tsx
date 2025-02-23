import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import { Intro } from "@/app/_components/intro";

export default async function WritingPage() {
  const allPosts = await getAllPosts();

  const topics = [
    'advice', 'confidence', 'commitment', 'customer journey map', 'competition',
    'education', 'first-generation', 'fitness', 'friendship', 'goals', 'habits',
    'investing', 'love', 'marketing', 'parenting', 'personal finance', 'planning',
    'public speaking', 'self-parenting', 'sobriety', 'wealth', 'writing', 'videos'
  ];

  return (
    <Container>
      <Intro highlightedLinks={true} />
      <div className="max-w-6xl mx-auto">
        {/* Topics Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 text-sm">
            {topics.map((topic, index) => (
              <a
                key={topic}
                href={`/writing/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-accent-1 hover:text-accent-2 transition-colors"
              >
                {index !== 0 && <span className="mr-2">|</span>}
                {topic}
              </a>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </Container>
  );
} 