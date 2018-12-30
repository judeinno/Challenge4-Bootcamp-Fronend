import React from 'react';
import PropTypes from 'prop-types';
import './signup.scss';

const SignUp = ({ textmessage }) => (
  <div>
    <h1>{textmessage}</h1>
  </div>
);

SignUp.propTypes = {
  textmessage: PropTypes.string.isRequired,
};

export default SignUp;
