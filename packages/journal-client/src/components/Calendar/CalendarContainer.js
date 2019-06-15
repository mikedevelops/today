import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = ({ entry, date, user }) => {
    return {
        entries: entry.items,
        today: date.today,
        user,
    };
};

export default connect(mapStateToProps)(Calendar);
