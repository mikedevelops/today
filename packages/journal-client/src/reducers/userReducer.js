import store from 'store';
import { USER_CLEAR, USER_SAVE } from '../actions/userActions';
import userFactory from '../factories/userFactory';

const storageUser = store.get('user');
const user = storageUser === undefined ? null : userFactory(
  storageUser.id, storageUser.username, storageUser.token, storageUser.activities,
);

export default (state = user, action) => {
  switch (action.type) {
    case USER_SAVE:
      return action.user;

    case USER_CLEAR:
      return null;

    default:
      return state;
  }
};
