const meow = require('meow');
const winston = require('winston');
const User = require('../src/models/user/User');
const Activity = require('../src/models/activity/Activity');
const db = require('../src/services/database');
const { LoremIpsum } = require('lorem-ipsum');
const { addActivities } = require('../src/managers/entryManager');

const cli = meow('Create user entries', {
  flags: {
    user: {
      type: 'string',
      default: 'mike@email.com',
    },
    db: {
      type: 'string',
      default: 'journal-test',
    },
    activities: {
      type: 'number',
      default: 10,
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

db.connect(dbHost, dbName, async () => {
  const user = await User.findOne({ username: cli.flags.user });

  if (user === null) {
    logger.error(`Cannot find user "${cli.flags.user}"`);
    process.exit(0);
  }

  // Remove all previous activities
  await Activity.remove({});

  const activities = [];
  const lorem = new LoremIpsum();

  for (let i = 0; i < cli.flags.activities; i++) {
    activities.push({
      id: null,
      icon: ':smile:',
      user: user._id,
      name: lorem.generateWords(1),
      lastUsed: new Date(),
    });
  }

  const newActivities = await addActivities(activities, { id: user._id });

  logger.info(`Created ${newActivities.length} activities`);
  process.exit(0);
});
