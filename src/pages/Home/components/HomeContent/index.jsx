import React, { useCallback } from "react";
import TrendCard from "../../../../components/TrendCard";
import { Collapse } from "zarm";
import "./index.scss";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../../request";

const UserInfo = ({ item = {}, handleRouteToUser }) => {
  // console.log(item);
  return (
    <div>
      {!item ? (
        ""
      ) : (
        <div className="userinfo">
          <div className="avatar" onClick={() => handleRouteToUser(item)}>
            <img src={baseUrl + item.avatar} alt=""></img>
          </div>
          <div className="user">
            <p className="name">{item.nickName}</p>
            <p className="desc">
              {item.interest && item.interest.slice(2, 15)}
            </p>
          </div>
          <div className="zhanwei"></div>
        </div>
      )}
    </div>
  );
};

function HomeContent({ list, handleChangeWriteModal }) {
  console.log("list", list);
  // 根据不同类型切换，发送请求，获取数据渲染
  let history = useHistory();
  const handleClick = useCallback(
    (item) => {
      history.push("/detail?id=" + item.id);
    },
    [history]
  );
  const handleRouteToUser = useCallback(
    (user) => {
      console.log('handleRoutTouser', user)
      history.push("/user?id=" + user.id);
    },
    [history]
  );
  return (
    <>
      <Collapse
        disabled
        // activeKey={activeKey}
        animated={true}
        multiple={true}
        onChange={(activeKey) => {
          // console.log(activeKey);
          // setActiveKey(activeKey);
        }}
        defaultActiveKey={["0", "1", "2", "3"]}
      >
        {/* <div className='content'> */}
        {list &&
          list.map((item, key) => {
            return (
              <Collapse.Item
                key={key}
                title={
                  <UserInfo
                    item={item.userInfo}
                    className="88"
                    handleRouteToUser={handleRouteToUser}
                  />
                }
              >
                <TrendCard
                  handleChangeWriteModal={handleChangeWriteModal}
                  handleClick={handleClick}
                  item={item.articleInfo}
                ></TrendCard>
              </Collapse.Item>
            );
          })}
        {/* </div> */}
      </Collapse>
      <Link to="pusharticle" className="pusharticle">
        发布
      </Link>
    </>
  );
}

export default HomeContent;
