// import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Icon, TabBar } from 'zarm';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_1340918_lpsswvb7yv.js'
);

function UserTabBar({ visible = true }) {
  const [activeKey, setActiveKey] = useState('home');
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
          itemKey='home'
          title='主页'
          icon={<TabIcon type='home' />}
        />
        <TabBar.Item
          itemKey='explore'
          title='探索'
          icon={<TabIcon type='insurance' />}
        />
        <TabBar.Item
          itemKey='message'
          title='消息'
          icon={<TabIcon type='insurance' />}
          badge={{ shape: 'circle', text: '1' }}
        />
        <TabBar.Item
          itemKey='me'
          title='我的'
          icon={<TabIcon type='user' />}
          badge={{ shape: 'dot' }}
        />
      </TabBar>
    </>
  );
}

export default UserTabBar;
