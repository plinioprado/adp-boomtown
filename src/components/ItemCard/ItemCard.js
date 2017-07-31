import React from 'react';
import Gravatar from 'react-gravatar';
import RaisedButton from 'material-ui/RaisedButton';

import './ItemCard.css';

const ItemCard = ({ item, showBorrowModal }) => {
  // Obs: There are several function here, not sent fo Container because are presentational
  const getTags = (list) => {
    let tags = '';

    for (let i = 0; i < list.length; i += 1) {
      tags += list[i].title;
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
        status = `lent to ${item.borrower.fullname}`;
      } else {
        status = 'unavailable';
      }
    }
    return status;
  };

  return (
    <div className="item-card">
      <img src={item.imageurl} alt={item.title} className="item-card-img" />
      { !item.available && <div className="item-status">{getStatus({ available: item.available, borrower: item.borrower })}</div> }
      <div className="item-block">
        <a href={`/profile/${item.itemowner.id}`}>
          <Gravatar email={item.itemowner.email} className="item-owner-image" />
          <p className="item-owner-fullname">{item.itemowner.fullname}</p>
          <p className="item-createdon">{getDays(item.createdon)} days ago</p>
        </a>
      </div>
      <div className="item-block">
        <p className="item-title">{item.title}</p>
        <p className="item-tags">{getTags(item.tags)}</p>
      </div>
      <div className="item-block">
        <p>{item.description}</p>
      </div>
      {
        item.available &&
        <RaisedButton
          label="BORROW"
          secondary
          className="item-button"
          onClick={() => showBorrowModal({
            id: item.id,
            title: item.title,
            ownerName: item.itemowner.fullname
          }
          )}
        />
      }
    </div>
  );
};

export default ItemCard;
