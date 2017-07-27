import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import ValidatedTextField from '../../components/ValidatedTextField';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.css';

class UserContainer extends Component {
  // email, fullname, bio

  divStyle = {
    width: '100%'
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting user');
    this.props.mutate({
      variables: {
        email: '11@test.com',
        fullname: 'John Doe',
        bio: 'jhhjk lhjl hjklh jlhj hjlkhjlhjlk jhklhjl',
        password: '1q2w3e'
      }
    })
    .then(({ data }) => {
      console.log('got data', data);
    })
    .catch((error) => {
      console.log('error:', error);
    });
  }

  render() {
    return (
      <Paper zDepth={5} className="user">
        <div className="formContainer">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <ValidatedTextField label="Email" name="email" />
            </div>
            <div>
              <ValidatedTextField label="FullName" name="fullname" />
            </div>
            <div>
              <ValidatedTextField label="Pass" name="pass" />
            </div>
            <div style={this.divStyle}>
              <TextField
                style={this.divStyle}
                hintText="Message Field"
                floatingLabelText="Bio"
                multiLine
                rows={3}
              />
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
    );
  }
}

UserContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

const addUser = gql`

  mutation addUser (
    $fullname: String!
    $email: String!
    $bio: String
    $password: String!
  ) {
    addUser(
    fullname: $fullname
    email: $email
    bio: $bio
    password: $password
    ) {
      fullname
      email
      bio
    }
  }
`;

const UserContainerWithData = graphql(addUser)(UserContainer);
export default UserContainerWithData;
