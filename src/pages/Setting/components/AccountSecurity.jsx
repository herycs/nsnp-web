import React, { useEffect } from 'react';
import { Cell } from 'zarm';
import { baseUrl } from '../../../request';
import './index.scss';

function AccountSecurity({ history, handleSetHeader, userInfo }) {
  useEffect(() => {
    handleSetHeader('账号安全', true);
  });
  return (
    <div className='ass-wrapper'>
      <img className='avatar' alt='' src={baseUrl + userInfo.avatar}></img>
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
