import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { getItems } from '../../actions/items';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getItems());
  }

  render() {
    let childElements = null;
    if (this.props.loading) {
      return <Loader />;
    } else {
      childElements = this.props.itemsData.map(item => <ItemCard item={item} key={item.id} />);

      return (
        <div className="items-container">
          <Masonry>{childElements}</Masonry>
        </div>
      );
    }
  }
}

ItemsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    loading: store.items.loading,
    itemsData: store.items.itemsData
  };
}

export default connect(mapStateToProps)(ItemsContainer);
