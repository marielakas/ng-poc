import { combineReducers } from 'redux';

const test = (state = {}, action) => {
    return state;
}

const appReducer = combineReducers({ test });

export default appReducer;