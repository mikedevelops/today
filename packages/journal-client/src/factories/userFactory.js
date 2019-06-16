import User from '../entities/User';

/**
 * @param {string} id
 * @param {string} username
 * @param {string} token
 * @return {User}
 */
export default (id, username, token) => {
    return new User(id, token, username);
};
