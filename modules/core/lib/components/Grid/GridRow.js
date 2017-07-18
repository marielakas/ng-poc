import React from 'react';
import PropTypes from 'prop-types';
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

GridRow.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string
}

export default GridRow;