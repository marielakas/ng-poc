import React from 'react';
import styles from './styles.css';

const GridRow = ({
    id,
    value
}) => {
    return (
         <div className={styles.gridRow}>
            <div className={styles.gridColumn}>Id: {id}</div>
            <div className={styles.gridColumn}>Name: {value}</div>
        </div>
    );
}

export default GridRow;