require('../models/entry/Entry');
require('../models/activity/Activity');
require('../models/user/User');

const mongoose = require('mongoose');
const logger = require('./logger');

/**
 * Connect to the database
 * @param host
 * @param name
 * @param {Function} next
 */
module.exports.connect = (host, name, next) => {
  const options = {
    useNewUrlParser: true,
    dbName: name,
    useFindAndModify: false,
  };

  if (next === undefined) {
    return mongoose.connect(host, options);
  }

  mongoose.connect(
    host,
    options,
  ).then(async () => {
    logger.info(`Connected to the database ${host}/${name}`);
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
