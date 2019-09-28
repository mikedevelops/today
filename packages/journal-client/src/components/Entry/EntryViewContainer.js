import { connect } from 'react-redux';
import { EntryView } from './EntryView';
import { saveEntryActivities } from '../../actions/entryActions';

const props = (props, { entry }) => {
  return {
    entry,
    token: props.user.token,
  };
};

const dispatch = dispatch => {
  return {
    saveActivities: (entry, activities, token) => dispatch(saveEntryActivities(entry, activities, token)),
  };
};

export default connect(props, dispatch)(EntryView);
