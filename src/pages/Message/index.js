import React from "react";
import "./index.scss";

function MsgItem() {
  return (
    <div className="msg-item">
      <div className="msg-user-info">
        <div className="msg-user-img">头像</div>
        <div className="msg-user-summary">概要</div>
      </div>
      <div className="msg-words">hello</div>
    </div>
  );
}

function Message() {
  console.log(233);
  return (
    <div className="msg-wrapper">
      <div className="msg-plan-wrapper">
        <div className="msg-menu">
          <div className="msg-menu-item">系统</div>
          <div className="msg-menu-item">好友</div>
        </div>
        <div className="msg-info-list"></div>
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
        <MsgItem />
      </div>
    </div>
  );
}

export default Message;
