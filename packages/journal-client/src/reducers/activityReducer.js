import { ACTIVITY_VERSION_GET_SUCCESS } from '../actions/activityActions';

const defaultState = {
    items: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
    case ACTIVITY_VERSION_GET_SUCCESS:
        return Object.assign({}, state, {
            items: action.activities,
        });
    default:
        return state;
    }
};
