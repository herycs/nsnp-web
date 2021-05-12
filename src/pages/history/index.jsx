import "./index.scss";
import React, { useEffect, useState } from "react";
import { getUserHistory } from "../../request";

function History({ handleSetHeader }) {
  const [historyList, setHistory] = useState([]);

  useEffect(() => {
    handleSetHeader("浏览历史", true);
  });

  useEffect(() => {
    getUserHistory().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setHistory(res.data);
      }
    });
  }, []);

  return (
    <div className="history-wrapper">
      {historyList.map((item, index) => {
        return (
          <div key={index} className="article">
            <div className="title">{item.title}</div>
            <div className="content">{item.content}</div>

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

export default History;
