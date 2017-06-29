import React from 'react';
import { accountsRoutes } from 'modules/accounts';
import { usersRoutes } from 'modules/users';
import Header from 'lib/components/Header';
import { accountsConfig } from '../../config';

const App = ({ children }) => {
    return (
        <div>
            <Header />
            { accountsRoutes(accountsConfig) }
            { usersRoutes() }
            <div></div>
        </div>
    );
}

export default App;