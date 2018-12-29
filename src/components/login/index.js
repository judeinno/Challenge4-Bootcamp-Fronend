import React from 'react';
import PropTypes from "prop-types";
import './login.scss';

const Login = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

Login.propTypes = {
    message: PropTypes.string.isRequired
};

export default Login;
