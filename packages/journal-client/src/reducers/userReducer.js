import store from 'store';
import { USER_CLEAR, USER_SAVE } from '../actions/userActions';
import userFactory from '../factories/userFactory';

const storageUser = store.get('user');
const user = storageUser === undefined ? null : userFactory(
    storageUser.id, storageUser.username, storageUser.token, storageUser.activities
);

export default (state = user, action) => {
    switch (action.type) {
    case USER_SAVE:
        return userFactory(action.user.id, action.user.username, action.user.token, action.user.activities);

    case USER_CLEAR:
        return null;

    default:
        return state;
    }
};
