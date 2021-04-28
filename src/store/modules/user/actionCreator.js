import { getUserInfo } from '../../../request';
import * as actionTypes from './actionTypes';

export const getUserData = (payload) => {
  return (dispatch) => {
    getUserInfo()
      .then((res) => {
        console.log(res);
        if (res.code === 20000) {
          const action = setUserData(res.data);
          dispatch(action);
        }
      })
      .catch((e) => {
        console.log(e, '出现错误');
      });
  };
};

export const setUserData = (payload) => {
  return {
    type: actionTypes.CHANGE_USER_DATA,
    payload,
  };
};
