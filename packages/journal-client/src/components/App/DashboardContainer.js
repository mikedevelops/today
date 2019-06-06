import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { hydrateUser } from '../../actions/userActions';

const mapStateToProps = ({ date, entry, user }) => {
    return {
        today: date.today,
        entries: entry.items,
        user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hydrateUser: id => dispatch(hydrateUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
