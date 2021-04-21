// import { actionTypes } from './index';
// import { fromJS } from 'immutable';

// const defaultState = fromJS({
//   id: 99,
//   userInfo: {
//     id: '2123bsa',
//     name: '张三',
//     avatar: 'https://dummyimage.com/200x200',
//     url: '/api/png/plane.jpg',
//     desc: '喜欢奥力给',
//     content:
//       '今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。',
//     share: 23,
//     like: 99,
//     comment: 9,
//   },
// });
const defaultState = {
  id: 99,
  userInfo: {
    id: '2123bsa',
    name: '张三',
    avatar: 'https://dummyimage.com/200x200',
    url: '/api/png/plane.jpg',
    desc: '喜欢奥力给',
    content:
      '今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。',
    share: 23,
    like: 99,
    comment: 9,
  },
};
//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
