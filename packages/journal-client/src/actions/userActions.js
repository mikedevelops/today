import store from 'store';
import userFactory from '../factories/userFactory';

export const USER_SAVE = 'USER_SAVE';
export const USER_CLEAR = 'USER_CLEAR';
export const USER_HYDRATE_START = 'USER_HYDRATE_START';
export const USER_HYDRATE_SUCCESS = 'USER_HYDRATE_SUCCESS';
export const USER_HYDRATE_ERROR = 'USER_HYDRATE_ERROR';

/**
 * Save user and update local store
 * @param user
 * @return {Function}
 */
export const saveUser = user => (dispatch) => {
    const newUser = userFactory(user.id, user.username, user.token);

    store.set('user', newUser);
    dispatch({
        type: USER_SAVE,
        user: newUser,
    });
};

/**
 * Clear user state
 * @return {{type: string}}
 */
export const clearUser = () => ({
    type: USER_CLEAR,
});
