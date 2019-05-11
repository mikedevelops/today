import React from 'react';
import { connect } from 'react-redux';
import { saveEntry } from '../../actions/entryActions';
import Today from './Today';

const mapStateToProps = ({ entry, date, user }) => {
    const today = date.today.unix();
    return {
        entry: entry.items[today],
        date: date.today,
        user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry, token) => dispatch(saveEntry(entry, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
