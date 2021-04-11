import React from 'react';
import TrendCard from '../../../../components/TrendCard';
import { Collapse } from 'zarm';
import './index.scss';

const UserInfo = ({ item }) => {
  return (
    <div className='userinfo'>
      <div className='avatar'>
        <img src={item.url}></img>
      </div>
      <div className='user'>
        <p className='name'>{item.name}</p>
        <p className='desc'>{item.desc}</p>
      </div>
    </div>
  );
};

function HomeContent({ list }) {
  // 根据不同类型切换，发送请求，获取数据渲染
  const animated = true;
  return (
    <>
      <Collapse
        disabled
        // activeKey={activeKey}
        animated={animated}
        multiple={animated}
        onChange={(activeKey) => {
          // console.log(activeKey);
          // setActiveKey(activeKey);
        }}
        defaultActiveKey={['0']}
      >
        {/* <div className='content'> */}
        {list.map((item, key) => {
          return (
            <Collapse.Item
              key={key}
              title={<UserInfo item={item} className='88' />}
            >
              <TrendCard item={item}></TrendCard>;
            </Collapse.Item>
          );
        })}
        {/* </div> */}
      </Collapse>
    </>
  );
}

export default HomeContent;
