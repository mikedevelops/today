import { connect } from 'react-redux';
import { clearUser } from '../../actions/userActions';
import Logout from './Logout';
import { clearEntries } from '../../actions/entryActions';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => [
            dispatch(clearUser()),
            dispatch(clearEntries()),
        ],
    };
};

export default connect(() => ({}), mapDispatchToProps)(Logout);
