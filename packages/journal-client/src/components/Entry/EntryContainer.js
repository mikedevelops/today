import { connect } from 'react-redux';
import Entry from './Entry';
import entryFactory from '../../factories/entryFactory';
import { saveEntry, toggleReadOnly } from '../../actions/entryActions';

const mapStateToProps = ({ date, user, entry }, props) => {
    let mappedEntry = props.entry;

    if (mappedEntry === undefined) {
        mappedEntry = entryFactory(null, date.today, '', user.getActivities());
    }

    const readonly = mappedEntry.getDate().isSame(date.today) ? false : entry.readonly;

    return {
        entry: mappedEntry,
        user,
        readonly,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry, token) => dispatch(saveEntry(entry, token)),
        toggleReadonly: () => dispatch(toggleReadOnly()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
