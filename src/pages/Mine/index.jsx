import React from "react";
import "./index.scss";
import { TabBar, Cell } from "zarm";
import { useHistory } from "react-router";
import { TabIcon } from "../../assets/icon";
import { baseUrl } from "../../request";

const options = [
  {
    key: 0,
    title: "空间",
    icon: "iconapprovedicon",
    param: true,
    url: "/user",
  },
  {
    key: 1,
    title: "帖子",
    icon: "icontieziguanli",
    param: false,
    url: "/article",
  },
  {
    key: 2,
    title: "评论",
    icon: "iconpinglunbeifen",
    param: false,
    url: "/comment",
  },
  { key: 3, title: "收藏", icon: "iconsoucang", param: false, url: "/collect" },
];

const services = [
  { key: 0, title: "创作", icon: "iconchuangzuo", url: "/creater" },
  { key: 1, title: "公告", icon: "icongonggao1", url: "/notice" },
  { key: 2, title: "浏览历史", icon: "iconlishijilu1", url: "/history" },
  { key: 3, title: "", icon: "iconshenhsse", url: "/notice" },
];

const recommend = [
  { key: 0, title: "帮助反馈", icon: "iconshezhi-", url: "/help" },
  { key: 1, title: "我的资源", icon: "iconwodexiazai1", url: "/resource" },
  { key: 2, title: "", icon: "iconlishij", url: "/notice" },
  { key: 3, title: "", icon: "iconlishij", url: "/notice" },
];

function Mine({ userInfo }) {
  const history = useHistory();
  // const userInfo = useSelector((state) => {
  //   return state.getIn(['user', 'userInfo']);
  // });
  return (
    <div className="mine-wrapper">
      <div className="userinfo">
        <img
          src={baseUrl + userInfo.avatar}
          alt=""
          onClick={() => history.push("/user?id=" + userInfo.id)}
        />
        <p className="username">{userInfo.nickName}</p>
        <p className="wrap">
          <span className="like">{userInfo.thubmCount}赞</span>
          <span className="follow" onClick={() => history.push("/user_list")}>
            {userInfo.likeCount}关注
          </span>
          <span className="fans" onClick={() => history.push("/fun_list")}>
            {userInfo.funCount}粉丝
          </span>
        </p>
        <p className="desc">{userInfo.interest}</p>
      </div>
      <div className="options-list">
        {options.map((item, index) => {
          return (
            <TabBar.Item
              key={index}
              itemKey={item.key}
              title={item.title}
              icon={
                <TabIcon
                  type={item.icon}
                  key={index + item.key}
                  onClick={() =>
                    history.push(
                      item.url + (item.param ? "?id=" + userInfo.id : "/")
                    )
                  }
                />
              }
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
                key={index}
                itemKey={item.key}
                title={item.title}
                icon={
                  <TabIcon
                    type={item.icon}
                    key={index + item.key}
                    onClick={() => {
                      history.push(`${item.url}`);
                    }}
                  />
                }
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
                key={index}
                itemKey={item.key}
                title={item.title}
                icon={
                  <TabIcon
                    type={item.icon}
                    key={index + item.key}
                    onClick={() => {
                      history.push(`${item.url}`);
                    }}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mine;
