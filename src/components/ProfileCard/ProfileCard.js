import React from 'react';
import { Card, CardText } from 'material-ui/Card';
// import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

import './styles.css';

const ProfileCard = ({ user }) => (
  <Card className="profile-card">
    <CardText className="profile">
      <div className="profile-left">
        <h2>{user.fullName}</h2>
        <p>{user.bio}</p>
        <h3>Currently borrowing:</h3>
        <ul>
          {user.borrowingList.map((item, k) => <li key={k}>{item}</li>)}
        </ul>
      </div>
      <div className="profile-right">
        <div>
          <p><span>{user.borrowedCount + user.borrowingList.length}</span> items shared</p>
          <p><span>{user.borrowedCount}</span> items borrowed</p>
        </div>
        <Gravatar email={user.email} />
      </div>
    </CardText>
  </Card>
);

export default ProfileCard;
