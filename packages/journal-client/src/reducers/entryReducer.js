import {
  CLEAR_ENTRIES,
  ENTRIES_GET_ALL_SUCCESS,
  ENTRY_SAVE_SUCCESS,
} from '../actions/entryActions';
import { List, Map } from 'immutable';

const initialState = Map({
  items: List(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_SAVE_SUCCESS:
      return state.set('items', state.get('items').push(action.entry));

    case ENTRIES_GET_ALL_SUCCESS:
      return state.set('items', state.get('items')
        .concat(action.entries));

    case CLEAR_ENTRIES:
      return state.set('items', List());

    default:
      return state;
  }
};
