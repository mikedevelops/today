import React from 'react';
import { ACTIVITY_BOOLEAN, ACTIVITY_CHOICE } from '../../config/app.config';
import BooleanActivity from './BooleanActivity';
import ChoiceActivity from './ChoiceActivity';

/**
 * @param {AbstractActivity} activity
 * @param {boolean} readonly
 * @param {function} submit
 * @return {*}
 */
export default ({ activity, readonly, submit }) => {
    const activityProps = { submit, readonly };

    const input = () => {
        switch (activity.getType()) {
            case ACTIVITY_BOOLEAN:
                return <BooleanActivity {...activityProps} activity={activity}/>;
            case ACTIVITY_CHOICE:
                return <ChoiceActivity {...activityProps} activity={activity}/>;
            default:
                throw new Error(`Unable to find component for activity with type ${activity.getType()}`);
        }
    };

    return (
        <div className="activity">
            <pre>{ activity.getId() }</pre>
            { input() }
        </div>
    );
};
