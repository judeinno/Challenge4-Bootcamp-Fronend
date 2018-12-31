import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

const Login = ({ onChange, onClick }) => (
  <div className="container login">
    <form className="login-form">
      <legend>Login</legend>
      <hr />
      <div className="form-group">
        <p>Username:</p>
        <input
          type="test"
          className="form-control"
          id="user-name"
          placeholder="User Name"
          name="username"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <p>Password:</p>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
      </div>
      <button type="submit" id="sign-up-bt" className="btn btn-primary" onClick={onClick}>
        Submit
      </button>
    </form>
  </div>
);

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Login;
