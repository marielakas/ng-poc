import React from 'react';
import Route from 'lib/Route';
import OperationalAccounts from './OperationalAccounts';

const operationalAccountsRoutes = (props) => {
    return <Route exact path='/accounts/operational' component={OperationalAccounts} {...props} />
}

export default operationalAccountsRoutes;