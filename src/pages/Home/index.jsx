// import React from 'react';
// import { renderRoutes } from 'react-router-config';
import { useDispatch, useSelector } from 'react-redux';
import HomeContent from './components/HomeContent';
import HomeTabs from './components/HomeTabs';
import { actionCreator } from '../../store/modules/home';
import { useCallback, useEffect, useState } from 'react';

import { getAllArticle } from '../../request';

function Home({ route }) {
  const [list, setList] = useState([]);
  const show = useSelector((state) =>
    state.getIn(['home', 'showWriteCommnet'])
  );

  const dispatch = useDispatch();

  const handleChangeWriteModal = useCallback(() => {
    dispatch(actionCreator.changeShowWirteComment(!show));
  }, [show, dispatch]);

  useEffect(() => {
    getAllArticle().then((res) => {
      // console.log(res.data);
      setList(res.data);
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
