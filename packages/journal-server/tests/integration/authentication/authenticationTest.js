const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const client = require('../client');
const bootstrap = require('../bootstrap');

const { expect } = chai;

chai.use(chaiAsPromised);

describe('Authentication integration', () => {
    beforeEach(done => {
        bootstrap.reset().then(done);
    });

    describe('Register user', () => {
        it('should register a user', (done) => {
            client.register('bob').then(user => {
                expect(user.username).to.equal('bob');
                expect(user.password).to.be.undefined;
                expect(user).to.have.own.property('token');
                expect(user).to.have.own.property('id');
                done();
            });
        });

        it('should prevent registering a user with the same username', (done) => {
            client.register('bob').then(user => {
                client.register('bob').catch(() => {
                    done();
                });
            });
        });
    });

    describe('Login user', () => {
        it('should log a user in', (done) => {
            client.register('bob').then(() => {
                client.login('bob', 'Admin123!').then(user => {
                    expect(user.username).to.equal('bob');
                    expect(user.password).to.be.undefined;
                    expect(user).to.have.own.property('token');
                    expect(user).to.have.own.property('id');
                    done();
                });
            });
        });

        it('should reject an incorrect username', (done) => {
            client.register('bob').then(() => {
                client.login('rob', 'Admin123!').then(() => {
                    done();
                });
            });
        });

        it('should reject an incorrect password', (done) => {
            client.register('bob').then(() => {
                client.login('bob', 'whoops').then(() => {
                    done();
                });
            });
        });

        it('should reject incorrect credentials', (done) => {
            client.login('ned', 'stark').then(() => {
                done();
            });
        });
    });
});
