import { connect } from 'react-redux';
import { clearUser } from '../../actions/userActions';
import Logout from './Logout';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(clearUser()),
    };
};

export default connect(() => ({}), mapDispatchToProps)(Logout);
