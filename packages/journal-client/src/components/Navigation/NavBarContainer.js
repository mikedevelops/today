import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = ({ user }) => {
    return {
        user,
    };
};

export default connect(mapStateToProps)(NavBar);
