import { connect } from 'react-redux';
import { saveEntry } from '../../actions/entryActions';
import { Today } from './Today';

const mapStateToProps = ({ entry, date }) => {
    const today = date.today.unix();
    return {
        entry: entry.items[today],
        date: date.today,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry) => dispatch(saveEntry(entry)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
