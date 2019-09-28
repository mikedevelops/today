const meow = require('meow');
const winston = require('winston');
const User = require('../src/models/user/User');
const { connect } = require('../src/services/database');
const userFactory = require('../src/factories/userFactory');

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

try {
  connect(async () => {
    let user = await User.findOne({ username: cli.flags.user });

    if (user !== null) {
      logger.info(`User "${user.username}" already exists`);
      process.exit(0);
    }

    user = await userFactory(cli.flags.user, 'Admin123!');
    logger.info(`User "${user.username}" created`);
    process.exit(0);
  });
} catch (e) {
  logger.error(e.message);
  process.exit(0);
}
