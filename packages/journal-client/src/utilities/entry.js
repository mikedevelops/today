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

/**
 * @param {Entry} entry
 * @param {Object<number,Entry>} entries
 * @return {Entry|null}
 */
export const getPreviousEntry = (entry, entries) => {
    const keys = Object.keys(entries).sort();
    const currentIndex = keys.indexOf(entry.getKey().toString());

    if (currentIndex < 1) {
        return null;
    }

    return getEntry(parseInt(keys[currentIndex - 1], 10), entries);
};

/**
 * @param {Entry} entry
 * @param {Object<number,Entry>} entries
 * @return {null|Entry}
 */
export const getNextEntry = (entry, entries) => {
    const keys = Object.keys(entries).sort();
    const currentIndex = keys.indexOf(entry.getKey().toString());

    if (currentIndex === keys.length) {
        return null;
    }

    return getEntry(parseInt(keys[currentIndex + 1], 10), entries);
};
