import React, { Component } from 'react';
import { connect } from 'react-redux';

class Accounts extends Component {
    render() {
        return(
            <div>
                Accounts connected to Redux
            </div>
        )
    }
}

export default connect(({ accounts }) => {
    debugger;
    return {
        accounts: accounts.get('accounts')
    }
})(Accounts);