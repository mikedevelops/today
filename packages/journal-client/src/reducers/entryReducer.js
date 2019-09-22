import { List, Map } from 'immutable';
import {
  CLEAR_ENTRIES,
  ENTRIES_GET_ALL_SUCCESS,
  ENTRY_SAVE_SUCCESS,
} from '../actions/entryActions';

const initialState = Map({
  items: List(),
  activities: List(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTRY_SAVE_SUCCESS: {
      const index = state.get('items').findIndex(entry => entry.id === action.entry.id);
      const newActivities = [];

      action.entry.activities.forEach((activity) => {
        if (state.get('activities').find(a => a.name === activity.name) !== undefined) {
          return;
        }

        newActivities.push(activity);
      });

      if (index === -1) {
        return state.set('items', state.get('items')
          .push(action.entry))
          .set('activities', state.get('activities').concat(newActivities));
      }

      return state.set('items', state.get('items')
        .set(index, action.entry))
        .set('activities', state.get('activities').concat(newActivities));
    }

    case ENTRIES_GET_ALL_SUCCESS:
      return state
        .set('items', state.get('items').concat(action.entries))
        .set('activities', state.get('activities').concat(action.activities));

    case CLEAR_ENTRIES:
      return state.set('items', List());

    default:
      return state;
  }
};
