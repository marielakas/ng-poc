import React from 'react';
import styles from './app.css';

const App = ({ children }) => {
    return (
        <div>
            <div className={styles.test}>Header</div>
            <div>Content</div>
            <div>Footer</div>
        </div>
    );
}

export default App;