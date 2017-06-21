import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accounts from './ui/containers/Accounts';

const testModuleRouting = () => (
     <Switch>
        <Route exact path='/accounts' component={Accounts} />
    </Switch>
);

export default testModuleRouting;