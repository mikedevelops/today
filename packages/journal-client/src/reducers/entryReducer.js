import { SAVE_ENTRY, EDIT_ENTRY } from '../actions/entryActions';

const initialState = {
    entries: [],
    edit: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SAVE_ENTRY:
        return Object.assign({}, state, {
            entries: [...state.entries, action.entry],
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
