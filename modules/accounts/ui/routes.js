import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { accountsRoutes } from './containers/Accounts';

const accounts = () => (
     <Switch>
        { accountsRoutes() }
    </Switch>
);

export default accounts;