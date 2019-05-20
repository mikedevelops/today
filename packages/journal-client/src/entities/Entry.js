export default class Entry {
    /**
     * @param {moment.Moment} date
     * @param {string} content
     * @param {Activity[]} activities
     * @param {string|null} id
     */
    constructor(date, content, activities, id) {
        /**
         * @type {moment.Moment}
         */
        this.date = date;

        /**
         * @type {string}
         */
        this.content = content;

        /**
         * @type {number}
         */
        this.key = this.date.unix();

        /**
         * @type {Activity[]}
         */
        this.activities = activities;

        /**
         * @type {string|null}
         */
        this.id = id;
    }

    /**
     * @returns {string}
     */
    getContent() {
        return this.content;
    }

    /**
     * @param {string} content
     */
    setContent(content) {
        this.content = content;
    }

    /**
     * @returns {moment.Moment}
     */
    getDate() {
        return this.date;
    }

    /**
     * @param {moment.Moment} date
     */
    setDate(date) {
        this.date = date;
    }

    /**
     * @return {number}
     */
    getKey() {
        return this.key;
    }

    /**
     * @return {Activity[]}
     */
    getActivities() {
        return this.activities;
    }

    /**
     * @return {string|null}
     */
    getId() {
        return this.id;
    }

    /**
     * @param {string} id
     */
    setId(id) {
        this.id = id;
    }
}
