import { combineReducers } from 'redux';
import { accountsReducer } from 'modules/accounts/ui';
import { accounts } from 'modules/accounts/ui/containers/Accounts';
import { usersReducer } from 'modules/users/ui';

const reducer = combineReducers({
    ...accountsReducer,
    accounts,
    ...usersReducer
});

export default reducer;