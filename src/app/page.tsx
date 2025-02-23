import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";

export default async function HomePage() {
  const allPosts = await getAllPosts();

  return (
    <Container>
      <Intro />
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
