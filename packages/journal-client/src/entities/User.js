export default class User {
    /**
     * @param {string} id
     * @param {string} token
     * @param {string} username
     */
    constructor(id, token, username) {
        /*
         * @type {string}
         */
        this.username = username;

        /**
         * @type {string}
         */
        this.id = id;

        /**
         * @type {string}
         */
        this.token = token;
    }

    /**
     * @return {string}
     */
    getUsername() {
        return this.username;
    }

    /**
     * @return {string}
     */
    getToken() {
        return this.token;
    }
}
