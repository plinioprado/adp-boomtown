import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import ProfilesContainerWithData from '../containers/Profiles';
import NotFound from '../components/NotFound';
import Share from '../containers/Share';

import './styles.css';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Items} />
    <Route path="/items" component={Items} />
    <Route path="/login" component={Login} />
    <Route path="/profile/:id" component={ProfilesContainerWithData} />
    <Route path="/share" component={Share} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
