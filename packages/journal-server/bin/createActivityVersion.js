const meow = require('meow');
const winston = require('winston');
const db = require('../src/services/database');
const User = require('../src/models/user/User');
const ActivityVersion = require('../src/models/activity/ActivityVersion');
const { ACTIVITY_BOOLEAN } = require('../src/schema/activity/activityBlueprint');
const ActivityBlueprint = require('../src/models/activity/ActivityBlueprint');

const cli = meow('Create AbstractActivity Version', {
    flags: {
        user: {
            type: 'string',
        },
        db: {
            type: 'string',
            default: 'journal-test',
        },
    },
});


process.env.DB_HOST = `mongodb://localhost/${cli.flags.db}`;
process.env.DB_NAME = cli.flags.db;

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

db.connect(async () => {
    const user = await User.findOne({ username: cli.flags.user });

    if (user === null) {
        logger.error(`Cannot find user "${cli.flags.user}"`);
        process.exit(0);
    }

    const activities = [
        await ActivityBlueprint.create({
            type: ACTIVITY_BOOLEAN,
            name: 'climbed',
            icon: 'icon',
            defaultValue: false,
        }),
    ];

    await ActivityVersion.remove();
    await ActivityVersion.create({ version: 1, activities, user });

    logger.info(`Created activity version 1 for user ${user.username}"`);
    process.exit(0);
});
