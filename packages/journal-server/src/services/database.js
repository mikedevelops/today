require('../models/entry/Entry');
require('../models/activity/Activity');
require('../models/user/User');

const mongoose = require('mongoose');
const logger = require('./logger');

/**
 * Connect to the database
 * @param {Function} next
 */
module.exports.connect = (next) => {
  const options = {
    useNewUrlParser: true,
    dbName: process.env.DB_NAME,
    useFindAndModify: false,
  };

  if (next === undefined) {
    return mongoose.connect(process.env.DB_HOST, options);
  }

  mongoose.connect(
    process.env.DB_HOST,
    options,
  ).then(async () => {
    logger.info(`Connected to the database ${process.env.DB_HOST}`);
    next(null);
  }).catch((error) => {
    logger.error(`${error.message}`);
    next(error);
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
