import defaultState from './model';
import { GET_ACCOUNTS } from './actions/actionTypes';

export const accounts = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ACCOUNTS: 
            return state;
        default:
            return state;
    }
};