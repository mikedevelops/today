import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { resetReadonly } from '../../actions/entryActions';
import moment from 'moment';

const mapStateToProps = ({ date, entry, user, router }, props) => {
    const paramDate = moment(props.match.params.date, 'YYYY-MM-DD');
    const mappedEntry = entry.items.find(e => e.getKey() === paramDate.unix());

    return {
        today: date.today,
        entries: entry.items,
        entry: mappedEntry !== undefined ? mappedEntry : entry.items[entry.items.length - 1],
        user,
        location: router.location,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetReadonly: () => dispatch(resetReadonly()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
