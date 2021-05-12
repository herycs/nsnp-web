// import React from 'react';
// import { renderRoutes } from 'react-router-config';
import { useDispatch, useSelector } from "react-redux";
import HomeContent from "./components/HomeContent";
import HomeTabs from "./components/HomeTabs";
import { actionCreator } from "../../store/modules/home";
import { useCallback, useEffect, useState } from "react";

import { getAllArticle } from "../../request";
import { useHistory } from "react-router";

function Home({ route }) {
  // const [list, setList] = useState([]);
  const [res, setRes] = useState({
    happyList: [],
  });
  const history = useHistory();
  const [str, setStr] = useState("recommend");
  const show = useSelector((state) =>
    state.getIn(["home", "showWriteCommnet"])
  );

  const dispatch = useDispatch();

  const handleChangeWriteModal = useCallback(() => {
    dispatch(actionCreator.changeShowWirteComment(!show));
  }, [show, dispatch]);

  useEffect(() => {
    let userid = localStorage.getItem("userid");
    if (!userid) {
      history.push("/login");
    }
    getAllArticle().then((res) => {
      console.log(res.data);
      setRes(res.data);
    });
  }, []);

  const handleChange = useCallback(
    (str) => {
      setStr(str);
      console.log("res", str, res[str]);
    },
    [setStr]
  );

  return (
    <div>
      <HomeTabs handleChange={handleChange}></HomeTabs>
      <HomeContent
        handleChangeWriteModal={handleChangeWriteModal}
        list={res[str]}
      ></HomeContent>
    </div>
  );
}

export default Home;
