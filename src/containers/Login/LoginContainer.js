import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Login from './Login';

class LoginContainer extends Component {

  login = () => {
    console.log('You clicked the login button.');
  }

  render() {
    return (
      <Login login={this.login} />
    );
  }
}

LoginContainer.propTypes = {

};

export default connect()(LoginContainer);
