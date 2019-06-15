const { ACTIVITY_BOOLEAN } = require('../../../journal-client/src/config/app.config');
const User = require('../models/user/User');

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<mongoose.Document>}
 */
module.exports = (username, password) => {
    const activities = [
        { type: ACTIVITY_BOOLEAN, name: 'climbed', enabled: true, defaultValue: false },
        { type: ACTIVITY_BOOLEAN, name: 'happy', enabled: true, defaultValue: false },
    ];

    return User.create({ username, password, activities });
};
