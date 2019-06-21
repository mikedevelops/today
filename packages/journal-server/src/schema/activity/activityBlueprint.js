const mongoose = require('mongoose');

const ACTIVITY_BOOLEAN = 'ACTIVITY_BOOLEAN';
const ACTIVITY_CHOICE = 'ACTIVITY_CHOICE';

const activityBlueprintSchema = new mongoose.Schema({
    icon: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: [ACTIVITY_BOOLEAN, ACTIVITY_CHOICE], required: true },
    defaultValue: { type: mongoose.Schema.Types.Mixed, required: true },
});

module.exports = { ACTIVITY_BOOLEAN, activityBlueprintSchema };
