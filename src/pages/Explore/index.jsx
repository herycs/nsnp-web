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
          <div className="explore-resource-title">资源维护</div>
          <div className="explore-resource">
            <div className="explore-resource-item">文章</div>
            <div className="explore-resource-item">视频</div>
            <div className="explore-resource-item">音频</div>
          </div>
        </div>
        <div className="explore-friend-wrapper">
          <div className="explore-friend-title">扩列</div>
          <div className="explore-friend">
            <div className="explore-friend-item">头像 | 好友1</div>
            <div className="explore-friend-item">好友2</div>
            <div className="explore-friend-item">。。。</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
