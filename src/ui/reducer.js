import { combineReducers } from 'redux';
import { accountsReducer } from 'modules/accounts';
import { accounts } from 'modules/accounts/Accounts';
import { usersReducer } from 'modules/users';

const reducer = combineReducers({
    ...accountsReducer,
    // accounts,
    ...usersReducer
});


export default reducer;