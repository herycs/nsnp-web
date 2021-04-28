import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Cell, Input, Button, Toast } from 'zarm';
import { changePassword, sendCode } from '../../../request';

function ResetPassword({ handleSetHeader, userInfo }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [count, setCount] = useState(60);
  const [code, setCode] = useState('');
  const history = useHistory();

  const handleClick = () => {
    if (newPassword !== password) {
      Toast.show({ content: '两次密码不一致', type: 'error' });
      return;
    }
    let newUserInfo = JSON.parse(JSON.stringify(userInfo));
    newUserInfo.password = password;
    newUserInfo.mobile = phone;
    changePassword({ code, data: newUserInfo }).then((res) => {
      console.log(res);
      if (res.code === 20006) {
        Toast.show({
          content: '验证码有误，请重新获取',
        });
        setCode('');
      }
      if (res.code === 20000) {
        Toast.show({
          content: '修改成功，请重新登录',
        });
        localStorage.setItem('token', res.data.token);
        setTimeout(() => {
          history.push('/home');
        }, 1020);
      }
    });
  };

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  const sendMessage = () => {
    if (count !== 60) {
      return;
    }
    sendCode(phone).then((res) => {
      console.log(res);
    });
    let interval = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          clearInterval(interval);
          setCount(60);
          return;
        }
        return c - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    handleSetHeader('修改密码', true);
  });
  return (
    <div className='reset-password'>
      <Cell title='账号验证'></Cell>
      <Cell>
        <Input placeholder='请输入手机号' value={phone} onChange={setPhone} />
      </Cell>
      <Cell
        description={
          <Button size='sm' onClick={sendMessage}>
            {count === 60 ? '获取验证码' : ` ${count}秒后重试`}
          </Button>
        }
      >
        <Input placeholder='请输入验证码' value={code} onChange={setCode} />
      </Cell>
      <Cell>
        <Input
          placeholder='请输入新密码'
          value={password}
          onChange={setPassword}
        />
      </Cell>
      <Cell>
        <Input
          placeholder='请输入新密码'
          value={newPassword}
          onChange={setNewPassword}
        />
      </Cell>
      <div
        style={{
          width: '100%',
          marginTop: 25,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          style={{
            width: '80%',
            borderRadius: 14,
            color: '#fff',
            background: '#149ffe',
          }}
          size='lg'
          onClick={handleClick}
        >
          确认更改
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
