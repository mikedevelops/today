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
export const hasEntry = (id, entries) => Object.hasOwnProperty.call(entries, id);

/**
 * @param {Entry} a
 * @param {Entry} b
 */
export const sortEntriesReverseChrono = (a, b) => b.getDate().unix() - a.getDate().unix();

/**
 * Get previous entry in time
 * @param {Entry} entry
 * @param {Object<number,Entry>} entries
 * @return {Entry|null}
 */
export const getPreviousEntry = (entry, entries) => {
  // Sort reverse chronological
  const sortedEntries = Object.keys(entries).map(e => entries[e])
    .sort(sortEntriesReverseChrono);
  const currentIndex = sortedEntries.indexOf(entry);

  return sortedEntries[currentIndex + 1] || null;
};

/**
 * @param {Entry} entry
 * @param {Object<number,Entry>} entries
 * @return {null|Entry}
 */
export const getNextEntry = (entry, entries) => {
  // Sort reverse chronological
  const sortedEntries = Object.keys(entries).map(e => entries[e])
    .sort(sortEntriesReverseChrono);
  const currentIndex = sortedEntries.indexOf(entry);

  return sortedEntries[currentIndex - 1] || null;
};

/**
 * @param {moment.Moment} date
 */
export const getEntrySlug = date => `/entry/${date.format('YYYY-MM-DD')}`;
