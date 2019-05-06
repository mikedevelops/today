const glob = require('glob-fs')();
const Mocha = require('mocha');
const mongoose = require('mongoose');
const emitter = require('../../src/services/emitter');
const client = require('./client');

process.env.DB_HOST = 'mongodb://localhost/journal-test';
process.env.DB_NAME = 'journal-test';
process.env.PORT = 8666;

require('../../src/index');

const mocha = new Mocha();
const tests = glob.readdirSync('tests/integration/**/*.js');

tests.forEach(test => mocha.addFile(test));

global.users = {};

emitter.on('ready', () => {
    mocha.run((failures) => {
        process.exitCode = failures ? 1 : 0;
    });
});

/**
 * Reset database
 * @return {Promise<void>}
 */
module.exports.reset = async () => {
    await client.cleanDatabase(mongoose.connection.db);
    global.users.mike = await client.registerUser('mike');
    global.users.toni = await client.registerUser('toni');
};
