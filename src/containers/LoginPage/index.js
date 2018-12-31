import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginData, loginThunk } from '../../actions/loginActions';
import Login from '../../components/login';

class LoginPage extends Component {
  handleChange = (event) => {
    event.preventDefault();
    const { loginUserData, loginReducer } = this.props;
    loginUserData({
      ...loginReducer.loginPostData,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginUser, loginReducer } = this.props;
    loginUser(loginReducer.loginPostData);
  }

  render() {
    return (
      <Login
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginUserData: PropTypes.func.isRequired,
  loginReducer: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({
  loginReducer,
});

export const mapDispatchToProps = dispatch => ({
  loginUser: response => dispatch(loginThunk(response)),
  loginUserData: response => dispatch(loginData(response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
