const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 *
 * @param {string[]} days
 * @param {string[]} months
 * @returns {function(Date): string}
 */
const createFormatToday = (days, months) => {
    return date => {
        const day = days[date.getDay()];
        const month = months[date.getMonth()];

        return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
    };
};

/**
 * Format today's date
 * @type {function(Date): string}
 */
export const formatToday = createFormatToday(DAYS, MONTHS);

/**
 * Create month label function
 * @param months
 * @returns {function(*): *}
 */
const createGetMonthLabel = months => month => months[month];

/**
 * Get month label
 */
export const getMonthLabel = createGetMonthLabel(MONTHS);

/**
 * Get the calendar days in a month
 * @param {int} month
 * @param {int} year
 */
export const getCalendarDaysInMonth = (month, year) => {
    const last = new Date(year, month + 1, 0);
    const days = [];

    for (let d = 1; d <= last.getDate(); d += 1) {
        days.push(
            (new Date(year, month + 1, d)).getTime(),
        );
    }

    return days;
};
