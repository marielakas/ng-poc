import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'lib/components/Grid';

class Accounts extends Component {
    render() {  
        const { data } = this.props;

        return (
            <Grid 
                data={data}
                keyProp='accountName'
                header='Individual accounts' />
        )
    }
}

export default connect(({ accounts }, props) => {
    const { keyProp, header } = props;

    return {
        data: accounts.get('accounts').toJS(),
        keyProp,
        header
    }
})(Accounts);

Accounts.defaultProps = {
    keyProp: 'accountName',
    header: 'Individual Acc'
};

Accounts.propTypes = {
    text: PropTypes.string
};