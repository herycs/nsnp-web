// import { actionTypes } from './index';
// import { fromJS } from 'immutable';

import { actionTypes } from '.';

const defaultState = {
  // id: 99,
  userInfo: {},
};
//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_DATA:
      let newState = JSON.parse(JSON.stringify(state));
      newState.userInfo = action.payload;
      return newState;
    default:
      return state;
  }
};
