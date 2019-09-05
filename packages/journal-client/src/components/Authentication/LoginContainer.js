import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../actions/authenticationActions';

const mapPropsToState = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  submit: user => dispatch(login(user)),
});

export default connect(mapPropsToState, mapDispatchToProps)(Login);
