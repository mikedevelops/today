import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { hydrateUser } from '../../actions/userActions';
import { resetReadonly } from '../../actions/entryActions';

const mapStateToProps = ({ date, entry, user, router }) => {
    return {
        today: date.today,
        entries: entry.items,
        user,
        location: router.location,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hydrateUser: id => dispatch(hydrateUser(id)),
        resetReadonly: () => dispatch(resetReadonly()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
