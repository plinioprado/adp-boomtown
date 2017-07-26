import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';

const Login = ({ submit }) => {

  let email = '';
  let password = '';

  return (

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
            <form onSubmit={submit.bind(this)} autoComplete="off">
              <div>
                <ValidatedTextField label="Email" name="email" />
              </div>
              <div>
                <ValidatedTextField label="Password" name="password" />
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

}


Login.propTypes = {
  submit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Login;
