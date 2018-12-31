import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupData, signupThunk } from '../../actions/signupActions';
import SignUp from '../../components/signup';

class SignUpPage extends Component {
  handleChange = (event) => {
    event.preventDefault();
    const { signupUserData, signupReducer } = this.props;
    signupUserData({
      ...signupReducer.signupPostData,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { signupUser, signupReducer } = this.props;
    signupUser(signupReducer.signupPostData);
  }

  render() {
    return (
      <SignUp
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

SignUpPage.propTypes = {
  signupUser: PropTypes.func.isRequired,
  signupUserData: PropTypes.func.isRequired,
  signupReducer: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ signupReducer }) => ({
  signupReducer,
});

export const mapDispatchToProps = dispatch => ({
  signupUser: response => dispatch(signupThunk(response)),
  signupUserData: response => dispatch(signupData(response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
