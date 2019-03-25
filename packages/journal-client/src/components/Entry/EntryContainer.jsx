import { connect } from 'react-redux';
import Entry from './Entry';
import { editEntry, saveEntry } from '../../actions/entryActions';
import { isToday } from '../../utilities/date';

const mapStateToProps = (state) => {
    return {
        entry: state.entry.entries.find(e => isToday(e.getDate(), state.date.today)),
        edit: state.entry.edit,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: entry => dispatch(saveEntry(entry)),
    handleEdit: () => dispatch(editEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
