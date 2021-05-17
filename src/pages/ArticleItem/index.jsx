import "./index.scss";
import { baseUrl } from "../../request";
import { TabIcon } from "../../assets/icon";
import { useHistory } from "react-router";

// props;
// const { index, ...res } = props;
function ArticleItem({ index, userInfo, articleInfo }) {
  const history = useHistory();

  return (
    <div
      className="article-item-wrapper"
      onClick={() => {
        history.push("/detail?id=" + articleInfo.id);
      }}
    >
      {userInfo == null ? (
        ""
      ) : (
        <div className="user">
          <div className="user-header">
            <div className="userInfo">
              <img className="avatar" src={baseUrl + userInfo.avatar} alt="" />
              <div className="detail">
                <div className="name">{userInfo.nickName}</div>
                <div className="summary">
                  {userInfo.summary ? userInfo.interest : userInfo.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {articleInfo == null ? (
        ""
      ) : (
        <div className="article">
          <div className="article-header">
            {/* <div className="article-title">
              {articleInfo.title ? articleInfo.title : ""}
            </div> */}
            <div className="time">
              {articleInfo.createtime
                ? articleInfo.createtime.slice(0, 10)
                : ""}
            </div>
          </div>
          <div className="article-body">
            <div
              className="article-centent"
              dangerouslySetInnerHTML={{
                __html: articleInfo.content,
              }}
            ></div>
            <img src={baseUrl + articleInfo.image} alt="" />
          </div>
          <div className="tool">
            <div className="collect">
              <TabIcon type="iconsoucang" key={1} />
              <span> </span>
              {!articleInfo.visits ? 0 : articleInfo.visits}
            </div>
            <div className="comment">
              <TabIcon type="iconpinglun" key={1} />
              <span> </span>
              {!articleInfo.comment ? 0 : articleInfo.comment}
            </div>
            <div className="thumbup">
              <TabIcon type="iconzan" key={1} />
              <span> </span>
              {!articleInfo.thumbup ? 0 : articleInfo.thumbup}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleItem;
