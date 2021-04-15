import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header';
import UserTabBar from '../../components/TabBar';

function Redirect({ route }) {
  let history = useHistory();
  const pathname = history.location.pathname;

  const [visible, setVisible] = useState(false);
  const arr = ['/', '/home', '/found', '/me', '/message'];
  const map = {
    '/': '社区',
    '/home': '社区',
    '/found': '发现',
    '/message': '消息',
    '/me': '我的',
    '/detail': '详情',
    '/user': '个人主页',
    '/setting': '设置',
  };
  // useEffect(() => {
  //   console.log(history);
  //   // console.log(route, 'redirect');
  //   // 判断用户身份
  // }, [route]);

  useEffect(() => {
    if (arr.indexOf(pathname) === -1) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [arr, pathname]);
  let showBackList = ['/detail', '/user', '/setting'];
  return (
    <div>
      <Header
        title={map[pathname]}
        showBack={showBackList.indexOf(pathname) !== -1}
        showSetting={pathname === '/me'}
      >
        {' '}
      </Header>
      {renderRoutes(route.routes)}
      <UserTabBar visible={visible}></UserTabBar>
    </div>
  );
}

export default Redirect;
