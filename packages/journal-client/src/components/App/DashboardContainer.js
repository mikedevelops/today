import { connect } from 'react-redux';
import moment from 'moment';
import Dashboard from './Dashboard';
import { getEntries, saveEntry } from '../../actions/entryActions';

const mapProps = ({ entries, user, router }, props) => {
  const paramDate = moment(props.match.params.date, 'YYYY-MM-DD');
  const items = entries.get('items');
  const mappedEntry = items.find(e => e.createdAt.unix() === paramDate.unix());

  return {
    entries: items,
    entry: mappedEntry !== undefined ? mappedEntry : null,
    token: user.token,
    location: router.location,
  };
};

const mapDispatch = dispatch => ({
  hydrate: token => dispatch(getEntries(token)),
  saveEntry: (entry, token) => dispatch(saveEntry(entry, token)),
});

export default connect(mapProps, mapDispatch)(Dashboard);
