const mongoose = require('mongoose');
const activityVersion = require('../activity/activityVersion');

const schema = new mongoose.Schema({
    content: { type: String, default: '' },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activityVersion: [activityVersion.schema],
    lastUpdated: { type: Date, require: true },
});

schema.index({ date: 1, user: 1 }, { unique: true });

module.exports = schema;
