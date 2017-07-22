import React from 'react';
import Gravatar from 'react-gravatar';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const ItemCard = ({ item }) => {
  // Obs: There are several function here, not sent fo Container because are presentational
  const getTags = (list) => {
    let tags = '';

    for (let i = 0; i < list.length; i += 1) {
      tags += list[i];
      if (i < (list.length - 1)) tags += ', ';
    }
    return tags;
  };

  const getDays = (dt) => {
    const today = Math.floor(new Date().getTime() / 1000);
    return Math.floor((today - dt) / (60 * 60 * 24) + 1);
  };

  const getStatus = ({ available, borrower }) => {
    let status = '';
    if (!available) {
      if (borrower) {
        status = `lent to ${item.borrower.fullName}`;
      } else {
        status = 'unavailable';
      }
    }
    return status;
  };

  const buttonStyle = {
    boxShadow: null
  };

  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.title} className="item-card-img" />
      { !item.available && <div className="item-status">{getStatus({ available: item.available, borrower: item.borrower })}</div> }
      <div className="item-block">
        <a href={`/profile/${item.itemOwner.id}`}>
          <Gravatar email={item.itemOwner.email} className="item-owner-image" />
          <p className="item-owner-fullName">{item.itemOwner.fullName}</p>
          <p className="item-createdOn">{getDays(item.createdOn)} days ago</p>
        </a>
      </div>
      <div className="item-block">
        <p className="item-title">{item.title}</p>
        <p className="item-tags">{getTags(item.tags)}</p>
      </div>
      <div className="item-block">
        <p>{item.description}</p>
      </div>
      { item.available && <RaisedButton label="BORROW" secondary style={buttonStyle} className="item-button" /> }
    </div>
  );
};

export default ItemCard;
