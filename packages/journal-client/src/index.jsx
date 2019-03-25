import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import entryReducer from './reducers/entryReducer';
import dateReducer from './reducers/dateReducer';

const root = document.getElementById('root');
const store = createStore(combineReducers({
    entry: entryReducer,
    date: dateReducer,
}));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
