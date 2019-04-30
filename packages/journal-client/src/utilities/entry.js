import { loremIpsum } from 'lorem-ipsum';
import entryFactory from '../factories/entryFactory';

/**
 * @param {moment.Moment[]} dates
 * @param {number} chance
 */
export const generateRandomEntries = (dates, chance = 0.5) => {
    const entries = {};

    dates.forEach((date) => {
        if (Math.random() <= chance) {
            entries[date.toDate()] = entryFactory(date, loremIpsum({ count: 5, units: 'sentences' }));
        }
    });

    return entries;
};

/**
 * @param {Date} date
 * @param {Object<Date, Entry>} entries
 * @return Entry|null
 */
export const getEntry = (date, entries) => {
    if (entries[date] === undefined) {
        return null;
    }

    return entries[date];
};

/**
 * @param {Date} date
 * @param {Object<Date, Entry>} entries
 * @return {boolean}
 */
export const hasEntry = (date, entries) => {
    return Object.hasOwnProperty.call(entries, date);
};
