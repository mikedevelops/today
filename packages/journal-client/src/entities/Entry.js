export default class Entry {
    /**
     * @param {moment.Moment} date
     * @param {string} content
     * @param {Activity[]} activities
     * @param {string|null} id
     * @param {moment.Moment} lastUpdated
     */
    constructor(date, content, activities, id, lastUpdated) {
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

        /**
         * @type {boolean}
         */
        this.dirty = false;

        /**
         * @type {moment.Moment|null}
         */
        this.lastUpdated = lastUpdated;
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
        if (content === this.content) {
            return;
        }

        this.dirty = true;
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

    /**
     * @return {boolean}
     */
    isDirty() {
        if (this.dirty === true) {
            return true;
        }

        return this.activities.filter(a => a.isDirty()).length > 0;
    }

    clean() {
        this.dirty = false;
        this.activities.forEach(a => a.clean());
    }

    getSlug() {
        return `/entry/${this.date.format('YYYY-MM-DD')}`;
    }

    /**
     * @param {moment.Moment} date
     * @return {boolean}
     */
    isDate(date) {
        return this.date.isSame(date);
    }

    /**
     * @return {Entry}
     */
    clone() {
        return new Entry(this.date, this.content, this.activities.map(a => a.clone()), this.id);
    }

    /**
     * @return {moment.Moment|null}
     */
    getLastUpdated() {
        return this.lastUpdated;
    }
}
