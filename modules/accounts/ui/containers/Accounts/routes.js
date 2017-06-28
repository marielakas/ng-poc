import React from 'react';
import Route from 'lib/components/Route';
import Accounts from './Accounts';

const accountsRoutes = (props) => (
    <Route exact path='/accounts' component={Accounts} {...props} />
);

export default accountsRoutes;