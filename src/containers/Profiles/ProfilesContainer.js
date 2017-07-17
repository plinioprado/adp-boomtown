import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { getProfile } from '../../actions/profiles';
import ProfileCard from '../../components/ProfileCard';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ProfilesContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getProfile(this.props.match.params.id));
  }

  render() {
    let childElements = null;

    let element;
    if (this.props.loading) {
      element = <Loader />;
    } else {
      childElements = this.props.profile.items.map(item => <ItemCard item={item} key={item.id} />);

      element = (
        <div className="profiles-container">
          <ProfileCard user={this.props.profile.user} />
          <Masonry>{childElements}</Masonry>
        </div>
      );

    }
    return element;
  }
}

ProfilesContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    loading: store.profiles.loading,
    profile: store.profiles.profile
  };
}

export default connect(mapStateToProps)(ProfilesContainer);
