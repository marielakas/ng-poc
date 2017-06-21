import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Accounts, AccountEdit } from './ui/containers'

const testModuleRouting = () => (
     <Switch>
        <Route exact path='/accounts' component={Accounts} />
        <Route exact path='/accounts/:id' component={AccountEdit} />
    </Switch>
);

export default testModuleRouting;