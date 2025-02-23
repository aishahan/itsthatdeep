import DateFormatter from "./date-formatter";


type Props = {
  title: string;
  date: string;
};

export function PostHeader({ title, date }: Props) {
  return (
    <>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left text-accent-1">
            {title}
        </h1>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
