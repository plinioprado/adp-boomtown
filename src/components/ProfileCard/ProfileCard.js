import React from 'react';
import { Card, CardText } from 'material-ui/Card';
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
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="profile-right">
        <div>
          <p><span>0</span> items shared</p>
          <p><span>0</span> items borrowed</p>
        </div>
        <Gravatar email={user.email} />
      </div>
    </CardText>
  </Card>
);

export default ProfileCard;
