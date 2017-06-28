import React from 'react';
import { accountsRoutes } from 'modules/accounts/ui';
import { usersRoutes } from 'modules/users/ui';
import Header from 'modules/core/lib/components/Header';
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