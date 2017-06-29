import * as actions from './actions/actions';
import * as actionTypes from './actions/actionTypes';
import * as api from './actions/api';
import users from './reducer';
import usersRoutes from './routes';
import Users from './Users';

export { 
    actions, 
    actionTypes,
    api,
    usersRoutes,
    users
};

export default Users;