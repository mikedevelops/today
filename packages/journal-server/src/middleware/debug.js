const logger = require('../services/logger');

/**
 * Debug requests
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
module.exports = (req, res, next) => {
    logger.debug(`${req.method} ${req.url}`);
    next();
};
