require('dotenv').config();

module.exports = {
    dbConnectionUri: process.env.DB_HOST,
    es6: true,
};
