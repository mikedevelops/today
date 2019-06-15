import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import entryReducer from './reducers/entryReducer';
import dateReducer from './reducers/dateReducer';
import userReducer from './reducers/userReducer';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import { getEntries, resetReadonly } from './actions/entryActions';

const root = document.getElementById('root');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const history = createBrowserHistory();
const store = createStore(combineReducers({
    entry: entryReducer,
    date: dateReducer,
    router: connectRouter(history),
    user: userReducer,
}), composeEnhancers(applyMiddleware(thunk)));

const mapStateToProps = ({ user, router }) => {
    return {
        user,
        router,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetReadonly: () => dispatch(resetReadonly()),
        hydrate: token => dispatch(getEntries(token)),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConnectedApp/>
        </ConnectedRouter>
    </Provider>,
    root
);
