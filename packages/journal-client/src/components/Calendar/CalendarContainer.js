import { connect } from 'react-redux';
import Calendar from './Calendar';
import { getEntries } from '../../actions/entryActions';

const mapStateToProps = ({ entry, date, user }) => {
    return {
        entries: entry.items,
        today: date.today,
        user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hydrate: (token) => dispatch(getEntries(token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
