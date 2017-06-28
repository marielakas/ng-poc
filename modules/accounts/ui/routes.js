import React from 'react';
import { Switch } from 'react-router-dom';
import { accountsRoutes } from './containers/Accounts';
import { operationalAccountsRoutes } from './containers/OperationalAccounts';

const accounts = ({ accounts, operationalAccounts }) => (
     <Switch>
        { accountsRoutes(accounts) }
        { operationalAccountsRoutes(operationalAccounts) }
    </Switch>
);

export default accounts;