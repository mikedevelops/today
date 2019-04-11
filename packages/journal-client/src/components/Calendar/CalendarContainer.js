import { connect } from 'react-redux';
import Calendar from './Calendar';

const props = state => ({
    entries: state.entry.items,
    today: state.date.today,
});

export default connect(props)(Calendar);
