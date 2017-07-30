import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './Items.css';

class ItemsContainer extends Component {

  render() {
    let child;
    if (this.props.data.loading) {
      child = <Loader />;
    } else {
      let items = this.props.data.items;
      if (this.props.filterValues.length) {
        items = this.props.data.items.filter(item => (item.tags.find(tag => this.props.filterValues.includes(tag.title.trim()))));
      }
      const childElements = items.map(item => <ItemCard item={item} key={item.id} />);
      child = (
        <div className="items-container">
          <Masonry>{childElements}</Masonry>
        </div>
      );
    }

    return child;
  }
}

ItemsContainer.propTypes = {
  filterValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf({
    data: PropTypes.array,
    loaded: PropTypes.bool
  }).isRequired
};

function mapStateToProps(store) {
  return {
    filterValues: store.items.filterValues
  };
}

const getItems = gql`
   query getItems {
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
`;

const ItemsContainerWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);
