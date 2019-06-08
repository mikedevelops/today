import { connect } from 'react-redux';
import Entry from './Entry';
import entryFactory from '../../factories/entryFactory';
import { saveEntry } from '../../actions/entryActions';

const mapStateToProps = ({ date, user }, { entry }) => {
    let mappedEntry = entry;

    if (entry === undefined) {
        mappedEntry = entryFactory(null, date.today, '', user.getActivities());
    }

    return {
        entry: mappedEntry,
        user,
        readonly: !mappedEntry.getDate().isSame(date.today),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry, token) => dispatch(saveEntry(entry, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
