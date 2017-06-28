import React from 'react';
import Route from 'lib/components/Route';
import OperationalAccounts from './OperationalAccounts';

const operationalAccountsRoutes = (props) => (
    <Route exact path='/accounts/operational' component={OperationalAccounts} {...props} />
);

export default operationalAccountsRoutes;