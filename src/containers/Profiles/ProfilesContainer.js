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


const fetchUsers = gql`
  query fetchUser ($id: String! ) {
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
        createdon
        description
        id
        imageurl
        itemowner {
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


// export default graphql(fetchUsers, {
//   options: (ownProps) => ({
//     variables: {
//       id: ownprops.match.params.id
//     }
//   })
// })(ProfilesContainer);

export default graphql(fetchUsers, {
  options: (ownProps) => ({
    variables: {
      id: 'HHFm1yqXABRuAmwuuMC6RJYc7fr2'
    }
  })
})(ProfilesContainer);
