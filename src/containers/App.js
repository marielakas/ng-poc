import React from 'react';
import { accountsRoutes } from '../../modules/accounts/ui';

const App = ({ children }) => {
    return (
        <div>
            <div>Header</div>
               { accountsRoutes() }
            <div>Footer</div>
        </div>
    );
}

export default App;