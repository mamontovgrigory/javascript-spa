require("babel-polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import routes from './app/routes';
import configureStore from './app/redux/configureStore';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store} key="provider">
        <Router
            history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);