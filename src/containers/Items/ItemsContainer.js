import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { getItems } from '../../redux/actions';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ItemsContainer extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     loading: true,
  //     itemsData: []
  //   };
  // }

  componentDidMount() {
    this.props.dispatch(getItems());

    // Promise
    //   .all(['http://localhost:3001/items','http://localhost:3001/users'].map(url => (
    //     fetch(url).then(response => response.json())
    //   )))
    //   .then(json => {
    //     const [items, users] = json;
    //     const itemsWithOwners = items.map(item => {
    //       const itemOwner = users.filter(user => user.id === item.itemOwner);
    //       item.itemOwner = itemOwner[0];
    //       return item;
    //     });

    //     this.props.dispatch(getItems());

    //     this.setState({
    //       itemsData: itemsWithOwners,
    //       loading: false
    //     });
    //   });
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      const childElements = this.props.itemsData.map(item => <ItemCard item={item} key={item.id} />);

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
  itemsData: PropTypes.array.isRequired
};

function mapStateToProps(store) {
  return {
    loading: store.loading,
    itemsData: store.itemsData
  };
}

export default connect(mapStateToProps)(ItemsContainer);
