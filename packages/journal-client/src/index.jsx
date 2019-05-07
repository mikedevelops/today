import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import entryReducer from './reducers/entryReducer';
import dateReducer from './reducers/dateReducer';
import userReducer from './reducers/userReducer';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { getEntries } from './actions/entryActions';

const root = document.getElementById('root');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const store = createStore(combineReducers({
    entry: entryReducer,
    date: dateReducer,
    router: connectRouter(history),
    user: userReducer,
}), composeEnhancers(applyMiddleware(thunk)));

const mapDispatchToProps = dispatch => {
    return {
        hydrateEntries: token => dispatch(getEntries(token)),
    }
};
const ConnectedApp = connect(state => state, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConnectedApp/>
        </ConnectedRouter>
    </Provider>,
    root
);
