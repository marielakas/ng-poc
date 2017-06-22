import React from 'react';
import { Route } from 'react-router-dom';
import Accounts from './Accounts';

// pass path from above?
const accountsRoutes = () => (
    <Route exact path='/accounts' component={Accounts} />
);

export default accountsRoutes;