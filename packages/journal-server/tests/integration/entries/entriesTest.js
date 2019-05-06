const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const client = require('../client');
const bootstrap = require('../bootstrap');

const { expect } = chai;

chai.use(chaiAsPromised);

describe('Entries integration', () => {
    beforeEach((done) => {
        bootstrap.reset().then(done);
    });

    describe('Save entry', () => {
        it('should save an entry and return it', (done) => {
            const date = Date.now();

            client.saveEntry(global.users.mike.token, 'Hello, World!', date).then(entry => {
                expect(entry.content).to.equal('Hello, World!');
                expect(entry.date).to.equal(new Date(date).toISOString());
                expect(entry.user).to.equal(global.users.mike.id);
                done();
            });
        });

        it('should prevent saving entries with the same date and user', (done) => {
            const date = Date.now();

            client.saveEntry(global.users.mike.token, 'Hello, World!', date).then(entry => {
                client.saveEntry(global.users.mike.token, 'Hello, World!', date).catch(() => {
                    done();
                });
            });
        });
    });

    describe('List entries', () => {
        beforeEach((next) => {
            const entries = [];

            entries.push(client.saveEntry(
                global.users.mike.token,
                'user 1, entry 1',
                new Date(1988, 9, 3),
            ));
            entries.push(client.saveEntry(
                global.users.mike.token,
                'user 1, entry 2',
                new Date(1988, 9, 4),
            ));
            entries.push(client.saveEntry(
                global.users.toni.token,
                'user 2, entry 1',
                new Date(1988, 9, 5),
            ));
            entries.push(client.saveEntry(
                global.users.toni.token,
                'user 2, entry 2',
                new Date(1988, 9, 6),
            ));

            Promise.all(entries).then(() => next());
        });

        it('should return user 1 entries', (done) => {
            client.listEntries(global.users.mike.token).then(entries => {
                expect(entries).to.have.lengthOf(2);
                expect(entries[1].user).to.equal(global.users.mike.id);
                expect(entries[0].user).to.equal(global.users.mike.id);
                done();
            });
        });

        it('should return user 2 entries', (done) => {
            client.listEntries(global.users.toni.token).then(entries => {
                expect(entries).to.have.lengthOf(2);
                expect(entries[1].user).to.equal(global.users.toni.id);
                expect(entries[0].user).to.equal(global.users.toni.id);
                done();
            });
        });
    });
});
