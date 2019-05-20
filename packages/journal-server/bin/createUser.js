const meow = require('meow');
const winston = require('winston');
const User = require('../src/models/user/User');

const cli = meow('Create user entries', {
    flags: {
        user: {
            type: 'string',
        },
        db: {
            type: 'string',
            defaultValue: 'journal-test',
        },
    },
});

process.env.DB_HOST = `mongodb://localhost/${cli.flags.db}`;
process.env.DB_NAME = cli.flags.db;

require('../src/services/database');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.cli(),
        }),
    ],
});

if (cli.flags.user === undefined) {
    throw new Error('Username required --user');
}

User.findOne({ username: cli.flags.user }, (error, user) => {
    if (error) {
        throw new Error(error);
    }

    if (user !== null) {
        logger.info(`User "${user.username}" already exists`);
        process.exit(0);
    }

    User.create({ username: cli.flags.user, password: 'Admin123!' }, (error, user) => {
        if (error !== null) {
            throw new Error(error);
        }

        logger.info(`User created "${user.username}"`);
        process.exit(0);
    });
});
