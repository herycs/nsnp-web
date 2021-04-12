import { reducer as homeReducer } from './modules/home';
import { reducer as userReducer } from './modules/user';
// import { reducer as homeReducer } from '../pages/home/store';
// import { reducer as detailReducer } from '../pages/detail/store';
// import { reducer as loginReducer } from '../pages/login/store';
import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  // home: homeReducer,
  // detail: detailReducer,
  // login: loginReducer,
});

export default reducer;
