import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  // Handle both ISO dates and YYYY-MM-DD format
  const date = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;
