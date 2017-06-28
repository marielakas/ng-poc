import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createApp from './router';
import configureStore  from './store';
import reducer from './reducer';

const history = createBrowserHistory();
const store = configureStore({ reducer });

render(createApp({ store, history }), document.getElementById('app'));