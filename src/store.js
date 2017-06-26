import { createStore, applyMiddleware } from 'redux';

const configureStore = ({ reducer, middlewares = [] }) => {
    return createStore(reducer, applyMiddleware(...middlewares));
}

export default configureStore;