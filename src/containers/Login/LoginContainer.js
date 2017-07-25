import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '../../store/store';
import { updateAuthState, showLoginError } from '../../actions/auth';
import Login from './Login';
import firebase from '../../config/firebase';

class LoginContainer extends Component {

  login = ({ email, password }) => {
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
    this.login({
      email: 'john@mytest.com',
      password: '1q2w3e'
    });

    const { from } = this.props.location.state || { from: '/' };
    const { authenticated, loginFormValues, ...props } = this.props;

    if (this.props.profile) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <Login login={this.login} />
    );
  }
}

firebase.FirebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }

    // User is signed in.
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  // } else {
  //   // User is signed out.
  //   // ...
  // }
});

function mapStateToProps(store) {
  return {
    profile: store.auth.profile
  };
}

LoginContainer.propTypes = {
};

export default connect(mapStateToProps)(LoginContainer);
