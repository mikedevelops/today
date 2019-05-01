export default class Entry {
    /**
     * @param {Moment.moment} date
     * @param {string} contents
     */
    constructor(date, contents = []) {
        this.date = date;
        this.contents = contents;
        this.id = this.date.unix();
    }

    /**
     * @returns {string[]}
     */
    getContents() {
        return this.contents;
    }

    /**
     * @param {string} content
     */
    setContents(content) {
        this.contents = content;
    }

    /**
     * @returns {Moment.moment}
     */
    getDate() {
        return this.date;
    }

    /**
     * @param {Moment.moment} date
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
