import { getCalendarDaysInMonth } from '../../src/utilities/date';

describe('Date Utilities', () => {
    describe('getCalendarDaysInMonth', () => {
        const days = [
            ['jan', 31],
            ['feb', 28],
            ['mar', 31],
            ['apr', 30],
            ['may', 31],
            ['jun', 30],
            ['jul', 31],
            ['aug', 31],
            ['sep', 30],
            ['oct', 31],
            ['nov', 30],
            ['dec', 31],
        ];

        days.forEach(([month, totalDays], index) => {
            it(`Should have correct length of days for ${month} (2018)`, () => {
                const m = getCalendarDaysInMonth(index, 2018);

                expect(m).toHaveLength(totalDays);
            });
        });
    });
});
