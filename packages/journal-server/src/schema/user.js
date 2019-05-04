const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String, select: false },
});
