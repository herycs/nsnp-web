import React, { useEffect, useState, useCallback } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header';
import UserTabBar from '../../components/TabBar';
import { actionCreator as userActionCreator } from '../../store/modules/user';
const arr = ['/', '/home', '/explore', '/me', '/message'];
const map = {
  '/': '社区',
  '/home': '社区',
  '/explore': '探索',
  '/message': '消息',
  '/me': '我的',
  '/detail': '详情',
  '/user': '个人主页',
  '/setting': '设置',
  '/share': '分享',
};
const hideList = ['/login', '/register'];
let showBackList = ['/detail', '/user', '/setting', '/share'];

function Redirect({ route, ...props }) {
  const [title, setTitle] = useState('首页');
  const [showBack, setShowBack] = useState(false);

  let history = useHistory();
  const pathname = history.location.pathname;

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => {
    return state.getIn(['user', 'userInfo']);
  });
  useEffect(() => {
    dispatch(userActionCreator.getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (arr.indexOf(pathname) === -1) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setTitle(map[pathname]);
    setShowBack(showBackList.indexOf(pathname) !== -1);
  }, [pathname]);

  const handleSetHeader = useCallback(
    (title, showBack) => {
      setTitle(title);
      setShowBack(showBack);
    },
    [setTitle, setShowBack]
  );

  return (
    <div>
      {hideList.indexOf(pathname) === -1 ? (
        <Header
          title={title}
          showBack={showBack}
          showSetting={pathname === '/me'}
        ></Header>
      ) : (
        ''
      )}

      {renderRoutes(route.routes, {
        handleSetHeader,
        userInfo,
      })}
      <UserTabBar visible={visible}></UserTabBar>
    </div>
  );
}

export default Redirect;
