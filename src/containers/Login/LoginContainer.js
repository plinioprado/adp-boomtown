import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateAuthState, showLoginError } from '../../redux/auth';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';

class LoginContainer extends Component {

  componentDidMount() {
    // FirebaseAuth.signOut();
    // this.props.dispatch(updateAuthState(null));
  }

  login = (event) => {
    event.preventDefault();
    const email = 'john@example.com';
    const password = '1q2w3e';
    // TODO move this to a thunk
    FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.dispatch(updateAuthState({ id: FirebaseAuth.currentUser.uid }));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          this.props.dispatch(showLoginError(error.code)); // SHOW_JOIN_MODAL in the future
        } else {
          this.props.dispatch(showLoginError(error.code));
        }
      });
  }

  render() {
    const { authenticated, loginFormValues, ...props } = this.props;

    if (this.props.loggedUser) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <Login
        {...props}
        join={this.join}
        login={(e) => {
          e.preventDefault();
          this.login(e);
        }
        }
        user={{ email: 'john@example.com' }}
      />
    );
  }
}

LoginContainer.defaultProps = {
  location: { from: '/' },
  mutate: null,
  loggedUser: null
};

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedUser: PropTypes.objectOf(PropTypes.any)
};

function mapStateToProps(store) {
  return {
    loggedUser: store.auth.loggedUser
  };
}

export default connect(mapStateToProps)(LoginContainer);
