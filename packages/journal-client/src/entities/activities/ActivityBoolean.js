import AbstractActivity from './AbstractActivity';
import { ACTIVITY_CHOICE } from '../../config/app.config';

export default class ActivityBoolean extends AbstractActivity {
    /**
     * @param {string} id
     * @param {string} icon
     * @param {string} name
     * @param {string} label
     * @param {boolean} value
     */
    constructor(id, icon, name, label, value) {
        super(id, icon, ACTIVITY_CHOICE, name, label, value);
    }

    clone() {
        return new ActivityBoolean(this.id, this.icon, this.name, this.label, this.value);
    }
}
