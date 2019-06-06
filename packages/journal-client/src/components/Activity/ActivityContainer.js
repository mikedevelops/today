import { connect } from 'react-redux';
import Activity from './Activity';

const mapStateToProps = (state, props) => {
    return {
        submit: props.submit,
        activity: props.activity,
        entry: state.entry.items[state.date.today.unix()],
        user: state.user,
    };
};

export default connect(mapStateToProps)(Activity);
