const utils = require('../../src/utilities/form');

describe('Form Utilities', () => {
    describe('formDataToObj', () => {
        it('should convert FormData to an object', () => {
            const data = new FormData();

            data.append('username', 'mike');
            data.append('password', 'Admin123!');

            expect(utils.formDataToObject(data)).toEqual({
                username: 'mike',
                password: 'Admin123!',
            });
        });
    });
});
