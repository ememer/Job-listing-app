import { DateTime } from 'luxon';

export const getTimeDifference = (postedDay: string): { string: string; different: number } => {
    const LONG_DAYS_MONTHS = [1, 3, 5, 7, 8, 10, 12];
    const currentMonth = +DateTime.now().toLocaleString({ month: 'numeric' });
    const toDay = DateTime.now();
    const posted = DateTime.fromISO(postedDay);
    const daysDiff = Math.round(toDay.diff(posted, 'days')?.days ?? 0);
    const monthsDiff = Math.round(toDay.diff(posted, 'months')?.months ?? 0);
    if (LONG_DAYS_MONTHS.includes(currentMonth)) {
        if (daysDiff === 0) {
            return { string: 'Today', different: daysDiff };
        }
        return daysDiff <= 31
            ? { string: `${daysDiff} day(s) ago`, different: daysDiff }
            : { string: `${monthsDiff} month(s) ago`, different: daysDiff };
    }
    return daysDiff <= 30
        ? { string: `${daysDiff} day(s) ago`, different: daysDiff }
        : { string: `${monthsDiff} month(s) ago`, different: daysDiff };
};
