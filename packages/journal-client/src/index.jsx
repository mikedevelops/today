import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import entryReducer from './reducers/entryReducer';

const root = document.getElementById('root');
const store = createStore(entryReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
