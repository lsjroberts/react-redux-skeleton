import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import * as modules from '../modules/reducers';

export default combineReducers({
  router,
  ...modules
});
