const passport = require('passport');

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
const checkAuth = (req, res, next) => {
    passport.authenticate('jwt', { session: false })(req, res, next);
};

module.exports = [checkAuth];
