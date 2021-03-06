import dayjs from 'dayjs';

interface DateProps {
  dateString: string;
}

export default function Date({dateString}: DateProps): JSX.Element {
  const date = dayjs(dateString);
  return (
    <time dateTime={dateString} data-testid="datetime">
      {date.format('MMMM D, YYYY')}
    </time>
  );
}
