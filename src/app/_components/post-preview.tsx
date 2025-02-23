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
      className="block border-4 p-4 border-accent-2 hover:bg-accent-2/5 transition-colors cursor-pointer"
    >
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          <span className="text-accent-1 hover:text-accent-2 transition-colors">
            {title}
          </span>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-base leading-relaxed mb-4 text-accent-2">{excerpt}</p>
      </div>
    </Link>
  );
}
