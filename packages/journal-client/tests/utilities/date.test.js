import moment from 'moment';
import { getDatesInRange } from '../../src/utilities/date';

describe('Date Utilities', () => {
    describe('getDatesInRange', () => {
        test('should return dates in a given range', () => {
            const xmasEve = new Date(2018, 11, 24);
            const xmas = new Date(2018, 11, 25);
            const boxingDay = new Date(2018, 11, 26);

            const range = getDatesInRange(moment(xmasEve), moment(boxingDay));

            expect(range).toHaveLength(3);
            expect(range[0].toDate()).toEqual(xmasEve);
            expect(range[1].toDate()).toEqual(xmas);
            expect(range[2].toDate()).toEqual(boxingDay);
        });
    });
});
