import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showWriteCommnet: false,
});

// const defaultState = fromJS({
//   topicList: [],
//   articleList: [],
//   recommendList: [],
//   articlePage: 1,
//   showScroll: false,
// });

// const chanegHomeData = (state, action) => {
//   return state.merge({
//     topicList: action.topicList,
//     articleList: action.articleList,
//     recommendList: action.recommendList,
//   });
// };

// const addHomeList = (state, action) => {
//   return state.merge({
//     articleList: state.get('articleList').concat(action.list),
//     articlePage: action.nextPage,
//   });
// };

//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_WRITE_COMMENT_SHOW:
      return state.set('showWriteCommnet', action.payload);
    // case actionTypes.CHANGE_HOME_DATA:
    //   return chanegHomeData(state, action);
    // case actionTypes.ADD_HOME_LIST:
    //   return addHomeList(state, action);
    // case actionTypes.TOGGLE_SCROLL_SHOW:
    //   return state.set('showScroll', action.show);
    default:
      return state;
  }
};
