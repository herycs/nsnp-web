// import React from 'react';
// import { renderRoutes } from 'react-router-config';

import HomeContent from './components/HomeContent';
import HomeTabs from './components/HomeTabs';

// import UserTabBar from './components/TabBar';
const list = [
  {
    id:'2123bsa',
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
];
function Home({ route }) {
  console.log('home');
  return (
    <div>
      <HomeTabs></HomeTabs>
      <HomeContent list={list}></HomeContent>
    </div>
  );
}

export default Home;
