import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string,
}

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{`Posted ${format(date, 'MMM d, yyyy')}`}</time>
}
