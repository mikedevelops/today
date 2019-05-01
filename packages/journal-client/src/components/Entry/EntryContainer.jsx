import { connect } from 'react-redux';
import Entry from './Entry';
import { ViewEntry } from './ViewEntry';

const mapStateToProps = (state, props) => {
    return {
        entry: state.entry.items[props.date.unix()],
        edit: state.entry.edit,
        View: ViewEntry,
    };
};

export default connect(mapStateToProps)(Entry);
