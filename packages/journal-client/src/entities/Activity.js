export default class Activity {
    /**
     * @param {string} icon
     * @param {string} type
     * @param {string} name
     * @param {string|boolean} value
     * @param {string|null} label
     */
    constructor(icon, type, name, value = null, label = null) {
        this.icon = icon;
        this.type = type;
        this.name = name;
        this.label = label === null ? name : label;
        this.value = value;
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
     * @return {string|null}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {string|null} value
     */
    setValue(value) {
        this.value = value;
    }
}
