const status = require('http-status');

/**
 * @param {Mongoose.Error} error
 * @param {Response} res
 * @param {winston.Logger} logger
 */
module.exports.handleMongooseException = (error, res, logger) => {
    logger.error(error.message);
    res.status(status.INTERNAL_SERVER_ERROR).send(error.message);
};

/**
 * @param {string} resourceIdentifier
 * @param {Response} res
 * @param {winston.Logger} logger
 */
module.exports.handleResourceNotFound = (resourceIdentifier, res, logger) => {
    const msg = `${resourceIdentifier} not found`;

    logger.warning(msg);
    res.status(status.NOT_FOUND).send(msg);
};

/**
 * @param {string} type
 */
module.exports.handleActivityModelNotFound = (type) => {
    throw new Error(`No model defined for activity type "${type}"`);
};
