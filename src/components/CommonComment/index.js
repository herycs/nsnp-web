import React from "react";

function CommonComment({ list }) {
  return (
    <div className="comment-wrapper">
      {list &&
        list.map((item, index) => {
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

export default CommonComment;
