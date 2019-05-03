const express = require('express');
const status = require('http-status');
const winston = require('winston');
const app = express();

require('dotenv').config();

const PORT = 8080 || process.env.PORT;
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.cli(),
        }),
    ],
});

app.get('/status', (req, res) => {
    res.sendStatus(status.OK);
});

app.listen(PORT, () => {
    logger.info(`Server running on ${8080}`);
});
