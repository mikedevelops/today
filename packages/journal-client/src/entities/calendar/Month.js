export default class Month {
    constructor(month) {
        /**
         * @type {number}
         */
        this.month = month;

        /**
         * @type {Week[]}
         */
        this.weeks = [];
    }

    /**
     * @param {Week} week
     */
    addWeek(week) {
        this.weeks.push(week);
    }

    /**
     * @param {number} week
     * @return {Week}
     */
    getWeek(week) {
        return this.weeks.find(w => w.week === week);
    }
}
