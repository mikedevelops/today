const { ACTIVITY_BOOLEAN } = require('../../../journal-client/src/config/app.config');
const User = require('../models/user/User');

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<mongoose.Document>}
 */
module.exports = async (username, password) => {
    const activities = [
        { type: ACTIVITY_BOOLEAN, name: 'climbed', enabled: true },
    ];

    return User.create({ username, password, activities });
};
