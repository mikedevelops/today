export default class Activity {
    /**
     * @param {string|null} id
     * @param {string} icon
     * @param {string} type
     * @param {string} name
     * @param {*|null} value
     * @param {string|null} label
     * @param {boolean} enabled
     */
    constructor(id = null, icon, type, name, value = null, label = null, enabled) {
        /**
         * @type {string|null}
         */
        this.id = id;

        /**
         * @type {string}
         */
        this.icon = icon;

        /**
         * @type {string}
         */
        this.type = type;

        /**
         * @type {string}
         */
        this.name = name;

        /**
         * @type {*|null}
         */
        this.label = label === null ? name : label;

        /**
         * @type {string|boolean}
         */
        this.value = value;

        /**
         * @type {boolean}
         */
        this.enabled = enabled;

        /**
         * @type {boolean}
         */
        this.dirty = false;
    }

    /**
     * @return {string}
     */
    getType() {
        return this.type;
    }

    /**
     * @return {string}
     */
    getLabel() {
        return this.label;
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     * @return {*|null}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {*|null} value
     */
    setValue(value) {
        if (value === this.value) {
            return;
        }

        this.dirty = true;
        this.value = value;
    }

    /**
     * @return {string|null}
     */
    getId() {
        return this.id;
    }

    /**
     * @return {boolean}
     */
    isDirty() {
        return this.dirty;
    }

    clean() {
        this.dirty = false;
    }
}
