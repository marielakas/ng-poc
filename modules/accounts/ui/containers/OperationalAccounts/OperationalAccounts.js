import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class OperationalAccounts extends Component {
    render() {
        return (
            <div>Operational Accounts</div>
        );
    }
};

export default connect(({ operationalAccounts }) => {
    return {
        accounts: operationalAccounts.get('accounts')
    }
})(OperationalAccounts);

