import React from 'react';
import ItemCardList from '../../components/ItemCardList';
import './styles.css';

const Items = ({ itemsData }) => (
  <div className="items">
    <ItemCardList list={itemsData} />
  </div>
);

export default Items;
