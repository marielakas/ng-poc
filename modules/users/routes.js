import React from 'react';
import { Switch } from 'react-router-dom';
import { usersRoutes } from './Users';

const users = () => (
     <Switch>
        { usersRoutes() }
    </Switch>
);

export default users;