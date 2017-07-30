
import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import ValidatedTextField from '../../components/ValidatedTextField';

import './SignIn.css';


const SignIn = ({ email, pass, handleSignin }) => {
  console.log(email);
  console.log(pass);

  return (
    <Paper zDepth={5} className="signin">
      <h3>No Account With this Email.</h3>
      <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
      <div className="formContainer">
        <form autoComplete="off" onSubmit={handleSignin}>
          <input type="hidden" name="email" value="{email}" />
          <input type="hidden" name="pass" value="{pass}" />
          <div>
            <ValidatedTextField label="FullName" name="fullname" />
          </div>
          <div>
            <ValidatedTextField label="Bio" name="bio" rows="3" />
          </div>
          <div className="footer">
            <Link to="/login">
              <FlatButton label="NO THANKS" />
            </Link>
            <RaisedButton label="JOIN!" primary type="submit" />
          </div>
        </form>
      </div>
    </Paper>
  );
};

SignIn.defaultProps = {
  email: '',
  pass: ''
};

SignIn.propTypes = {
  email: PropTypes.string,
  pass: PropTypes.string,
  handleSignin: PropTypes.func.isRequired
};

export default SignIn;
