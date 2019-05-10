import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = ({ date, entry, user }) => {
    return {
        today: date.today,
        entries: entry.items,
        user,
    };
};

export default connect(mapStateToProps)(Dashboard);
