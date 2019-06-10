import {
    CLEAR_ENTRIES,
    ENTRIES_GET_ALL_SUCCESS,
    ENTRY_EDIT, ENTRY_READONLY_RESET,
    ENTRY_SAVE_SUCCESS,
    ENTRY_TOGGLE_READONLY
} from '../actions/entryActions';

const initialState = {
    items: {},
    readonly: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ENTRY_SAVE_SUCCESS:
        return Object.assign({}, state, {
            items: Object.assign({}, state.items, { [action.entry.getKey()]: action.entry }),
            edit: false,
        });

    case ENTRY_EDIT:
        return Object.assign({}, state, {
            edit: true,
        });

    case ENTRIES_GET_ALL_SUCCESS:
        return Object.assign({}, state, {
            items: action.entries.reduce((entries, entry) => {
                entries[entry.getKey()] = entry;

                return entries;
            }, {}),
        });

    case CLEAR_ENTRIES:
        return Object.assign({}, state, {
            items: {},
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
