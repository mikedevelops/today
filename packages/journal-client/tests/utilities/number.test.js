import { leadingZero } from '../../src/utilities/number'

describe('Number Utilities', () => {
    describe('leadingZero', () => {
        it('should add a leading zero for single digit integers', () => {
            expect(leadingZero(5)).toEqual('05');
        });

        it('should not add a leading zero for double digit integers', () => {
            expect(leadingZero(15)).toEqual('15');
        });
    });
});
