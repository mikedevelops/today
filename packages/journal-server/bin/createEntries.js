const { loremIpsum } = require('lorem-ipsum');
const moment = require('moment');
const meow = require('meow');
const winston = require('winston');
const User = require('../src/models/User');
const Entry = require('../src/models/Entry');

const cli = meow('Create user entries', {
    flags: {
        user: {
            type: 'string',
        },
        chance: {
            type: 'number',
            default: 0.5,
        },
        db: {
            type: 'string',
            default: 'journal-test',
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

const start = moment('01-01-2019', 'DD-MM-YYYY');
const end = moment();
const entries = [];
let date = start;

if (start.isAfter(end)) {
    throw new Error('Start date must be before the end date');
}

User.findOne({ username: cli.flags.user }, (error, user) => {
    if (error) {
        throw new Error(error);
    }

    if (user === null) {
        throw new Error(`Cannot find user "${cli.flags.user}"`);
    }

    Entry.remove({}).then(() => {
        while(start.isSameOrBefore(end)) {
            if (Math.random() >= cli.flags.chance) {
                date.add(1, 'day');
                continue;
            }

            entries.push(Entry.create({
                content: loremIpsum({ count: 5, unit: 'sentences' }),
                date: date.toDate(),
                user: user._id,
            }));

            date.add(1, 'day');
        }


        Promise.all(entries).then(() => {
            logger.info(`Created ${entries.length} entries for user "${cli.flags.user}"`);
            process.exit(0);
        });
    });
});
