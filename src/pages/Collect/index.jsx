import "./index.scss";
import React, { useEffect, useState } from "react";
import { getCollect } from "../../request";

function Collect({ handleSetHeader }) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    handleSetHeader("收藏", true);
  });

  useEffect(() => {
    getCollect().then((res) => {
      if (res.code === 20000) {
        setArticleList(res.data);
        console.log("collect" + res.data);
      }
    });
  }, []);

  return (
    <div className="collect-wrapper">
      {articleList.map((item, index) => {
        return (
          <div key={index} className="article">
            <div className="title">{item.title}</div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            ></div>

            <div className="detail">
              <div>访问: {item.visits ? item.visits : 0}</div>

              <div>评论: {item.comment ? item.comment : 0}</div>

              <div>详情: {item.thumbup ? item.thumbup : 0}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collect;
