import { connect } from 'react-redux';
import Entry from './Entry';
import { saveEntry, toggleReadOnly } from '../../actions/entryActions';
import { getActivityVersion } from '../../actions/activityActions';

const mapStateToProps = ({ date, user, entry, activity }, props) => {
    const readonly = props.entry.getDate().isSame(date.today) ? false : entry.readonly;

    return {
        entry: props.entry,
        user,
        readonly,
        activities: activity.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry, token) => dispatch(saveEntry(entry, token)),
        toggleReadonly: () => dispatch(toggleReadOnly()),
        hydrateActivities: token => dispatch(getActivityVersion(token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
