const mongoose = require('mongoose');
const AbstractActivity = require('../activity/abstractActivity');

const schema = new mongoose.Schema({
    version: { type: Number, required: true },
    activities: { type: [AbstractActivity], required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

schema.index({ version: 1 }, { unique: true });

const activities = schema.path('activities');

module.exports = { schema, activities };
