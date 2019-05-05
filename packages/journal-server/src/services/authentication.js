const passport = require('passport');
const LocalStrategy = require('passport-local');
const Jwt = require('passport-jwt');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
        done(error, user);
    });
});

passport.use(new Jwt.Strategy({
    jwtFromRequest: Jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'token_secret',
}, (jwtPayload, done) => {
    User.findOne({ _id: jwtPayload.id }, (error, user) => {
        return done(error, user);
    });
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }).select('+password').exec((error, user) => {
            if (error !== null) {
                return done(error, null);
            }

            if (user === null) {
                return done(null, null, { message: 'User not found' });
            }

            if (user.password !== password) {
                return done(null, null, { message: 'Incorrect password' });
            }

            return done(null, user);
        });
    },
));
