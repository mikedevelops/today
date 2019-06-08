import { connect } from 'react-redux';
import { EntryTools } from './EntryTools';

const mapStateToProps = ({ date, entry }, props) => {
    return {
        entries: entry.items,
        entry: props.entry,
        today: date,
    };
};

export default connect(mapStateToProps)(EntryTools);
