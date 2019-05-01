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
            entries[date.unix()] = entryFactory(date, loremIpsum({ count: 5, units: 'sentences' }));
        }
    });

    return entries;
};

/**
 * @param {number} id
 * @param {Object<number, Entry>} entries
 * @return Entry|null
 */
export const getEntry = (id, entries) => {
    if (entries[id] === undefined) {
        return null;
    }

    return entries[id];
};

/**
 * @param {number} id
 * @param {Object<number, Entry>} entries
 * @return {boolean}
 */
export const hasEntry = (id, entries) => {
    return Object.hasOwnProperty.call(entries, id);
};
