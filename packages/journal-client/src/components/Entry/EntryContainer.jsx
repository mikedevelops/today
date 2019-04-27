import { connect } from 'react-redux';
import moment from 'moment';
import Entry from './Entry';
import { editEntry, saveEntry } from '../../actions/entryActions';

const mapStateToProps = (state) => ({
    entry: state.entry.items[state.date.today],
    edit: state.entry.edit,
});

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: entry => dispatch(saveEntry(entry)),
    handleEdit: () => dispatch(editEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
