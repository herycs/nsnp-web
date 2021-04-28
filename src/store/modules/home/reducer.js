import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showWriteCommnet: false,
});



//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_WRITE_COMMENT_SHOW:
      return state.set('showWriteCommnet', action.payload);
    default:
      return state;
  }
};
