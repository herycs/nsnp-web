import React, { useEffect, useState } from "react";
import { getGroupDetail } from "../../request";
import ArticleItem from "../ArticleItem";
import "./index.scss";

function Discuss({ handleSetHeader, match }) {
  const [cur, setCur] = useState(0);
  const [info, setInfo] = useState({});
  const [news, setNews] = useState([]);
  const [hots, setHots] = useState([]);
  useEffect(() => {
    handleSetHeader("圈子", true);
  });

  useEffect(() => {
    const { id } = match.params;
    getGroupDetail(id).then((res) => {
      if (res.code === 20000) {
        const { baseInfo, newList, hotList } = res.data;
        setInfo(baseInfo[0]);
        setNews(newList);
        setHots(hotList);
      }
    });
  }, []);
  return (
    <div className="discuss-wrapper">
      <div className="header">
        <div>
          <p className="title">{info.name}</p>
          <p className="total">{info.member}</p>
          <p className="desc">{info.summary}</p>
        </div>
        <p className="join">
          <span>{info.state ? "已加入" : "加入"}</span>
        </p>
      </div>
      <div className="body">
        <div className="table-bar">
          <div
            className="table-bar-item"
            style={{
              fontWeight: cur === 0 ? "bold" : "normal",
              transition: "all .3s",
            }}
            onClick={() => {
              setCur(0);
            }}
          >
            最新
          </div>
          <div
            className="table-bar-item"
            style={{
              fontWeight: cur === 1 ? "bold" : "normal",
              transition: "all .3s",
            }}
            onClick={() => {
              setCur(1);
            }}
          >
            热门
          </div>
        </div>
        {cur === 0
          ? news.map((item, index) => (
              <ArticleItem key={index} userInfo={null} articleInfo={item} />
            ))
          : ""}
        {cur === 1
          ? hots.map((item, index) => (
              <ArticleItem key={index} userInfo={null} articleInfo={item} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Discuss;
