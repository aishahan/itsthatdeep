import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="block border-4 border-[var(--color-accent-2)] p-4 
        transition-all duration-300 ease-in-out
        hover:border-[var(--color-accent-1)]
        hover:from-[var(--color-accent-2)]/5
        hover:to-transparent
        hover:bg-gradient-radial
        relative group"
    >
      <div>
        <h3 className="text-2xl mb-3 leading-snug">
          <span className="text-[var(--color-accent-1)] transition-colors">
            {title}
          </span>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4 text-[var(--color-accent-2)]">{excerpt}</p>
      </div>
    </Link>
  );
}
