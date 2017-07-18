import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'lib/components/Grid';

const OperationalAccounts = connect(({ operationalAccounts }, props) => {
    const { header, keyProp, hidden } = props;

    return {
        data: operationalAccounts.get('accounts').toJS(),
        header,
        keyProp,
        toolbox: 'Toolbox'
    }
})(Grid);

OperationalAccounts.defaultProps = {
    header: 'Operational accounts',
    keyProp: 'accountName',
    hidden: true
};

export default OperationalAccounts;


