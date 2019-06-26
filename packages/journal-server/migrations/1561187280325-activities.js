const mongoose = require('mongoose');
const ActivityVersion = require('../src/models/activity/ActivityVersion');
const User = require('../src/models/user/User');
const ActivityBlueprint = require('../src/models/activity/ActivityBlueprint');
const { ACTIVITY_BOOLEAN } = require('../src/schema/activity/activityBlueprint');

require('dotenv').config();

export async function up() {
    await mongoose.connect(process.env.DB_HOST);

    const users = await User.find();

    const activities = [
        await ActivityBlueprint.create({
            icon: 'FIX ME',
            name: 'climbed',
            type: ACTIVITY_BOOLEAN,
            defaultValue: false,
        }),
    ];

    for (const user of users) {
        const [current] = await ActivityVersion.find({ user: user._id }).sort({ version: -1 }).limit(1);
        let version = 1;

        if (current !== undefined) {
            version = current.version + 1;
        }

        await ActivityVersion.create({ version, activities, user: user._id });
    }
}

export async function down() {
    await mongoose.connect(process.env.DB_HOST);

    const users = await User.find();

    await ActivityBlueprint.remove({ name: 'climbed' });

    for (const user of users) {
        const current = await ActivityVersion.find({ user: user._id }).sort({ version: -1 }).limit(1);

        await ActivityVersion.findOneAndRemove({ version: current.version });
    }
}
