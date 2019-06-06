import React from 'react';
import { ACTIVITY_BOOLEAN } from '../../config/app.config';
import BooleanActivity from './BooleanActivity';

/**
 * @param {Activity} activity
 * @param {User} user
 * @param {Entry} entry
 * @param {function} submit
 * @return {*}
 */
export default ({ activity, user, entry, submit }) => {
    const activityProps = { user, entry, submit };

    const input = () => {
        if (activity.getType() === ACTIVITY_BOOLEAN) {
            return <BooleanActivity {...activityProps} activity={activity}/>;
        }
    };

    return (
        <div className="activity">
            { input() }
        </div>
    );
};
