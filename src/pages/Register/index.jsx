import React, { useState } from 'react';
import './index.scss';
import { Input, Message, Toast } from 'zarm';
import { register,  } from '../../request';
import { useHistory } from 'react-router';

function Register() {
  const [nickname, setNickname] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    register({ password, mobile, nickname, email, code }).then((res) => {
      console.log(res);
      if (res.code === 20000) {
        localStorage.setItem('token', res.data.token);
        Toast.show({
          content: '注册成功',
          afterClose() {
            history.push('/home');
          },
        });
      } else {
        Toast.show({
          content: '注册失败',
          // afterClose() {
          //   window.location.reload();
          // },
        });
      }
    });
  };

  return (
    <div className='register-wrapper'>
      <div className='register-plan-wrapper'>
        <div className='register-header'>
          <div className='register-title'>注册</div>
        </div>

        <div className='register-form'>
          {/* <div className='register-item'>
            <div className='register-item-notice'>昵称:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入昵称'
              value={nickname}
              onChange={setNickname}
            />
          </div> */}

          <div className='register-item'>
            <div className='register-item-notice'>手机号:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入手机号'
              value={mobile}
              onChange={setMobile}
            />
          </div>

          <div className='register-item'>
            <div className='register-item-notice'>邮箱:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入邮箱'
              value={email}
              onChange={setEmail}
            />
          </div>

          <div className='register-item'>
            <div className='register-item-notice'>密码:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入密码'
              value={password}
              onChange={setPassword}
            />
          </div>
          <div className='register-item'>
            <div className='register-item-notice'>验证码:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入验证码'
              value={code}
              onChange={setCode}
            />
          </div>
          <div className='register-button-wrapper'>
            <div className='register-button' onClick={handleSubmit}>
              提交
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
