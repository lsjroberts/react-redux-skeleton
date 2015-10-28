import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from 'containers/app';
import { Home } from 'routes/home';
import { Example } from 'routes/example';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='/example' component={ Example } />
  </Route>
);
