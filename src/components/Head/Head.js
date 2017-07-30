import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FirebaseAuth } from '../../config/firebase';

import ItemFilterMenu from '../../containers/ItemFilterMenu';
import logo from '../../images/boomtown-logo.svg';

import './Head.css';

const Head = ({ pathname }) => {

  // const userId = FirebaseAuth.currentUser;
  const userId = 'tU5JzFUwBjfwUjygIU55gJOeraZ2';

  const leftElements = (
    <div className="headerbar-left">
      <Link to="/">
        <img src={logo} alt="Boomtown" className="headerbar-logo" />
      </Link>
      { (pathname === '/') &&
        <div className="headerbar-select">
          <ItemFilterMenu className="headerBar-select" />
        </div>
      }
    </div>
  );

  const rightElements = (
    <div className="headerbar-right">
      <Link to="/profile/{userId}">
        <RaisedButton label="MY PROFILE" primary />
      </Link>
      <Link to="/login">
        <RaisedButton
          label="LOGOUT"
          secondary
          className="btn-logout"
        />
      </Link>
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
  pathname: PropTypes.string.isRequired,
};

function mapStateToProps(store) {
  return {
    pathname: store.router.location.pathname,
  };
}

export default connect(mapStateToProps)(Head);
