const express = require('express');
const session = require('express-session');
const status = require('http-status');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const entryRouter = require('./routes/entries');
const authenticationRouter = require('./routes/authentication');
const logger = require('./services/logger');

require('./services/authentication');

const app = express();

require('dotenv').config();

const PORT = 8080 || process.env.PORT;

const { connection } = mongoose;

// TODO: .env these params
mongoose.connect('mongodb://localhost/journal', { useNewUrlParser: true });

connection.on('error', logger.error.bind(null));

connection.on('open', () => {
    logger.info('Connected to the database');

    app.listen(PORT, () => {
        logger.info(`Server running on ${8080}`);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(entryRouter);
app.use(authenticationRouter);

app.get('/', (req, res) => {
    res.json(req.user);
});

app.get('/status', (req, res) => {
    res.sendStatus(status.OK);
});
