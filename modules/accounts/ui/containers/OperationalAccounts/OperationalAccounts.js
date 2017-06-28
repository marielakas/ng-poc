import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from 'lib/components/Grid';

const OperationalAccounts = connect(({ operationalAccounts }, props) => {
    const { header, keyProp } = props;

    return {
        data: operationalAccounts.get('accounts').toJS(),
        header,
        keyProp,
        toolbox: 'Toolbox'
    }
})(Grid);

OperationalAccounts.defaultProps = {
    header: 'Operational accounts',
    keyProp: 'accountName'
};

export default OperationalAccounts;


