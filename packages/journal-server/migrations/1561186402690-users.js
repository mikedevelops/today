require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../src/models/user/User');

/**
 * Adds my user
 */

export async function up() {
    await mongoose.connect(process.env.DB_HOST);

    return User.create([
        { username: 'mike@email.com', password: 'Admin123!' },
        { username: 'toni@email.com', password: 'Admin123!' },
    ]);
}

export async function down() {
    await mongoose.connect(process.env.DB_HOST);

    return User.remove();
}
