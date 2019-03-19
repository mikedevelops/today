export default class Entry {
    constructor(date, contents = []) {
        this.date = date;
        this.contents = contents;
    }

    /**
     * Get entry contents
     * @returns {string[]}
     */
    getContents() {
        return this.contents;
    }

    /**
     * Get entry date
     * @returns {Date}
     */
    getDate() {
        return this.date;
    }
}
