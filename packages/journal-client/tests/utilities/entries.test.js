import moment from 'moment';
import { generateRandomEntries } from '../../src/utilities/entry';
import entryFactory from '../../src/factories/entryFactory';
import { loremIpsum } from 'lorem-ipsum';

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
});
