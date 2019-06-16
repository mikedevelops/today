const mongoose = require('mongoose');
const AbstractActivity = require('../activity/abstractActivity');

const schema = new mongoose.Schema({
    version: { type: Number, required: true },
    activities: [AbstractActivity],
});

schema.index({ version: 1 }, { unique: true });

const activities = schema.path('activities');

module.exports = { schema, activities };
