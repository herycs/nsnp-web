import React, { useCallback } from 'react';
import TrendCard from '../../../../components/TrendCard';
import { Collapse } from 'zarm';
import './index.scss';
import { useHistory } from 'react-router';

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

function HomeContent({ list, handleChangeWriteModal }) {
  // 根据不同类型切换，发送请求，获取数据渲染
  let history = useHistory();
  const handleClick = useCallback(
    (item) => {
      history.push('/detail?id=' + item.id);
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
        defaultActiveKey={['0','1','2','3']}
      >
        {/* <div className='content'> */}
        {list.map((item, key) => {
          return (
            <Collapse.Item
              key={key}
              title={<UserInfo item={item} className='88' />}
            >
              <TrendCard handleChangeWriteModal={handleChangeWriteModal} handleClick={handleClick} item={item}></TrendCard>
            </Collapse.Item>
          );
        })}
        {/* </div> */}
      </Collapse>
    </>
  );
}

export default HomeContent;
