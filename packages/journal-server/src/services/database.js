require('../models/activity/ActivityBlueprint');
require('../models/activity/ActivityVersion');
require('../models/entry/Entry');
require('../models/user/User');

const mongoose = require('mongoose');
const logger = require('./logger');

/**
 * Connect to the database
 * @param {Function} next
 */
module.exports.connect = (next) => {
    mongoose.connect(
        process.env.DB_HOST,
        {
            useNewUrlParser: true,
            dbName: process.env.DB_NAME,
            useFindAndModify: false,
        },
    ).then(async () => {
        logger.info(`Connected to the database ${process.env.DB_HOST}`);
        next();
    }).catch(error => {
        logger.error(`${error.message}`);
    });
};

/**
 * @param {Function} next
 */
module.exports.drop = (next) => {
    mongoose.connection.db.dropDatabase();
    logger.debug('Database dropped');
    next();
};
