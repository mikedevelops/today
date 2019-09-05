import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import entryReducer from './reducers/entryReducer';
import userReducer from './reducers/userReducer';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter } from 'connected-react-router';

const root = document.getElementById('root');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const history = createBrowserHistory();
const store = createStore(combineReducers({
    entries: entryReducer,
    router: connectRouter(history),
    user: userReducer,
}), composeEnhancers(applyMiddleware(thunk)));

const mapStateToProps = ({ user, router }) => {
    return {
        user,
        router,
    }
};

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConnectedApp/>
        </ConnectedRouter>
    </Provider>,
    root
);
