import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import phImmage from '../../images/item-placeholder.jpg';

import './ItemCard.css';

const ItemCard = ({ item }) => (
  <Card className="item-card2">
    <CardMedia>
      <img src={phImmage} alt="" className="item-img2" />
    </CardMedia>
    <div className="card-text2">
      <Gravatar email={item.itemowner.email} className="item-owner-image2" />
      <p className="item-owner-fullname2">{item.itemowner.fullname}</p>
      <p className="item-createdon2">{0} days ago</p>
    </div>
    <div className="card-text2">
      <p className="item-title2">{item.title}</p>
      <p className="item-description2">{item.description}</p>
    </div>
  </Card>
);

ItemCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ItemCard;
