import moment from 'moment';
import { CLEAR_ENTRIES, ENTRIES_GET_ALL_SUCCESS, ENTRY_EDIT, ENTRY_SAVE } from '../actions/entryActions';
import entryFactory from '../factories/entryFactory';

const initialState = {
    items: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTRY_SAVE:
            return Object.assign({}, state, {
                items: Object.assign({}, state.items, { [action.entry.getId()]: action.entry }),
                edit: false,
            });
        case ENTRY_EDIT:
            return Object.assign({}, state, {
                edit: true,
            });
        case ENTRIES_GET_ALL_SUCCESS:
            return Object.assign({}, state, {
                items: action.entries.reduce((entries, entry) => {
                    const date = moment(entry.date);

                    entries[date.unix()] = entryFactory(date, entry.content);

                    return entries;
                }, {}),
            });
        case CLEAR_ENTRIES:
            return Object.assign({}, state, {
                items: {},
            });
        default:
            return state;
        }
};
