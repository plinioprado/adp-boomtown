import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from '../DropDown';
import './styles.css';

class Head extends Component {

    render() {
        return (
            <div className="head">
                <div>
                    <img src="boomtown-logo.svg" alt="Boomtown" className="headerLogo" />
                    <DropDown className="drop-down" />
                </div>
                <nav>
                    <RaisedButton label="MY PROFILE" primary={true} />
                    <RaisedButton label="LOGOUT" secondary={true} className="btn-logout" />
                </nav>
            </div>
        );
    }
}

export default Head;
