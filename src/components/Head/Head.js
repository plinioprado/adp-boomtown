import React from 'react';
// import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from '../DropDown';

import './styles.css';

const Head = () => (
  <Toolbar className="headerBar">
    <ToolbarGroup>
      <img src="boomtown-logo.svg" alt="Boomtown" className="headerBar-logo" />
      <DropDown className="drop-down" />
    </ToolbarGroup>
    <div className="headerBar-right">
      <RaisedButton label="MY PROFILE" primary />
      <RaisedButton label="LOGOUT" secondary className="btn-logout" />
    </div>
  </Toolbar>
);

export default Head;

