import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect,  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { showLoginError } from '../../actions/auth';
import Login from './Login';
import firebase from '../../config/firebase';


class LoginContainer extends Component {

  login = (event) => {
    event.preventDefault();
    const email = 'john@example.com';
    const password = '1q2w3e';
    // TODO move this to a thumk
    firebase.FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('logged', res);
      })
      .catch((error) => {
        console.loc(error);
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
        login={(e) => {
          e.preventDefault();
          this.login(e);
        }}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    profile: store.auth.profile,
  };
}

// LoginContainer.defaultProps = {
//   location: { from: '/' },
//   mutate: null,
// };

LoginContainer.propTypes = {
  location: PropTypes.object,
  // mutate: PropTypes.func
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
