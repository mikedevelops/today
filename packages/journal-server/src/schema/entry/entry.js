const mongoose = require('mongoose');
const AbstractActivity = require('../activity/abstractActivity');

const schema = new mongoose.Schema({
    content: { type: String, default: '' },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activities: [AbstractActivity],
    lastUpdated: { type: Date, require: true },
});

schema.index({ date: 1, user: 1 }, { unique: true });

const activities = schema.path('activities');

module.exports = { schema, activities };
