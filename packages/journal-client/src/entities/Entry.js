export default class Entry {
    /**
     * @param {moment.Moment} date
     * @param {string} content
     */
    constructor(date, content = []) {
        this.date = date;
        this.content = content;
        this.id = this.date.unix();
    }

    /**
     * @returns {string[]}
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
    getId() {
        return this.id;
    }
}
