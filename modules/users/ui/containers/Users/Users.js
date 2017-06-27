import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    render() {
        return (
            <div>
                Users
                <div>{ this.props.users }</div>
            </div>
        );
    }
};

export default connect(({ users }) => {
    return {
        users: users.get('usersList')
    }
})(Users);