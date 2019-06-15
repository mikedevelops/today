export default class Range {
    constructor() {
        /**
         * @type {Month[]}
         */
        this.months = [];
    }

    /**
     * @param {Month} month
     */
    addMonth(month) {
        this.months.push(month);
    }

    /**
     * @param {number} month
     */
    getMonth(month) {
        return this.months.find(m => m.month === month);
    }
}
