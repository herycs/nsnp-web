import React, { useState } from 'react';
import './index.scss';
import { Toast } from 'zarm';
import { baseUrl } from '../../request';
import { useHistory } from 'react-router';

const Header = ({ userInfo }) => {
  const [flag, setFlag] = useState(false);
  const [optionFlag, setOptionFlag] = useState(false);
  const history = useHistory();
  return (
    <div className='header'>
      <div className='d'>
        <div className='left'>
          <div className='avatar'>
            <img src={baseUrl + userInfo.avatar} alt='' />
          </div>
          <p className='username'>{userInfo.nickname}</p>
          <p className='desc' onClick={() => history.push('/change_interest')}>
            {userInfo.interest ? userInfo.interest.slice(0, 10) : ''}
            {'...'}
          </p>
        </div>
        <div className='right'>
          <span
            className='message'
            onClick={() => {
              Toast.show({
                content: '当前功能未开放',
                stayTime: 1500,
                afterClose: () => {
                  // setFlag(!flag);
                  // console.log('Toast已关闭');
                },
              });
            }}
          >
            私信
          </span>
          <span
            className='following'
            onClick={() => {
              if (optionFlag) {
                Toast.show({
                  content: '请取消屏蔽后，再进行关注',
                  stayTime: 1500,
                  afterClose: () => {
                    // setFlag(!flag);
                    // console.log('Toast已关闭');
                  },
                });
              } else {
                setFlag(!flag);
                Toast.show({
                  content: !flag ? '关注成功' : '已取消',
                  stayTime: 1500,
                  afterClose: () => {
                    // console.log('Toast已关闭');
                  },
                });
              }
            }}
          >
            {!flag ? '关注' : '取消关注'}
          </span>
          <span
            className='option'
            onClick={() => {
              setOptionFlag(!optionFlag);
              setFlag(false);
              Toast.show({
                content: !optionFlag ? '屏蔽成功,已同时取消关注' : '已取消',
                stayTime: 1500,
                afterClose: () => {
                  // console.log('Toast已关闭');
                },
              });
            }}
          >
            {!optionFlag ? '屏蔽' : '取消屏蔽'}
          </span>
        </div>
      </div>
      <div className='bottom'>
        <p className='follow'>
          <span className='star'>123获赞</span>
          <span className='follow-count'>{flag ? 124 : 123}关注</span>
          <span className='fans'>123粉丝</span>
        </p>
        <p className='desc'>{userInfo.desc}</p>
      </div>
    </div>
  );
};

const List = () => {
  const [active, setActive] = useState(0);
  let arr = ['帖子', '评论', '圈子'];
  return (
    <div className='list'>
      <div className='list-header'>
        {arr.map((item, index) => (
          <div
            className={active === index ? 'active item' : 'item'}
            onClick={() => setActive(index)}
            key={index}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function User({ userInfo }) {
  // const userInfo = useSelector((state) => {
  //   return state.getIn(['user', 'userInfo']);
  // });
  return (
    <div className='user-wrapper'>
      <Header userInfo={userInfo}></Header>
      <List></List>
    </div>
  );
}

export default User;
