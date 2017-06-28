import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

export default class Header extends Component {
    render() {
        const { className, text } = this.props;

        return (
            <div className={classnames(className, styles.headerContainer)}>
                <div className={styles.logo}>Logo</div>
                <div>{ text }</div>
                <div>Menu</div>
            </div>
        );
    }
}

Header.defaultProps = { 
    text: 'Standard Navigation'
};

Header.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
};