import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ user }) => {
  const borrowerCount = user.items.filter(it => it.borrower).length;
  const sharedCount = user.items.length;
  return (
    <Card className="profile-card">
      <CardText className="profile">
        <div className="profile-left">
          <h2>{user.fullname}</h2>
          <p>{user.bio}</p>
          <h3>Currently borrowing:</h3>
          <ul>
            {user.borrowed.map((item, k) => <li key={k}>{item.title}</li>)}
          </ul>
        </div>
        <div className="profile-right">
          <div>
            <p><span>{sharedCount}</span> items shared</p>
            <p><span>{borrowerCount}</span> items borrowed</p>
          </div>
          <Gravatar email={user.email} />
        </div>
      </CardText>
    </Card>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ProfileCard;
