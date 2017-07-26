import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { showLoginError } from '../../actions/auth';
import Login from './Login';
import firebase from '../../config/firebase';


class LoginContainer extends Component {

  email = '';
  password = '';

  login = (e) => {
    console.log('submitted');
    console.log(e);
    const email = 'john@mytest.com';
    const password = '1q2w3e';
    // TODO move this to a thumk, create form tos User with email, fullname, bio (can be in modal), make login work from form
    firebase.FirebaseAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          this.props.dispatch(showLoginError(error.code)); // SHOW_JOIN_MODAL in the future
        } else {
          this.props.dispatch(showLoginError(error.code));
        }
      });
  }

  render() {
    const { from } = this.props.location.state || { from: '/' };
    // const { authenticated, loginFormValues, ...props } = this.props;

    if (this.props.profile) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <Login
        submit={(e) => {
          e.preventDefault();
          this.login(e);
        }}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    profile: store.auth.profile
  };
}

LoginContainer.propTypes = {
  location: PropTypes.any.isRequired,
  // profile: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
