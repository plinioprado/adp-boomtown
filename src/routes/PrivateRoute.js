import React from 'react';
import {
  Route,
  Redirect,
  Component
} from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

const PrivateRoute = () => (
  <Route
    {...rest}
    render={props => (
      this.props.authenticaded
      ? <Component {...props} />
      : <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )}
  />
);

function mapStateToProps(store) {
  return {
    authenticaded: store.auth.profile
  };
}

export default connect(mapStateToProps)(PrivateRoute);

