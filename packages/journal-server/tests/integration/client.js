const request = require('request-promise');
const logger = require('../../src/services/logger');

/**
 * Build endpoint
 * @param {string} endpoint
 * @return {string}
 */
const buildRequest = endpoint => `http://localhost:${process.env.PORT}/${endpoint}`;

/**
 * Build request headers
 * @param token
 * @return {{Authorization: string}}
 */
const buildHeaders = token => ({ 'Authorization': `Bearer ${token}` });

/**
 * Reset the test database
 * @param {Db} db
 */
module.exports.cleanDatabase = async (db) => {
    const collections = await db.listCollections().toArray();
    const drops = collections.map(c => db.collection(c.name).drop());

    logger.debug(`Reset database "${db.s.databaseName}"`);

    return Promise.all(drops);
};

/**
 * Register a user
 * @param {string} username
 */
module.exports.registerUser = (username) => {
    return new Promise((resolve) => {
        request.post(buildRequest('register'), {
            form: { username, password: 'Admin123!' },
            json: true,
        }).then(resolve);
    });
};

/**
 * Save an entry
 * @param {string} token
 * @param {string} content
 * @param {number} date
 */
module.exports.saveEntry = (token, content, date) => {
    return new Promise((resolve) => {
        request.post(buildRequest('entries'), {
            json: true,
            headers: buildHeaders(token),
            body: { content, date },
        }).then(resolve);
    });
};

/**
 * List a users entries
 * @param token
 * @return {Promise<any>}
 */
module.exports.listEntries = (token) => {
    return new Promise((resolve) => {
        request.get(buildRequest('entries'), {
            headers: buildHeaders(token),
            json: true,
        }).then(resolve);
    });
};
