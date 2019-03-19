import { SAVE_ENTRY } from '../actions/entryActions';

const initialState = {
    entries: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SAVE_ENTRY:
        return Object.assign({}, state, {
            entries: [...state.entries, action.entry],
        });
    default:
        return state;
    }
};
