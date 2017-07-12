import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// import Items from './Items';
import ItemCard from '../../components/ItemCard';
import Loader from '../../components/Loader';
import './styles.css';

class ItemsContainer extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      itemsData: []
    };
  }

  componentDidMount() {
    Promise
      .all(['http://localhost:3001/items','http://localhost:3001/users'].map(url => (
        fetch(url).then(response => response.json())
      )))
      .then(json => {
        const [items, users] = json;
        const itemsWithOwners = items.map(item => {
          const itemOwner = users.filter(user => user.id === item.itemOwner);
          item.itemOwner = itemOwner[0];
          return item;
        });

        this.setState({
          itemsData: itemsWithOwners,
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      const childElements = this.state.itemsData.map(item => <ItemCard item={item} key={item.id} />);

      return (
        <div className="items-container">
          <Masonry>{childElements}</Masonry>
        </div>
      );
    }
  }
}

export default ItemsContainer;
