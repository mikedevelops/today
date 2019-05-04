const passport = require('passport/lib');
const User = require('../models/User');
const { handleMongooseException } = require('../utilities/errors');
const logger = require('../services/logger');

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
module.exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
    }).call(null, req, res, next);
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.register = (req, res) => {
    const { username, password } = req.body;

    User.create({ username, password }, (error, user) => {
        if (error !== null) {
            return handleMongooseException(error, res, logger);
        }

        res.json(user.toObject());
    });
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};
