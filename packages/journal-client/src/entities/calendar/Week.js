export default class Week {
    constructor(week) {
        /**
         * @type {number}
         */
        this.week = week;

        /**
         * @type {Entry[]}
         */
        this.entries = [];
    }

    /**
     * @param {Entry} entry
     */
    addEntry(entry) {
        this.entries.push(entry);
    }
}
