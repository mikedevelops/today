import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../../actions/authenticationActions';

const mapPropsToState = ({ user }) => {
    return {
        user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submit: user => dispatch(login(user)),
    };
};

export default connect(mapPropsToState, mapDispatchToProps)(Login);
