import React, { Component } from 'react';
import DropDown from '../DropDown';
import './styles.css';

class Head extends Component {

    render() {
        return (
            <div className="head">
                <img src="../images/boomtown-logo.svg" alt="Boomtown" className="headerLogo" />
                <DropDown className="drop-down" />
                <nav>
                    <button className="btn-profile">MY PROFILE</button>
                    <button className="btn-logout" >LOGOUT</button>
                </nav>
                

            </div>
        );
    }
}

export default Head;
