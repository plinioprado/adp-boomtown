import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import SignIn from './SignIn';
import './SignIn.css';

class SignInContainer extends Component {

  divStyle = {
    width: '100%'
  }

  nextPath = null;

  signin = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        email: 'john@example.com',
        fullname: 'John Doe',
        bio: 'I do not exist',
        password: '1q2w3e'
      }
    })
    .then(({ data }) => {
      console.log('got data', data);
      this.nextPath = '/';
    })
    .catch((error) => {
      console.log('error:', error);
      this.nextPath = 'error';
    });
  };

  render() {
    if (this.nextPath) {
      return (
        <Redirect to={this.nextPath} />
      );
    }

    return (
      <div className="signin-container">
        <SignIn
          user={this.join}
          handleSignin={() => this.signin()}
        />
      </div>
    );
  }

//   render() {
//     return (
//       <Paper zDepth={5} className="user">
//         <div className="formContainer">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <div>
//               <ValidatedTextField label="Email" name="email" />
//             </div>
//             <div>
//               <ValidatedTextField label="FullName" name="fullname" />
//             </div>
//             <div>
//               <ValidatedTextField label="Pass" name="pass" />
//             </div>
//             <div style={this.divStyle}>
//               <TextField
//                 style={this.divStyle}
//                 hintText="Message Field"
//                 floatingLabelText="Bio"
//                 multiLine
//                 rows={3}
//               />
//             </div>
//             <RaisedButton
//               className="enterButton"
//               primary
//               fullWidth
//               type="submit"
//             >
//               Enter
//             </RaisedButton>
//           </form>
//         </div>
//       </Paper>
//     );
//   }
}

SignInContainer.propTypes = {
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

export default graphql(addUser)(SignInContainer);

