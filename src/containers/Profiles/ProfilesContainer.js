import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProfileCard from '../../components/ProfileCard';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ProfileContainer extends Component {

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

ProfileContainer.propTypes = {
  data: PropTypes.objectOf({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.any
  }).isRequired
};

const getUser = gql`
 query getUser ($id: ID! ) {
     user (id: $id) {
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
  options: (props) => ({ variables: { id: props.match.params.id } }),
})(ProfileContainer);
