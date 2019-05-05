const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, dbName: process.env.DB_NAME });
mongoose.connection.on('error', (error) => {
    logger.error(error);
});

/**
 * @param {Function} next
 */
module.exports.connect = (next) => {
    mongoose.connection.on('open', () => {
        logger.info(`Connected to the database ${process.env.DB_HOST}`);
        next();
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
