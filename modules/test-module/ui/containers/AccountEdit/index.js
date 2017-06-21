import React from 'react';

const AccountEdit = ({ 
    match
}) => {
    return (
        <div>{ match.params.id }</div>
    )
}

export default AccountEdit;