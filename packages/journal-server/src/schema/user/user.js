const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, select: false, required: true },
    activities: [
        {
            type: { type: String },
            name: { type: String },
            enabled: { type: Boolean },
        },
    ],
});
