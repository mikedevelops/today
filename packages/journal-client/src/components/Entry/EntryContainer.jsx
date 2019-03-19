import React from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';
import { saveEntry } from '../../actions/entryActions';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => ({
    submit: entry => dispatch(saveEntry(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
