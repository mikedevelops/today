import moment from 'moment';
import {
    generateRandomEntries,
    getEntry,
    getNextEntry,
    getPreviousEntry,
    hasEntry,
    sortEntriesReverseChrono
} from '../../src/utilities/entry';
import entryFactory from '../../src/factories/entryFactory';
import { loremIpsum } from 'lorem-ipsum';
import Entry from '../../src/entities/Entry';

jest.mock('../../src/factories/entryFactory');
jest.mock('../../src/entities/Entry');
jest.mock('lorem-ipsum');

describe('Entries Utilities', () => {
    beforeEach(() => {
        Entry.mockClear();
    });

    describe('generateRandomEntries', () => {
        test('should generate random entries', () => {
            entryFactory.mockReturnValue('entry');
            loremIpsum.mockReturnValue('lorem');

            const xmasEve = moment(new Date(2018, 11, 24));
            const xmas = moment(new Date(2018, 11, 25));
            const boxing = moment(new Date(2018, 11, 26));
            const range = [xmasEve, xmas, boxing];

            const entries = generateRandomEntries(range, 1);

            expect(entries).toEqual({
                [xmasEve.unix()]: 'entry',
                [xmas.unix()]: 'entry',
                [boxing.unix()]: 'entry',
            });

            expect(entryFactory).toHaveBeenCalledWith(xmasEve, 'lorem');
            expect(entryFactory).toHaveBeenCalledWith(xmas, 'lorem');
            expect(entryFactory).toHaveBeenCalledWith(boxing, 'lorem');
        });
    });

    describe('getEntry', () => {
        test('should get an entry', () => {
            const date = moment(new Date(1988, 9, 3));
            const entry = new Entry(date, 'foo');
            const entries = { 666: entry };

            expect(getEntry(666, entries)).toBe(entry);
        });

        test('should return null if entry does not exist', () => {
            const date = moment(new Date(1988, 9, 3));
            const entry = new Entry(date, 'foo');
            const entries = { 666: entry };

            expect(getEntry(777, entries)).toBeNull();
        });
    });

    describe('hadEntry', () => {
        test('should return true', () => {
            const date = moment(new Date(1988, 9, 3));
            const entry = new Entry(date, 'foo');
            const entries = { 666: entry };

            expect(hasEntry(666, entries)).toBe(true);
        });

        test('should return false', () => {
            const date = moment(new Date(1988, 9, 3));
            const entry = new Entry(date, 'foo');
            const entries = { 666: entry };

            expect(hasEntry(777, entries)).toBe(false);
        });
    });

    describe('getPreviousEntry', () => {
        test('should return the previous entry', () => {
            const currentEntry = new Entry();
            const currentDate = moment('03/10/1988');
            const prevEntry = new Entry();
            const prevDate = moment('01/10/1988');
            const entries = {
                [currentDate.unix()]: currentEntry,
                [prevDate.unix()]: prevEntry,
            };

            currentEntry.getDate.mockReturnValue(currentDate);
            prevEntry.getDate.mockReturnValue(prevDate);

            expect(getPreviousEntry(currentEntry, entries)).toBe(prevEntry);
        });
    });

    describe('getNextEntry', () => {
        test('should return the next entry', () => {
            const currentEntry = new Entry();
            const currentDate = moment('03/10/1988');
            const nextEntry = new Entry();
            const nextDate = moment('12/10/1988');
            const entries = {
                [currentDate.unix()]: currentEntry,
                [nextDate.unix()]: nextEntry,
            };

            currentEntry.getDate.mockReturnValue(currentDate);
            nextEntry.getDate.mockReturnValue(nextDate);

            expect(getNextEntry(currentEntry, entries)).toBe(nextEntry);
        });
    });

    describe('sortEntriesReverseChrono', () => {
        test('should sort dates in reverse chronological order', () => {
            const entries = [new Entry(), new Entry(), new Entry()];

            entries[0].getDate.mockReturnValue(moment('03-10-1988'));
            entries[1].getDate.mockReturnValue(moment('05-10-1988'));
            entries[2].getDate.mockReturnValue(moment('04-10-1988'));

            const sortedEntries = [...entries].sort(sortEntriesReverseChrono);

            expect(sortedEntries[0].getDate().unix()).toEqual(entries[1].getDate().unix());
            expect(sortedEntries[1].getDate().unix()).toEqual(entries[2].getDate().unix());
            expect(sortedEntries[2].getDate().unix()).toEqual(entries[0].getDate().unix());
        });
    });
});
