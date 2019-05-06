import store from 'store';

export const USER_SAVE = 'USER_SAVE';
export const USER_CLEAR = 'USER_CLEAR';

/**
 * Save user and update local store
 * @param user
 * @return {Function}
 */
export const saveUser = user => dispatch => {
    store.set('user', user);
    dispatch({
        type: USER_SAVE,
        user,
    });
};

/**
 * Clear user state
 * @return {{type: string}}
 */
export const clearUser = () => ({
    type: USER_CLEAR,
});
