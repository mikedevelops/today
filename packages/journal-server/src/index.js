const express = require('express');
const status = require('http-status');
const app = express();
const mongoose = require('mongoose');
const entryRouter = require('./routes/entryRoute');
const logger = require('./services/logger');
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT = 8080 || process.env.PORT;

const { connection } = mongoose;

mongoose.connect('mongodb://localhost/journal', { useNewUrlParser: true });

connection.on('error', logger.error.bind(null));

connection.on('open', () => {
    logger.info('Connected to the database');

    app.listen(PORT, () => {
        logger.info(`Server running on ${8080}`);
    });
});

app.use(bodyParser.json());
app.use(entryRouter);

app.get('/status', (req, res) => {
    res.sendStatus(status.OK);
});
