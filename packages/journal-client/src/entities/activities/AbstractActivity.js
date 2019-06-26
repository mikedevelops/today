export default class AbstractActivity {
    /**
     * @param {string|null} id
     * @param {string} icon
     * @param {string} type
     * @param {string} name
     * @param {string|null} label
     * @param {*|null} value
     */
    constructor(id = null, icon, type, name, label = null, value = null) {
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

    isSame(activity) {
        // if both activities have IDs, compare them
        if (this.id !== null && activity.getId() !== null) {
            return this.id === activity.getId();
        }

        // Otherwise check name and type
        return this.name === activity.getName() && this.type === activity.getType();
    }

    getIcon() {
        return this.icon;
    }
}
