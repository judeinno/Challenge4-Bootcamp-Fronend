import React from 'react';
import PropTypes from 'prop-types';
import './signup.scss';

const SignUp = ({ onChange, onClick }) => (
  <div className="container signup">
    <form className="signup-form">
      <legend>Register</legend>
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
        <p>Email:</p>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
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

SignUp.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignUp;
