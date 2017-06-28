import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

const mergeProps = (component, ...rest) => React.createElement(component, Object.assign({}, ...rest));

const Route = ({ component, ...rest }) => {
    return (
        <ReactRoute { ...rest } render={routeProps => mergeProps(component, routeProps, rest)} />
    );
}

export default Route;