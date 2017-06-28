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
        const { className, data, header, headerClass } = this.props;

        return (
            <div className={classnames(className, styles.gridContainer)}>
                { header && <div className={classnames(headerClass, styles.gridHeader)}>{ header }</div> }
                <div>{ this.data }</div>
            </div>
        );
    }
}