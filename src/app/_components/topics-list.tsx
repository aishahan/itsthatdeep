type TopicsListProps = {
  topics: string[];
  selectedTopic?: string;
};

export function TopicsList({ topics, selectedTopic }: TopicsListProps) {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {topics.map((topic, index) => (
        <a
          key={topic}
          href={`/writing/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
          className={`${
            selectedTopic === topic.toLowerCase()
              ? 'text-accent-2'
              : 'text-accent-1 hover:text-accent-2'
          } transition-colors`}
        >
          {index !== 0 && <span className="mr-2">|</span>}
          {topic}
        </a>
      ))}
    </div>
  );
} 