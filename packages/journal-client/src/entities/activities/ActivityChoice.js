import AbstractActivity from './AbstractActivity';
import { ACTIVITY_CHOICE } from '../../config/app.config';

export default class ActivityChoice extends AbstractActivity {
    /**
     * @param {string|null} id
     * @param {string} icon
     * @param {string} name
     * @param {string} label
     * @param {string} value
     * @param {string[]} choices
     */
    constructor(id = null, icon, name, label, value, choices) {
        super(id, icon, ACTIVITY_CHOICE, name, label, value);

        this.choices = choices;
    }

    clone() {
        return new ActivityChoice(
            this.id,
            this.icon,
            this.name,
            this.label,
            this.value,
            this.choices,
        );
    }

    getChoices() {
        return this.choices;
    }
}
