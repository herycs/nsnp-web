import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Carousel } from "zarm";
import ArticleItem from "../ArticleItem";
import {
  baseUrl,
  getGroup,
  getRankList,
  getUserVisit,
  getLifeRecommendArticle,
} from "../../request";
import "./index.scss";

function LifeCard({ item }) {
  const [lifeList, setLisfeList] = useState([]);

  useEffect(() => {
    getLifeRecommendArticle(0).then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
      }
    });
  }, []);

  return (
    <div className="life-wrapper">
      {lifeList.map((item, index) => {
        return (
          <ArticleItem
            key={index}
            index={index}
            userInfo={null}
            articleInfo={item}
          />
        );
      })}
    </div>
  );
}

const MiniCard = ({ item }) => {
  const history = useHistory();

  return (
    <div
      className="mini-card"
      onClick={() => {
        history.push(`/discuss/${item.id}`);
      }}
    >
      <img
        src={!item.url ? baseUrl + item.img : item.url}
        alt=""
        className="img"
      />
      <p className="summary">{item.summary}</p>
    </div>
  );
};

function Explore() {
  const item = {
    url: "https://pic4.zhimg.com/v2-e8592940d3e0cb2b81c9b3a6fcccd8d0_im.jpg",
    summary: "全部话题",
  };
  const [groupList, setGroupList] = useState([]);
  const [rankList, setRankList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    getGroup().then((res) => {
      if (res.code === 20000) {
        setGroupList(res.data);
      }
    });
    getRankList().then((res) => {
      if (res.code === 20000) {
        setRankList(res.data);
      }
    });
    getUserVisit().then((res) => {
      if (res.code === 20000) {
        setHistoryList(res.data);
      }
    });
  }, []);

  const Rank = () => {
    const history = useHistory();

    return rankList.map((item, index) => (
      <div key={+index} className="carousel_item_pic">
        <div className="list-header">
          <span style={{ fontSize: 14 }}>{item.name}</span>
          <span>233w人正在讨论</span>
        </div>
        <div className="list-content">
          {item.data.splice(0, 3).map((item, index) => (
            <div key={index} style={{}} className="list-item">
              <div style={{ display: "flex" }}>
                <p
                  className="count"
                  style={{ color: `rgba(255, 165, 0,${1 - index / 3})` }}
                >
                  {index + 1}
                </p>
                <p
                  className="name-wrap"
                  onClick={() => {
                    history.push(`/discuss/${item.id}`);
                  }}
                >
                  <span className="name">{item.name}</span>
                  <span className="desc">{item.summary}</span>
                </p>
              </div>

              <div>
                <p style={{ color: "#fff" }}> 233</p>
                <p
                  className="hotcount"
                  style={{
                    fontSize: 14,
                    color: `rgba(255, 165, 0,.9)`,
                  }}
                >
                  {item.pro}w热度
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="explore-wrapper">
      <div className="header">
        <div style={{ display: "flex", transition: "all .6s " }}>
          <p
            className="title"
            style={{
              marginRight: 30,
              color: cur !== 0 ? "#ccc" : "#000",
              fontWeight: cur !== 0 ? 200 : "600",
              fontSize: cur !== 0 ? 13 : 14,
            }}
            onClick={() => setCur(0)}
          >
            我加入的
          </p>
          <p
            className="title"
            style={{
              color: cur !== 1 ? "#ccc" : "#000",
              fontWeight: cur !== 1 ? 200 : 600,
              fontSize: cur !== 1 ? 13 : 14,
            }}
            onClick={() => setCur(1)}
          >
            我看过的
          </p>
        </div>
        <div className="header-list" style={{ overflow: "hidden" }}>
          {cur === 0
            ? groupList.map((item, index) => (
                <MiniCard item={item} key={index}></MiniCard>
              ))
            : historyList.map((item, index) => (
                <MiniCard item={item} key={index}></MiniCard>
              ))}
          <MiniCard item={item}></MiniCard>
        </div>
      </div>
      <div className="rank">
        <p className="title">排行榜</p>
        <div className="rank-list">
          <Carousel
            onChange={(index) => {
              console.log(`onChange: ${index}`);
            }}
          >
            {Rank()}
          </Carousel>
        </div>
      </div>
      <LifeCard />
    </div>
  );
}

export default Explore;
