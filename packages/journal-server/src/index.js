require('dotenv').config();

const express = require('express');
const status = require('http-status');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const { NOT_FOUND } = require('http-status');
const entryRouter = require('./routes/entries');
const authenticationRouter = require('./routes/authentication');
const logger = require('./services/logger');
const db = require('./services/database');
const emitter = require('./services/emitter');
const debug = require('./middleware/debug');

require('./services/authentication');

const app = express();

logger.level = 'debug';

app.use(cors({ origin: 'http://journal.local:1234' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.all('*', debug);
app.use(entryRouter);
app.use(authenticationRouter);

db.connect(() => {
  app.listen(process.env.PORT, () => {
    logger.info(`Server started and listening on ${process.env.PORT}`);
    emitter.emit('ready');
  });
});

app.get('/status', (req, res) => {
  let dbStatus = false;

  db.connect((err) => {
    if (err === null) {
      dbStatus = true;
    }

    res.status(status.OK).send(`API: OK, DB: ${dbStatus ? 'OK' : 'ERROR'}`);
  });
});

app.get('/', (req, res) => {
  res.sendStatus(NOT_FOUND);
});
