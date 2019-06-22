const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    version: { type: Number, required: true },
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ActivityBlueprint' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

schema.index({ version: 1, user: 1 }, { unique: true });

module.exports = schema;
