import {
    CLEAR_ENTRIES,
    ENTRIES_GET_ALL_SUCCESS,
    ENTRY_READONLY_RESET,
    ENTRY_SAVE_SUCCESS,
    ENTRY_TOGGLE_READONLY,
} from '../actions/entryActions';
import moment from 'moment';
import { getDatesInRange } from '../utilities/date';
import entryFactory from '../factories/entryFactory';

const today = moment().startOf('day');
const range = getDatesInRange(today.clone().startOf('year'), today);
const initialState = {
    items: range.map(date => entryFactory(null, date, null)),
    readonly: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTRY_SAVE_SUCCESS:
        return Object.assign({}, state, {
            items: state.items.map((entry) => {
                if (entry.getKey() === action.entry.getKey()) {
                    return action.entry;
                }

                return entry;
            }),
        });

    case ENTRIES_GET_ALL_SUCCESS:
        return Object.assign({}, state, {
            items: state.items.map((entry) => {
                const actionEntry = action.entries.find(e => e.getKey() === entry.getKey());

                if (actionEntry !== undefined) {
                    return actionEntry;
                }

                return entry;
            }),
        });

    case CLEAR_ENTRIES:
        return Object.assign({}, state, {
            items: [],
        });

    case ENTRY_TOGGLE_READONLY:
        return Object.assign({}, state, {
            readonly: !state.readonly,
        });

    case ENTRY_READONLY_RESET:
        return Object.assign({}, state, {
            readonly: true,
        });

    default:
        return state;
    }
};
