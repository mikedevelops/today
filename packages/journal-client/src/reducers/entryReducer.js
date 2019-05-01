import moment from 'moment';
import { EDIT_ENTRY, SAVE_ENTRY } from '../actions/entryActions';
import { getDatesInRange } from '../utilities/date';
import { generateRandomEntries } from '../utilities/entry';

const randomEntries = generateRandomEntries(getDatesInRange(moment('1-1-2019'), moment(new Date()).subtract(1, 'days')), 0.33);
const initialState = {
    items: randomEntries,
    edit: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SAVE_ENTRY:
        return Object.assign({}, state, {
            items: Object.assign({}, state.items, { [action.entry.getId()]: action.entry }),
            edit: false,
        });
    case EDIT_ENTRY:
        return Object.assign({}, state, {
            edit: true,
        });
    default:
        return state;
    }
};
