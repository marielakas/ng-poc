import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import createApp from './router';
import configureStore  from './store';
import appReducer from './appReducer';
import App from './containers/App';

const history = createBrowserHistory();
const store = configureStore({ appReducer });

createApp({ store, history, App });