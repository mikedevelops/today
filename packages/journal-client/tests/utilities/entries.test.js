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

            const xmasEve = new Date(2018, 11, 24);
            const xmas = new Date(2018, 11, 25);
            const boxing = new Date(2018, 11, 26);
            const range = [
                moment(xmasEve),
                moment(xmas),
                moment(boxing),
            ];

            const entries = generateRandomEntries(range, 1);

            expect(entries).toEqual({
                [xmasEve]: 'entry',
                [xmas]: 'entry',
                [boxing]: 'entry',
            });

            expect(entryFactory).toHaveBeenCalledWith(moment(xmasEve), 'lorem');
            expect(entryFactory).toHaveBeenCalledWith(moment(xmas), 'lorem');
            expect(entryFactory).toHaveBeenCalledWith(moment(boxing), 'lorem');
        });
    });

    describe('getEntry', () => {
        test('should get an entry', () => {
            const date = new Date(1988, 9, 3);
            const entry = new Entry(date, 'foo');
            const entries = { [date]: entry };

            expect(getEntry(date, entries)).toBe(entry);
        });

        test('should return null if entry does not exist', () => {
            const date = new Date(1988, 9, 3);
            const entry = new Entry(date, 'foo');
            const entries = { [date]: entry };

            expect(getEntry(new Date(1990, 9, 3), entries)).toBeNull();
        });
    });

    describe('hadEntry', () => {
        test('should return true', () => {
            const date = new Date(1988, 9, 3);
            const entry = new Entry(date, 'foo');
            const entries = { [date]: entry };

            expect(hasEntry(date, entries)).toBe(true);
        });

        test('should return false', () => {
            const date = new Date(1988, 9, 3);
            const entry = new Entry(date, 'foo');
            const entries = { [date]: entry };

            expect(hasEntry(new Date(1990, 9, 3), entries)).toBe(false);
        });
    });
});
