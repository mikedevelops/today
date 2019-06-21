const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content: { type: String, default: '' },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    lastUpdated: { type: Date, require: true },
});

module.exports = schema;
