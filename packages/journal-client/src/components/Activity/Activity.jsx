import React from 'react';
import { ACTIVITY_BOOLEAN } from '../../config/app.config';
import BooleanActivity from './BooleanActivity';

/**
 * @param {Activity} activity
 * @return {*}
 */
export default ({ activity }) => {
    const input = () => {
        if (activity.getType() === ACTIVITY_BOOLEAN) {
            return <BooleanActivity activity={activity}/>;
        }
    };

    return (
        <div className="activity">
            { input() }
        </div>
    );
};
