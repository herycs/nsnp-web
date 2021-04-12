import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ userInfo }) => {
  return (
    <div className='header'>
      <div className='d'>
        <div className='left'>
          <div className='avatar'>
            <img src={userInfo.avatar} alt='' />
          </div>
          <p className='username'>{userInfo.name}</p>
        </div>
        <div className='right'>
          <span className='message'>私信</span>
          <span className='following'>关注</span>
          <span className='option'>*</span>
        </div>
      </div>
      <div className='bottom'>
        <p className='follow'>
          <span className='star'>123获赞</span>
          <span className='follow-count'>123关注</span>
          <span className='fans'>123粉丝</span>
        </p>
        <p className='desc'>{userInfo.desc}</p>
      </div>
    </div>
  );
};

const List = () => {
  return <div className='list'>liebiao</div>;
};

function User() {
  const userInfo = useSelector((state) => {
    // console.log(state.getIn(['home', 'showWriteCommnet']));
    // console.log(state.getIn('user', 'id'));
    return state.getIn(['user', 'userInfo']);
  });
  return (
    <div className='user-wrapper'>
      <Header userInfo={userInfo}></Header>
      <List></List>
    </div>
  );
}

export default User;
