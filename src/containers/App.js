import React from 'react';
import { testModuleRouting } from '../../modules/test-module';
import styles from './app.css';

const App = ({ children }) => {
    return (
        <div>
            <div>Header</div>
               { testModuleRouting() }
            <div>Footer</div>
        </div>
    );
}

export default App;