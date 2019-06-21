const mongoose = require('mongoose');
const { ACTIVITY_BOOLEAN } = require('./activityBlueprint');

const activity = new mongoose.Schema({
    icon: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: [ACTIVITY_BOOLEAN], required: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
});

module.exports = activity;
