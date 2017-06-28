import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Accounts extends Component {
    render() {
        const { text } = this.props;

        return(
            <div>
                { text }
            </div>
        )
    }
}

Accounts.propTypes = {
    text: PropTypes.string
};

Accounts.defaultProps = {
    text: 'Default accounts'
}

export default connect(({ accounts }) => {
    return {
        accounts: accounts.get('accountsList')
    }
})(Accounts);