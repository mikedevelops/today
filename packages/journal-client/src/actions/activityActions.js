import axios from 'axios';
import activityFactory from '../factories/activityFactory';

export const ACTIVITY_VERSION_GET_START = 'ACTIVITY_VERSION_GET_START';
export const ACTIVITY_VERSION_GET_SUCCESS = 'ACTIVITY_VERSION_GET_SUCCESS';
export const ACTIVITY_VERSION_GET_ERROR = 'ACTIVITY_VERSION_GET_ERROR';

/**
 * @return {{type: string}}
 */
export const getActivityVersionStart = () => ({
    type: ACTIVITY_VERSION_GET_START,
});

/**
 * @param {string} error
 * @return {{type: string}}
 */
export const getActivityVersionError = (error) => ({
    type: ACTIVITY_VERSION_GET_ERROR,
    error,
});

/**
 * @param {AbstractActivity[]} activities
 * @return {{activities: AbstractActivity[], type: string}}
 */
export const getActivityVersionSuccess = (activities) => ({
    type: ACTIVITY_VERSION_GET_SUCCESS,
    activities,
});

/**
 * Get the activity version for the current user
 * @param {string} token
 * @return {Function}
 */
export const getActivityVersion = (token) => (dispatch) => {
    dispatch(getActivityVersionStart());

    // TODO: this needs abstracting
    axios.get('http://localhost:8080/activity', {
        headers: { Authorization: `Bearer ${token}` },
        json: true,
    }).then(({ data }) => {
        dispatch(getActivityVersionSuccess(
            data.map((activity) => {
                return activityFactory(
                    null,
                    activity.type,
                    activity.name,
                    activity.icon,
                    activity.label,
                    activity.defaultValue,
                    activity.choices,
                );
            }),
        ));
    }).catch((error) => {
        dispatch(getActivityVersionError(error));
    });
};
