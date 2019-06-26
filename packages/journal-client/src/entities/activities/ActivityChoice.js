import AbstractActivity from './AbstractActivity';
import { ACTIVITY_CHOICE } from '../../config/app.config';

export default class ActivityChoice extends AbstractActivity {
    /**
     * @param {string|null} id
     * @param {string} icon
     * @param {string} name
     * @param {string} label
     * @param {string[]} choices
     * @param {string} value
     */
    constructor(id = null, icon, name, label, choices, value) {
        super(id, icon, ACTIVITY_CHOICE, name, value, label);

        this.choices = choices;
    }

    clone() {
        return new ActivityChoice(
            this.id,
            this.icon,
            this.name,
            this.label,
            this.choices,
            this.value,
        );
    }
}
