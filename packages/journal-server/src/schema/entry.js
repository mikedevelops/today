const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    contents: { type: String, unique: true },
    date: { type: Date, unique: true },
});
