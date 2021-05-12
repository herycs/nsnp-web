import "./index.scss";
import React, { useEffect, useState } from "react";
import { getUserArticle } from "../../request";
import ArticleItem from "../ArticleItem";

function Article({ handleSetHeader }) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    handleSetHeader("发帖", true);
  });
  useEffect(() => {
    getUserArticle().then((res) => {
      if (res.code === 20000) {
        setArticleList(res.data);
        console.log(res.data);
      }
    });
  }, []);

  return (
    <div className="article-wrapper">
      {articleList.map((item, index) => {
        return (
          <div key={index}>
            <ArticleItem
              index={index}
              userInfo={item.userInfo}
              articleInfo={item.articleInfo}
            />
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div className="article-wrapper">
  //     {articleList.map((item, index) => {
  //       return (
  //         <div key={index} className="article">
  //           <div className="title">{item.title}</div>
  //           <div
  //             className="content"
  //             dangerouslySetInnerHTML={{
  //               __html: item.content,
  //             }}
  //           ></div>
  //           <div class="detail">
  //             <div>访问:{item.visits ? item.visits : 0}</div>

  //             <div>评论:{item.comment ? item.comment : 0}</div>

  //             <div>详情:{item.thumbup ? item.thumbup : 0}</div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default Article;
