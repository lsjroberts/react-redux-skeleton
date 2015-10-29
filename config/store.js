import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore);

export default function store(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(['./reducers'], () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
