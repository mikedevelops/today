import React from 'react';
import store from 'store';
import { Redirect } from 'react-router';

export default ({ logout }) => {
    // Clear the store
    store.clearAll();

    // Clear the app state
    logout();

    return <Redirect to="/login"/>;
};
