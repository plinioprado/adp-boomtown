import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';
import './Login.css';

const Login = ({ login, handleEmail, handlePassword }) => (

  <div className="page login">
    <div className="logo">
      <img src={logo} alt="Boomtown Logo" />
    </div>
    <div className="topRight">
      <img src={topRight} alt="Sky" />
    </div>
    <div className="bottomLeft">
      <img src={bottomLeft} alt="City" />
    </div>
    <div className="cardContainer">
      <Paper zDepth={5}>
        <div className="formContainer">
          <form onSubmit={login} autoComplete="off">
            <div>
              <ValidatedTextField onChange={handleEmail} label="Email" name="email" />
            </div>
            <div>
              <ValidatedTextField onChange={handlePassword} label="Password" name="password" />
            </div>
            <RaisedButton
              className="enterButton"
              primary
              fullWidth
              type="submit"
            >
              Enter
            </RaisedButton>
          </form>
        </div>
      </Paper>
    </div>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

export default Login;
