import React from 'react';
import { accounts } from '../../modules/accounts';

const App = ({ children }) => {
    return (
        <div>
            <div>Header</div>
               { accounts() }
            <div>Footer</div>
        </div>
    );
}

export default App;