import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProfileCard from '../../components/ProfileCard';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ProfilesContainer extends Component {

  render() {
    let child;

    if (this.props.data.loading) {
      child = <Loader />;
    } else {
      const user = this.props.data.user;

      const childElements = user.items.map(item => <ItemCard item={item} key={item.id} />);
      child = (
        <div className="profiles-container">
          <ProfileCard user={user} />
          <Masonry>{childElements}</Masonry>
        </div>
      );
    }

    return child;
  }
}

ProfilesContainer.propTypes = {
  data: PropTypes.objectOf({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.any,
    id: PropTypes.string.isRequired
  }).isRequired
};
// "bt26ImStpfTd0TGWFK91f9lIaZy1";

  // query getUser {
  //   user (id: "bt26ImStpfTd0TGWFK91f9lIaZy1") {

  // query getUser ($id: String! ) {
  //   user (id: $id) {

const getUser = gql`
  query getUser {
    user (id: "bt26ImStpfTd0TGWFK91f9lIaZy1") {
      id
      email
      fullname
      bio
      borrowed {
        title
      }
      items {
        available
        borrower {
          id
          fullname
        }
        createdon
        description
        id
        imageurl
        itemowner {
          id
          fullname
          email
        }
        tags {
          title
        }
        title
      } 
    }
  }
`;


export default graphql(getUser, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(ProfilesContainer);

// export default graphql(getUsers, {
//   options: (ownProps) => ({
//     variables: {
//       id: 'HHFm1yqXABRuAmwuuMC6RJYc7fr2'
//     }
//   })
// })(ProfilesContainer);
