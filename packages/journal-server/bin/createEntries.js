const meow = require('meow');
const moment = require('moment');
const { loremIpsum } = require('lorem-ipsum');
const winston = require('winston');
const User = require('../src/models/user/User');
const Entry = require('../src/models/entry/Entry');
const db = require('../src/services/database');
const { createEntry } = require('../src/managers/entryManager');
const Activity = require('../src/models/activity/Activity');

const cli = meow('Create user entries', {
  flags: {
    user: {
      type: 'string',
      default: 'mike@email.com',
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

const dbHost = 'mongodb://localhost';
const dbName = cli.flags.db;

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
const date = start;

if (start.isAfter(end)) {
  throw new Error('Start date must be before the end date');
}

db.connect(dbHost, dbName, async () => {
  const user = await User.findOne({ username: cli.flags.user });

  if (user === null) {
    logger.error(`Cannot find user "${cli.flags.user}"`);
    process.exit(0);
  }

  // Remove user's existing entries
  await Entry.remove({ user: user._id });

  while (start.isSameOrBefore(end)) {
    if (!date.isSame(end) && Math.random() >= cli.flags.chance) {
      date.add(1, 'day');
      continue;
    }

    const activities = await Activity.find({}).limit(4);

    entries.push(createEntry(
      date.toDate(),
      loremIpsum({ count: 5, unit: 'sentences' }),
      user._id,
      activities,
    ));

    date.add(1, 'day');
  }

  await Promise.all(entries);

  logger.info(`Created ${entries.length} entries for user "${cli.flags.user}"`);
  process.exit(0);
});
