import React from "react";
import "./index.scss";

function Explore() {
  return (
    <div className="explore-wrapper">
      <div className="explore-plan-wrapper">
        <div className="explore-head-wrapper"> 
        <div className="explore-head-item">好友发现</div>
        <div className="explore-head-item">在线匹配</div>
        <div className="explore-head-item">资源探索</div>

        </div>
        <div className="explore-resource-wrapper">
          资源维护
          <div>文章</div>
          <div>视频</div>
          <div>音频</div>
        </div>
        <div className="explore-friend-wrapper">
          <div>扩列</div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
