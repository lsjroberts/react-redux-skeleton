import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from 'containers/app';
import { Home } from '../routes/home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
