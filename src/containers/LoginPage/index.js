import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../../components/login';

class LoginPage extends Component {
  render() {
    const { message } = this.props;
    return (
      <Login message={message} />
    );
  }
}

LoginPage.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({
  message: loginReducer.message,
});

export default connect(mapStateToProps)(LoginPage);
