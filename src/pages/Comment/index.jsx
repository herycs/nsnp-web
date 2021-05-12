import "./index.scss";
import React, { useEffect, useState } from "react";
import { getCommentList } from "../../request";

function Comment({ handleSetHeader }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    handleSetHeader("评论列表", true);
  });

  useEffect(() => {
    getCommentList().then((res) => {
      console.log(res);
      if (res.code === 20000) {
        setCommentList(res.data);
      }
    });
  }, []);

  return (
    <div className="comment-wrapper">
      {commentList.map((item, index) => {
        return (
          <div key={index} className="article">
            <div className="content">
              <div className="title">评论：</div>
              <div className="text">{item.content}</div>
            </div>
            <div className="detail">
              <div className="flag">
                {item.parentid === -1 ? "1" : "2"} 级回复
              </div>
              <div className="time">{item.ctime}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
