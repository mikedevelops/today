import { connect } from 'react-redux';
import Entry from './Entry';
import { saveEntry, toggleReadOnly } from '../../actions/entryActions';

const mapStateToProps = ({ date, user, entry }, props) => {
    const readonly = props.entry.getDate().isSame(date.today) ? false : entry.readonly;

    return {
        entry: props.entry,
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
