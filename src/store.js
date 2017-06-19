import { createStore, applyMiddleware } from 'redux';

const configureStore = ({ appReducer, middlewares = [] }) => {
    return createStore(appReducer, applyMiddleware(...middlewares));
}

export default configureStore;