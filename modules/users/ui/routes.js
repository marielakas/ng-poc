import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { usersRoutes } from './containers/Users';

const users = () => (
     <Switch>
        { usersRoutes() }
    </Switch>
);

export default users;