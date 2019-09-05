import { connect } from 'react-redux';
import Entry from './Entry';
import { saveEntry } from '../../actions/entryActions';

const mapStateToProps = ({ user }, props) => ({
  entry: props.entry,
  token: user.token,
});

const mapDispatchToProps = (dispatch) => ({
  submit: (entry, token) => dispatch(saveEntry(entry, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
