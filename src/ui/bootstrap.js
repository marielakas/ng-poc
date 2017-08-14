import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createApp from './router';
import store  from './store';

const history = createBrowserHistory();

render(createApp({ store, history }), document.getElementById('app'));