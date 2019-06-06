export default class User {
    /**
     * @param {string} id
     * @param {string} token
     * @param {string} username
     * @param {Activity[]} activities
     */
    constructor(id, token, username, activities = []) {
        /*
         * @type {string}
         */
        this.username = username;

        /**
         * @type {Activity[]}
         */
        this.activities = activities;

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
     * @return {Activity[]}
     */
    getActivities() {
        return this.activities;
    }

    /**
     * @return {string}
     */
    getToken() {
        return this.token;
    }
}
