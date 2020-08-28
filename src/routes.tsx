import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '~/pages/Main';
import UserDetails from '~/pages/UserDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/users/:id" exact component={UserDetails} />
    </Switch>
  );
}
