import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import entryReducer from './reducers/entryReducer';
import dateReducer from './reducers/dateReducer';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter } from 'connected-react-router';

const root = document.getElementById('root');
const history = createBrowserHistory();
const store = createStore(combineReducers({
    entry: entryReducer,
    date: dateReducer,
    router: connectRouter(history)
}));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    root
);
