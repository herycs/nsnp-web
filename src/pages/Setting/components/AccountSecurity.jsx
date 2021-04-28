import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Cell, Button, Select, Toast } from 'zarm';
import { baseUrl, getUserInfo } from '../../../request';
import './index.scss';

function AccountSecurity({ history, handleSetHeader ,userInfo}) {
  const [visible, setVisible] = useState(false);

  // const userInfo = useSelector((state) => {
  //   return state.getIn(['user', 'userInfo']);
  // });

  useEffect(() => {
    handleSetHeader('账号安全', true);
  });
  return (
    <div className='ass-wrapper'>
      <img className='avatar' src={baseUrl + userInfo.avatar}></img>
      <Cell
        title={
          <div>
            <p style={{ color: '#ccc', fontSize: 13 }}>当前账号</p>
            <p>{userInfo.nickname}</p>
          </div>
        }
        description={
          <div>
            <p style={{ color: '#ccc', height: '1em' }}> </p>
            <p>手机号登录</p>
          </div>
        }
      ></Cell>
      <Cell
        title='修改邮箱'
        onClick={() => {
          history.push('/change_email');
        }}
        hasArrow
      ></Cell>
      <Cell
        title='修改密码'
        onClick={() => {
          history.push('/reset_passowrd');
        }}
        hasArrow
      ></Cell>
    </div>
  );
}

export default AccountSecurity;
