import React from 'react';
import { accountsRoutes } from '../../modules/accounts/ui';
import { usersRoutes } from '../../modules/users/ui';

const App = ({ children }) => {
    return (
        <div>
            <div>Header</div>
               { accountsRoutes() }
               { usersRoutes() }
            <div>Footer</div>
        </div>
    );
}

export default App;