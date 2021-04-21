// import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router";
import { TabBar } from "zarm";
import { TabIcon } from "../../assets/icon";

function UserTabBar({ visible = true }) {
  const [activeKey, setActiveKey] = useState("home");
  let history = useHistory();
  // const [visible, setVisible] = useState(true);
  const handleClick = (key) => {
    setActiveKey(key);
    history.push(key);
  };

  return (
    <>
      <TabBar visible={visible} activeKey={activeKey} onChange={handleClick}>
        <TabBar.Item
          itemKey="home"
          title="主页"
          icon={<TabIcon type="iconquanzi" />}
        />
        <TabBar.Item
          itemKey="explore"
          title="探索"
          icon={<TabIcon type="icontansuo1" />}
        />
        <TabBar.Item
          itemKey="message"
          title="消息"
          icon={<TabIcon type="iconxiaoxi1" />}
          badge={{ shape: "circle", text: "1" }}
        />
        <TabBar.Item
          itemKey="me"
          title="我的"
          icon={<TabIcon type="iconyonghu" />}
          badge={{ shape: "dot" }}
        />
      </TabBar>
    </>
  );
}

export default UserTabBar;
