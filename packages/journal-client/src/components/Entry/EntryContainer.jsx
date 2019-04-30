import moment from 'moment';
import { connect } from 'react-redux';
import Entry from './Entry';

const mapStateToProps = (state, props) => {
    // TODO: this could be a moment already...
    // it is converted to a moment in the parent component
    const date = moment(props.date, 'DD-MM-YYYY').toDate();

    return {
        entry: state.entry.items[date],
        edit: state.entry.edit,
};
};

export default connect(mapStateToProps)(Entry);
