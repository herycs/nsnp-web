import React from "react";
import "./index.scss";

const MessageList = [
  {
    key: 0,
    name: "小星",
    avatar:
      "https://tse3-mm.cn.bing.net/th/id/OIP.oMdc13o6MbB9DN4A8BoHtwHaMu?w=190&h=327&c=7&o=5&dpr=1.25&pid=1.7",
    summary: "hello,我们近期有活动在西安市雁塔区举办，具体信息可以查看xxx",
    date: "04/17",
  },
  {
    key: 1,
    name: "小空",
    avatar:
      "https://tse3-mm.cn.bing.net/th/id/OIP.oMdc13o6MbB9DN4A8BoHtwHaMu?w=190&h=327&c=7&o=5&dpr=1.25&pid=1.7",
    summary: "您的账号最近西安市登录",
    date: "04/17",
  },
  {
    key: 2,
    name: "流星",
    avatar:
      "https://tse3-mm.cn.bing.net/th/id/OIP.oMdc13o6MbB9DN4A8BoHtwHaMu?w=190&h=327&c=7&o=5&dpr=1.25&pid=1.7",
    summary: "您的申请已经通过了哦，希望您玩的愉快",
    date: "20/04/17",
  },
];

function Message() {
  console.log(233);
  return (
    <div className="msg-wrapper">
      <div className="msg-plan-wrapper">
        <div className="msg-menu">
          <div className="msg-menu-item">系统</div>
          <div className="msg-menu-item">好友</div>
        </div>
        {MessageList.map((item, index) => {
          return (
            <div className="msg-item">
              <div className="msg-info">
                <div
                  className="msg-user-img"
                  style={{
                    backgroundImage: `url(${item.avatar})`,
                    backgroundSize: "100%",
                  }}
                ></div>
                <div className="msg-user-summary">
                  <div className="msg-header">
                    <div className="user-name">{item.name}</div>
                    <div className="msg-time">{item.date}</div>
                  </div>
                  <div className="msg-words">{item.summary}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
