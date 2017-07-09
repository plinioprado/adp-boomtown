import React from 'react';
import ItemCard from '../ItemCard';
import './styles.css';

const ItemCardList = ({ list }) => {

  return (
    <div className="item-card-list">
      {list.map((item) => (<ItemCard
        key={item.id}
        item={item}
      />))}
    </div>
  );
};

export default ItemCardList;
