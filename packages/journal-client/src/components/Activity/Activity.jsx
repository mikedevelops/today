import React from 'react';
import { ACTIVITY_BOOLEAN } from '../../config/app.config';
import BooleanActivity from './BooleanActivity';

/**
 * @param {Activity} activity
 * @param {boolean} readonly
 * @param {function} submit
 * @return {*}
 */
export default ({ activity, readonly, submit }) => {
    const activityProps = { submit, readonly };

    const input = () => {
        if (activity.getType() === ACTIVITY_BOOLEAN) {
            return <BooleanActivity {...activityProps} activity={activity}/>;
        }
    };

    return (
        <div className="activity">
            <pre>{ activity.getId() }</pre>
            { input() }
        </div>
    );
};
