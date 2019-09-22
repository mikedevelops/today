const meow = require('meow');
const winston = require('winston');
const User = require('../src/models/user/User');
const Activity = require('../src/models/activity/Activity');
const db = require('../src/services/database');

const cli = meow('Create user entries', {
  flags: {
    user: {
      type: 'string',
      default: 'mike@email.com',
    },
    db: {
      type: 'string',
      default: 'journal',
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

  // Remove user's existing entries
  await Activity.remove({ user: user._id });

  const activities = [
    { icon: ':grinning:', name: 'Happy', type: 'HAPPY', user: user._id },
    { icon: ':no_mouth:', name: 'Quiet', type: 'QUIET', user: user._id },
    { icon: ':person_climbing:', name: 'Climbed', type: 'CLIMBED', user: user._id }
  ];

  const activity = await Activity.create(activities);

  logger.info(`Created ${activities.length} activities`);
  process.exit(0);
});
