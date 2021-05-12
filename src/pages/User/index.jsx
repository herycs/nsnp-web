import React, { useState, useEffect } from "react";
import "./index.scss";
import { Toast } from "zarm";
import { TabIcon } from "../../assets/icon";
import ArticleItem from "../ArticleItem";
import CommonComment from "../../components/CommonComment";
import {
  baseUrl,
  getUserLifeRecordList,
  getCommentList,
  getUserGroupList,
} from "../../request";
import { useHistory } from "react-router";

const Header = ({ userInfo }) => {
  const [flag, setFlag] = useState(false);
  const [optionFlag, setOptionFlag] = useState(false);
  const history = useHistory();

  return (
    <div className="header">
      <div className="d">
        <div className="left">
          <div className="avatar">
            <img src={baseUrl + userInfo.avatar} alt="" />
          </div>
          <p className="username">{userInfo.nickName}</p>
        </div>
        <div className="right">
          <span
            className="message"
            onClick={() => {
              Toast.show({
                content: "当前功能未开放",
                stayTime: 1500,
                afterClose: () => {
                  // setFlag(!flag);
                  // console.log('Toast已关闭');
                },
              });
            }}
          >
            私信
          </span>
          <span
            className="following"
            onClick={() => {
              if (optionFlag) {
                Toast.show({
                  content: "请取消屏蔽后，再进行关注",
                  stayTime: 1500,
                  afterClose: () => {
                    // setFlag(!flag);
                    // console.log('Toast已关闭');
                  },
                });
              } else {
                setFlag(!flag);
                Toast.show({
                  content: !flag ? "关注成功" : "已取消",
                  stayTime: 1500,
                  afterClose: () => {
                    // console.log('Toast已关闭');
                  },
                });
              }
            }}
          >
            {!flag ? "关注" : "取消关注"}
          </span>
          <span
            className="option"
            onClick={() => {
              setOptionFlag(!optionFlag);
              setFlag(false);
              Toast.show({
                content: !optionFlag ? "屏蔽成功,已同时取消关注" : "已取消",
                stayTime: 1500,
                afterClose: () => {
                  // console.log('Toast已关闭');
                },
              });
            }}
          >
            {!optionFlag ? "屏蔽" : "取消屏蔽"}
          </span>
        </div>
      </div>
      <div className="bottom">
        <p className="follow">
          <span className="star">{userInfo.thubmCount}获赞</span>
          <span className="follow-count">{userInfo.likeCount}关注</span>
          <span className="fans">{userInfo.funCount}粉丝</span>
        </p>
        <p className="desc" onClick={() => history.push("/change_interest")}>
          {userInfo.interest ? userInfo.interest.slice(0, 15) : ""}
          <TabIcon type="iconbianji" key={1} />
        </p>
      </div>
    </div>
  );
};

const Article = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getUserLifeRecordList().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setArticleList(res.data);
      }
    });
  }, []);

  return (
    <div>
      {articleList &&
        articleList.map((item, index) => {
          return (
            <div key={index}>
              <ArticleItem
                index={index}
                userInfo={null}
                articleInfo={item}
              ></ArticleItem>
            </div>
          );
        })}
    </div>
  );
};

function Comment() {
  const [commentList, setComment] = useState([]);

  useEffect(() => {
    getCommentList().then((res) => {
      setComment(res.data);
    });
  }, []);
  return (
    <div>
      <CommonComment list={commentList} />
    </div>
  );
}

function Group() {
  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    getUserGroupList().then((res) => {
      setGroupList(res.data);
    });
  }, []);
  return (
    <div className="group-list">
      {groupList.map((item, index) => (
        <div
          className="group-item"
          key={index}
          style={{ backgroundImage: `url(${baseUrl}${item.img})` }}
        >
          <div className="text">
            <p className="name">
              <span>{item.name}</span>
              <span>{item.member}</span>
            </p>
            <p className="summary">{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const List = () => {
  const [active, setActive] = useState(0);
  let arr = ["帖子", "评论", "圈子"];

  return (
    <div className="list">
      <div className="list-header">
        {arr.map((item, index) => (
          <div
            className={active === index ? "active item" : "item"}
            onClick={() => {
              setActive(index);
            }}
            key={index}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div>
        {active === 0 ? <Article /> : ""}
        {active === 1 ? <Comment /> : ""}
        {active === 2 ? <Group /> : ""}
      </div>
    </div>
  );
};

function User({ userInfo }) {
  // const userInfo = useSelector((state) => {
  //   return state.getIn(['user', 'userInfo']);
  // });

  return (
    <div className="user-wrapper">
      <Header userInfo={userInfo}></Header>
      <List></List>
    </div>
  );
}

export default User;
