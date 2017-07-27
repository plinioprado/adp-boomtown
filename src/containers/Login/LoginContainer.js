import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { showLoginError } from '../../actions/auth';
import Login from './Login';
import firebase from '../../config/firebase';


class LoginContainer extends Component {

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.mutate({
  //     variables: {
  //       email: 'xxx@xxx.com',
  //       fullname: 'John Doe',
  //       password: '1q2w3e'
  //     }
  //   })
  //   .then(({ data }) => {
  //     console.log('got data', data);
  //   })
  //   .catch((error) => {
  //     console.log('error:', error);
  //   });
  // }

  login = (event) => {
    event.preventDefault();
    const email = 'mackenzie@redacademy.com';
    const password = '1q2w3e';
    // TODO move this to a thumk, create form tos User with email, fullname, bio (can be in modal), make login work from form
    firebase.FirebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('login/then');
        console.log(res);
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          console.log('invalid');
          this.props.dispatch(showLoginError(error.code)); // SHOW_JOIN_MODAL in the future
        } else {
          console.log('feiled');
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
    profile: store.auth.profile
  };
}

// LoginContainer.defaultProps = {
//   location: { from: '/' },
//   mutate: null,
// };

LoginContainer.propTypes = {
  location: PropTypes.object
  // mutate: PropTypes.func
  // dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
