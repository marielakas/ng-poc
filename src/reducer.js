import { combineReducers } from 'redux';
import { accountsReducer } from '../modules/accounts/ui';

const reducer = combineReducers({
    ...accountsReducer
});

export default reducer;