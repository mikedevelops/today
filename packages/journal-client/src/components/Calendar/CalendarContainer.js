import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = (state) => {
    return {
        entries: state.entry.items,
        today: state.date.today,
    };
};

export default connect(mapStateToProps)(Calendar);
