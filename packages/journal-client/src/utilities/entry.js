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
