import "./index.scss";
import React, { useEffect, useState } from "react";
import { getLikeList, baseUrl } from "../../request";

function UserList({ handleSetHeader }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    handleSetHeader("关注列表", true);
  });

  useEffect(() => {
    getLikeList().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setUserList(res.data);
      }
    });
  }, []);

  return (
    <div className="user-list-wrapper">
      {userList && userList.map((item, index) => {
        return (
          <div key={index} className="user-info">
            <div className="user-avatar">
              <img src={baseUrl + item.avatar} alt="" />
            </div>
            <div className="desc">
              <div className="name">{item.nickName}</div>
              <div className="summary">{item.interest}</div>
            </div>
            <div className="button">已关注</div>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
