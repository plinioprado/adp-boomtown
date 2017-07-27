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

const fetchUsers = gql`
  query fetchUser {
    user (id: "bt26ImStpfTd0TGWFK91f9lIaZy1" ) {
      id
      email
      fullname
      bio
      borrowed {
        title
      }
      items {
        available
        createdOn
        description
        id
        imageUrl
        itemOwner {
          fullname
          email
        }
        tags
        title
        borrower {
          id
          fullname
        }
      }
    }
  }
`;

const ProfilesContainerWithData = graphql(fetchUsers)(ProfilesContainer);
export default ProfilesContainerWithData;
