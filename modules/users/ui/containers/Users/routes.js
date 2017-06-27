import React from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';

// pass path from above?
const usersRoutes = () => (
    <Route exact path='/users' component={Users} />
);

export default usersRoutes;