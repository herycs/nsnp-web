import "./index.scss";

function Group() {
  return (
    <div className="group-wrapper">
      <div className="group-tool">工具栏</div>
      <div className="group-header-wrapper">
        <div className="summary-wrapper">
          <div className="header-name">jK制服</div>
          <div className="button-wrapper">
          <div className="button">加入</div>
          </div>
        </div>
        <div className="header-summary">
          <div className="total">20022</div>
          <div className="summary">
            介绍，这是以穿衣群体为主的分享穿衣风格的帖子
          </div>
        </div>
      </div>

      <div className="group-body-wrapper">
        <div className="table-bar">新帖 | 热门</div>
        <div className="group-article-list">
                <div className="article">
                帖子
                </div>
                <div className="article">
                帖子
                </div>
        </div>

      </div>
    </div>
  );
}

export default Group;
