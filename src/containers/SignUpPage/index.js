import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from '../../components/signup';

class SignUpPage extends Component {
  render() {
    const { textmessage } = this.props;
    return (
      <SignUp textmessage={textmessage} />
    );
  }
}

SignUpPage.propTypes = {
  textmessage: PropTypes.string.isRequired,
};

const mapStateToProps = ({ signupReducer }) => ({
  textmessage: signupReducer.textmessage,
});

export default connect(mapStateToProps)(SignUpPage);
