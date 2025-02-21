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
    <div className="border-4 p-4 border-accent-2">
      <h3 className="text-lg text-accent-1 mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-base mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
