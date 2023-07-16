import { parseISO, format } from 'date-fns';

export default function DateFormat({date}:{date:string}) {
	const date_p = parseISO(date);

	return <time dateTime={date}>{format(date_p, 'LLL d, yyyy')}</time>;
}