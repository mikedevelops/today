const status = require('http-status');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { handleMongooseException } = require('../utilities/errors');
const logger = require('../services/logger');

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.login = (req, res) => {
    passport.authenticate('local', { session: false }, (error, user) => {
        if (error !== null) {
            return res.sendStatus(status.INTERNAL_SERVER_ERROR);
        }

        req.login(user, { session: false }, (loginError) => {
            if (loginError !== undefined) {
                return res.send(loginError);
            }

            return res.json({
                username: user.username,
                id: user.id,
                token: jwt.sign({ id: user.id }, 'token_secret')
            });
        });
    })(req, res);
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

        logger.debug(`User registered "${user.username}"`);

        req.login(user, { session: false }, (loginError) => {
            if (loginError !== undefined) {
                return res.send(loginError);
            }

            return res.json({
                username: user.username,
                id: user.id,
                token: jwt.sign({ id: user.id }, 'token_secret'),
            });
        });
    });
};

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports.logout = (req, res) => {
    logger.debug(`User logging out"${req.user.username}"`);
    req.logout();
    res.redirect('/');
};
