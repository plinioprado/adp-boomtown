import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import ValidatedTextField from '../../components/ValidatedTextField';

// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import './styles.css';

class UserContainer extends Component {
  // email, fullname, bio

  divStyle = {
    width: '100%'
  }

  render() {
    return (
      <Paper zDepth={5} className="user">
        <div className="formContainer">
          <form autoComplete="off">
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

// ProfilesContainer.propTypes = {
//   data: PropTypes.objectOf({
//     user: PropTypes.any
//   }).isRequired
// };

// const fetchUsers = gql`
//   query fetchUser {
//     user (id: "TyHcYnSocuOg6PmWQivgxerTLcq2" ) {
//       id
//       email
//       fullName
//       bio
//     }
//   }
// `;

// const UserContainerWithData = graphql(fetchUsers)(UserContainer);
const UserContainerWithData = UserContainer;
export default UserContainerWithData;
