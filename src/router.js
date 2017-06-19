import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

const createApp = ({ store, history, App }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App} />
            </Router>
        </Provider>
    )
};

export default createApp;