import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(NavBar);
