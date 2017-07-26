import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { updateAuthState } from '../../actions/auth';
import ItemFilterMenu from '../../containers/ItemFilterMenu';
import logo from '../../images/boomtown-logo.svg';

import './styles.css';

const Head = ({ pathname }) => {
  const leftElements = (
    <div className="headerbar-left">
      <a href="/">
        <img src={logo} alt="Boomtown" className="headerbar-logo" />
      </a>
      {(pathname === '/' || pathname === '/items') &&
        <div className="headerbar-select">
          <ItemFilterMenu className="headerBar-select" />
        </div>
      }
    </div>
  );

  const rightElements = (
    <div className="headerbar-right">
      <a href="/profile/TyHcYnSocuOg6PmWQivgxerTLcq2">
        <RaisedButton label="MY PROFILE" primary />
      </a>
      <RaisedButton
        label="LOGOUT"
        secondary
        className="btn-logout"
      />
    </div>
  );

  return (
    <AppBar
      className="headerbar"
      iconElementLeft={leftElements}
      iconElementRight={rightElements}
    />
  )
};

Head.propTypes = {
  pathname: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    pathname: store.router.location.pathname
  };
}

export default connect(mapStateToProps)(Head);
