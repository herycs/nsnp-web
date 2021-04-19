import React from "react";
import "./index.scss";

function Message() {
  console.log(233);
  return (
    <div className="msg-wrapper">
      <div className="msg-plan-wrapper">
        <div className="msg-menu">系统 | 好友</div>
        <div className="msg-info-list">
          <div className="msg-item">
            <div>头像</div>
            <div>概要</div>
          </div>
          <div className="msg-item">
            <div>头像</div>
            <div>概要</div>
          </div>
          <div className="msg-item">
            <div>头像</div>
            <div>概要</div>
          </div>
          <div className="msg-item">
            <div>头像</div>
            <div>概要</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
