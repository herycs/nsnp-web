import "./index.scss";
import React, { useEffect, useState } from "react";
import { getFunList, baseUrl } from "../../request";

function FunList({ handleSetHeader }) {
  const [funList, setFunList] = useState([]);

  useEffect(() => {
    handleSetHeader("粉丝列表", true);
  });

  useEffect(() => {
    getFunList().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setFunList(res.data);
      }
    });
  }, []);

  return (
    <div className="user-list-wrapper">
      {funList &&
        funList.map((item, index) => {
          return (
            <div key={index} className="user-info">
              <div className="user-avatar">
                <img src={baseUrl + item.avatar} alt="" />
              </div>
              <div className="desc">
                <div className="name">{item.nickName}</div>
                <div className="summary">{item.summary}</div>
              </div>
              <div className="button">已关注</div>
            </div>
          );
        })}
    </div>
  );
}

export default FunList;
