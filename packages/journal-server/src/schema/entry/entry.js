const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content: { type: String, default: '' },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    lastUpdated: { type: Date, require: true },
});

schema.index({ user: 1, date: 1 }, { unique: true });

module.exports = schema;
