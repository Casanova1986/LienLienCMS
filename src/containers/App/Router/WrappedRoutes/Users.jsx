import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from '../../../Users/Profile/index';
import UserList from '../../../Users/UserList/index';
import UserManager from '../../../Users/UserFunction/index';

export default () => (
  <Switch>
    <Route path="/users/profile" component={Profile} />
    <Route path="/users/userlist" component={UserList} />
    <Route path="/users/userfunction" component={UserManager} />
  </Switch>
);
