import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
// import PropTypes from 'prop-types';

import Login from './Login';

class LoginContainer extends Component {

  login = () => {
    console.log('You clicked the login button.');
  }

  myLogin = () => {
    this.props.dispatch(login());
  }

  render() {
    return (
      <Login login={this.login} myLogin={this.myLogin} />
    );
  }
}

LoginContainer.propTypes = {

};

export default connect()(LoginContainer);
