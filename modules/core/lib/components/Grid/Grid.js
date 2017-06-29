import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import GridRow from './GridRow';
import styles from './styles.css';

export default class Grid extends Component {
    get data() {
        const { data, keyProp } = this.props;

        return data.map((record, index) => {
            const { id } = record;

            return (
               <GridRow 
                    key={index}
                    id={id}
                    value={record[keyProp]} />
            );
        });
    }

    render() {
        const { className, data, header, headerClass, toolbox, hidden } = this.props;

        return (
            <div className={classnames(className, styles.gridContainer)}>
                { header && <div className={classnames(headerClass, styles.gridHeader)}>{ header }</div> }
                { toolbox && !hidden && <div className={classnames(headerClass, styles.gridToolbox)}>{toolbox}</div> }
                <div>{ this.data }</div>
            </div>
        );
    }
}

Grid.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    header: PropTypes.string,
    headerClass: PropTypes.string,
    toolbox: PropTypes.string
};