import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateEmailField, updatePasswordField } from '../../redux/forms';
import { updateAuthState, showLoginError, redirectSignin } from '../../redux/auth';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';

class LoginContainer extends Component {

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event.target.value));
  }

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event.target.value));
  }

  login = (args) => {
    console.log('will login');
    console.log(args.email);
    console.log(args.password);
    // const email = 'john@example.com';
    // const password = '1q2w3e';
    FirebaseAuth.signInWithEmailAndPassword(args.email, args.password)
      .then(() => {
        console.log('success!');
        this.props.dispatch(updateAuthState({ id: FirebaseAuth.currentUser.uid }));
      })
      .catch((error) => {
        if (error.message === 'signInWithEmailAndPassword failed: First argument "email" must be a valid string.') {
          console.log('unknown');
          this.props.dispatch(redirectSignin(true));
        } else {
          console.log('invalid');
          this.props.dispatch(showLoginError(error.code));
        }
      });
  }

  render() {

    const { authenticated, loginFormValues, ...props } = this.props;

    if (this.props.loggedUser) {

      return (<Redirect to="/" />);

    } else if (this.props.redirectedSignin) {

      this.props.dispatch(redirectSignin(false));
      return (<Redirect to="/signin" />);

    } else {

      return (
        <Login
          {...props}
          join={this.join}
          login={(e) => {
            e.preventDefault();
            this.login({ email: this.props.forms.emailField, password: this.props.forms.passwordField });
          }}
          handleEmail={(e) => { this.handleEmail(e); }}
          handlePassword={(e) => { this.handlePassword(e); }}
        />
      );
    }
  }
}

LoginContainer.defaultProps = {
  location: { from: '/' },
  mutate: null,
  loggedUser: null
};

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedUser: PropTypes.objectOf(PropTypes.any),
  redirectedSignin: PropTypes.bool.isRequired
};

function mapStateToProps(store) {
  return {
    loggedUser: store.auth.loggedUser,
    // authenticated: store.login.userProfile,
    forms: store.forms,
    redirectedSignin: store.auth.redirectedSignin
  };
}

export default connect(mapStateToProps)(LoginContainer);
