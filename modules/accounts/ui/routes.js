import React from 'react';
import { Switch } from 'react-router-dom';
import { accountsRoutes } from './containers/Accounts';

const accounts = ({ accounts }) => (
     <Switch>
        { accountsRoutes(accounts) }
    </Switch>
);

export default accounts;