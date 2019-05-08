import store from 'store';
import { USER_CLEAR, USER_SAVE } from '../actions/userActions';

const storageUser = store.get('user');

const initialState = {
    token: storageUser !== undefined ? storageUser.token : null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case USER_SAVE:
        return Object.assign({}, state, {
            token: action.user.token,
        });

    case USER_CLEAR:
        return Object.assign({}, state, {
            token: null,
        });

    default:
        return state;
    }
};
