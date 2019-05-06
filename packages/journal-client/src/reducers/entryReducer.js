import { ENTRY_EDIT, ENTRY_SAVE } from '../actions/entryActions';

const initialState = {
    items: {},
    edit: false,
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
    default:
        return state;
    }
};
