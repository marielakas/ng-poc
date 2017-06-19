import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createApp from './router';
import configureStore  from './store';
import appReducer from './appReducer';
import App from './containers/App';

const history = createBrowserHistory();
const store = configureStore({ appReducer });

render(createApp({ store, history, App }), document.getElementById('app'));