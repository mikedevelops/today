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

export const formatToday = createFormatToday(DAYS, MONTHS);
