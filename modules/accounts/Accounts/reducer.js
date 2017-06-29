import defaultState from './model';
import { GET_ACCOUNTS } from './actions/actionTypes';

const accounts = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ACCOUNTS: 
            return state;
        default:
            return state;
    }
};

export default accounts;

// add selectors