import moment from 'moment';
import { generateRandomEntries, getEntry, hasEntry } from '../../src/utilities/entry';
import entryFactory from '../../src/factories/entryFactory';
import { loremIpsum } from 'lorem-ipsum';
import Entry from '../../src/entities/Entry';

jest.mock('../../src/factories/entryFactory');
jest.mock('lorem-ipsum');

describe('Entries Utilities', () => {
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
});
