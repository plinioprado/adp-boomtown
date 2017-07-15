import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import ProfilesContainer from '../containers/Profiles';
import NotFound from '../components/NotFound';
import Share from '../containers/Share';

import './styles.css';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Items} />
      <Route path="/items" component={Items} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:id" component={ProfilesContainer} /> {/* TODO: Create page */}
      <Route path="/share" component={Share} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
