import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { Icon, TabBar, Cell } from 'zarm';
import { useHistory } from 'react-router';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_1340918_lpsswvb7yv.js'
);

const options = [
  { title: '空间' },
  { title: '帖子' },
  { title: '评论' },
  { title: '收藏' },
  { title: '赞过' },
];

function Mine() {
  const history = useHistory();
  const userInfo = useSelector((state) => {
    return state.getIn(['user', 'userInfo']);
  });
  return (
    <div className='mine-wrapper'>
      <div className='userinfo'>
        <img
          src={userInfo.avatar}
          alt=''
          onClick={() => history.push('/user?id=' + userInfo.id)}
        />
        <p className='username'>{userInfo.name}</p>
        <p className='wrap'>
          <span className='like'>174赞</span>
          <span className='follow'>2关注</span>
          <span className='fans'>1粉丝</span>
        </p>
        <p className='desc'>{userInfo.desc}</p>
      </div>
      <div
        className='options-list'
        onClick={() => history.push('/user?id=' + userInfo.id)}
      >
        {options.map((item, index) => {
          return (
            <TabBar.Item
              itemKey='found'
              title={item.title}
              icon={<TabIcon type='insurance' key={index + item} />}
            />
          );
        })}
      </div>
      <div>
        <Cell title='公告模块' />
        <div className='options-list'>
          {options.map((item, index) => {
            return (
              <TabBar.Item
                itemKey='found'
                title='公告'
                icon={<TabIcon type='insurance' key={index} />}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Cell title='推荐模块' />
        <div className='options-list'>
          {options.map((item, index) => {
            return (
              <TabBar.Item
                itemKey='found'
                title='推荐'
                icon={<TabIcon type='insurance' key={index} />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mine;
