import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import App from './App';

const createApp = ({ store, history }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App} />
            </Router>
        </Provider>
    )
};

export default createApp;