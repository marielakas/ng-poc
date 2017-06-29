import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from 'lib/components/Grid';

const Accounts = connect(({ accounts }, props) => {
    const { keyProp, header } = props;

    return {
        data: accounts.get('accounts').toJS(),
        keyProp,
        header
    }
})(Grid);

Accounts.defaultProps = {
    keyProp: 'accountName',
    header: 'Individual Acc'
};

Accounts.propTypes = {
    text: PropTypes.string
};

export default Accounts;