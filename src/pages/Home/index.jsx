// import React from 'react';
// import { renderRoutes } from 'react-router-config';
import { useDispatch, useSelector } from 'react-redux';
import HomeContent from './components/HomeContent';
import HomeTabs from './components/HomeTabs';
import { actionCreator } from '../../store/modules/home';
import { useCallback, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import UserTabBar from './components/TabBar';
import { getAllArticle } from '../../request';

// const list = [
//   {
//     id: '2123bsa',
//     name: '张三',
//     avatar: 'https://dummyimage.com/200x200',
//     url: '/api/png/plane.jpg',
//     desc: '冲冲冲',
//     content:
//       '今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。',
//     share: 23,
//     like: 99,
//     comment: 9,
//   },
// ];
function Home({ route }) {

  const [list, setList] = useState([])
  const show = useSelector((state) =>
    state.getIn(['home', 'showWriteCommnet'])
  );
  const dispatch = useDispatch();
  // console.log(show);
  const handleChangeWriteModal = useCallback(() => {
    dispatch(actionCreator.changeShowWirteComment(!show));
  }, [show, dispatch]);

  useEffect(() => {
    getAllArticle().then((res) => {
      console.log(res.data);
      setList(res.data)
    });
  }, []);

  return (
    <div>
      <HomeTabs></HomeTabs>
      <HomeContent
        handleChangeWriteModal={handleChangeWriteModal}
        list={list}
      ></HomeContent>
    </div>
  );
}

export default Home;
