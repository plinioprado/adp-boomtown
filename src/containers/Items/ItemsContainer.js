import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import ItemsBorrowModal from './ItemsBorrowModal';
import { showBorrowModal } from '../../redux/items';
import './Items.css';


class ItemsContainer extends Component {

  getBorrowItem(id) {
    const item = this.props.data.items.find(it => (it.id === id));
    return {
      id: id,
      title: item.title,
      ownerName: item.itemowner.fullname
    }
  }
  showBorrowModal = (modalItem) => {
    console.log('dispatching');
    this.props.dispatch(showBorrowModal(modalItem.id));
  };

  render() {
    let child;
    if (this.props.data.loading) {
      child = <Loader />;
    } else {
      let items = this.props.data.items;
      if (this.props.filterValues.length) {
        items = this.props.data.items.filter(item => (item.tags.find(tag => this.props.filterValues.includes(tag.title.trim()))));
      }
      const childElements = items.map(item => <ItemCard item={item} showBorrowModal={() => this.showBorrowModal(item)} key={item.id} />);
      child = (
        <div className="items-container">
          <Masonry>{childElements}</Masonry>
          { (this.props.borrowItem.id * 1 !== 0) &&
            <ItemsBorrowModal modalItem={this.getBorrowItem(this.props.borrowItem.id)} />
          }
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
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  borrowItem: PropTypes.objectOf(PropTypes.any).isRequired
};

function mapStateToProps(store) {
  return {
    filterValues: store.items.filterValues,
    borrowItem: store.items.borrowModal
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

const updItemBorrower = gql`
   mutation updItemBorrower (
    $id: ID!
    $borrower: ID!
  ) {
    updItemBorrower(
      id: $id
      borrower: $borrower
    ) 
  }
`;

const ItemsContainerWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);
