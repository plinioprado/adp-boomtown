import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ItemFilterMenu from '../../containers/ItemFilterMenu';
import logo from '../../images/boomtown-logo.svg';

import './styles.css';

const Head = ({ pathname }) => (
  <Toolbar className="headerBar">
    <ToolbarGroup>
      <a href="/">
        <img src={logo} alt="Boomtown" className="headerBar-logo" />
      </a>
      { (pathname === '/' || pathname === '/items') &&
        <div className="headerBar-select">
          <ItemFilterMenu className="headerBar-select" />
        </div>
      }
    </ToolbarGroup>
    <div className="headerBar-right">
      <a href="/profile/TyHcYnSocuOg6PmWQivgxerTLcq2">
        <RaisedButton label="MY PROFILE" primary />
      </a>
      <RaisedButton label="LOGOUT" secondary className="btn-logout" />
    </div>
  </Toolbar>
);

Head.propTypes = {
  pathname: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    pathname: store.router.location.pathname
  };
}

export default connect(mapStateToProps)(Head);

