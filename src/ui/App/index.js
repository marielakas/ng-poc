import React from 'react';
import { accountsRoutes } from 'modules/accounts';
import { usersRoutes } from 'modules/users';
import Header from 'lib/components/Header';
import { accountsConfig, usersConfig } from '../config';

const App = ({ children }) => {
    return (
        <div>
            <Header />
            { accountsRoutes(accountsConfig) }
            { usersRoutes(usersConfig) }
            <div></div>
        </div>
    );
}

export default App;