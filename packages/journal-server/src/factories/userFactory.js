const User = require('../models/user/User');

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<mongoose.Document>}
 */
module.exports = (username, password) => {
    return User.create({ username, password });
};
