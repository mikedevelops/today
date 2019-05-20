const request = require('request-promise');
const logger = require('../../src/services/logger');
const User = require('../../src/models/user/User');
const Entry = require('../../src/models/entry/Entry');

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
 */
module.exports.cleanDatabase = async () => {
    await User.remove({});
    logger.debug('Removed Users');
    await Entry.remove({});
    logger.debug('Removed Entries');
};

/**
 * Register a user
 * @param {string} username
 */
module.exports.register = (username) => {
    return new Promise((resolve, reject) => {
        request.post(buildRequest('register'), {
            form: { username, password: 'Admin123!' },
            json: true,
        }).then(resolve).catch(reject);
    });
};

/**
 * Log a user in
 * @param {string} username
 * @param {string} password
 */
module.exports.login = (username, password) => {
    return new Promise((resolve, reject) => {
        request.post(buildRequest('login'), {
            form: { username, password },
            json: true,
        }).then(resolve).catch(reject);
    });
};

/**
 * Save an entry
 * @param {string} token
 * @param {string} content
 * @param {number} date
 */
module.exports.saveEntry = (token, content, date) => {
    return new Promise((resolve, reject) => {
        request.post(buildRequest('entries'), {
            json: true,
            headers: buildHeaders(token),
            body: { content, date },
        }).then(resolve).catch(reject);
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
