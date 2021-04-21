import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { TabBar, Cell } from "zarm";
import { useHistory } from "react-router";
import { TabIcon } from "../../assets/icon";

const options = [
  { key: 0, title: "空间", icon: "iconapprovedicon" },
  { key: 1, title: "帖子", icon: "icontieziguanli" },
  { key: 2, title: "评论", icon: "iconpinglunbeifen" },
  { key: 3, title: "收藏", icon: "iconsoucang" },
];

const services = [
  { key: 0, title: "创作", icon: "iconchuangzuo" },
  { key: 1, title: "公告", icon: "icongonggao1" },
  { key: 2, title: "浏览历史", icon: "iconlishijilu1" },
  { key: 3, title: "审核", icon: "iconshenhe" },
];

const recommend = [
  { key: 0, title: "帮助反馈", icon: "iconshezhi-" },
  { key: 1, title: "我的下载", icon: "iconwodexiazai1" },
  { key: 2, title: "", icon: "iconlishij" },
  { key: 3, title: "", icon: "iconlishij" },
];

function Mine() {
  const history = useHistory();
  const userInfo = useSelector((state) => {
    return state.getIn(["user", "userInfo"]);
  });
  return (
    <div className="mine-wrapper">
      <div className="userinfo">
        <img
          src={userInfo.avatar}
          alt=""
          onClick={() => history.push("/user?id=" + userInfo.id)}
        />
        <p className="username">{userInfo.name}</p>
        <p className="wrap">
          <span className="like">174赞</span>
          <span className="follow">2关注</span>
          <span className="fans">1粉丝</span>
        </p>
        <p className="desc">{userInfo.desc}</p>
      </div>
      <div
        className="options-list"
        onClick={() => history.push("/user?id=" + userInfo.id)}
      >
        {options.map((item, index) => {
          return (
            <TabBar.Item
              itemKey={item.key}
              title={item.title}
              icon={<TabIcon type={item.icon} key={index + item.key} />}
            />
          );
        })}
      </div>
      <div>
        <Cell title="用户服务" />
        <div className="options-list">
          {services.map((item, index) => {
            return (
              <TabBar.Item
                itemKey={item.key}
                title={item.title}
                icon={<TabIcon type={item.icon} key={index + item.key} />}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Cell title="推荐模块" />
        <div className="options-list">
          {recommend.map((item, index) => {
            return (
              <TabBar.Item
                itemKey={item.key}
                title={item.title}
                icon={<TabIcon type={item.icon} key={index + item.key} />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mine;
