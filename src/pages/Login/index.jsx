import { useState } from 'react';
import { login } from '../../request';
import './index.scss';
import { Input, Toast } from 'zarm';
import { useHistory } from 'react-router';

function Login({ route }) {
  const history = useHistory();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    login({ password, mobile }).then((res) => {
      console.log(res);
      if (res.code === 20000) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userid', res.data.uid);
        Toast.show({
          content: '登录成功',
          afterClose() {
            history.push('/home');
          },
        });
      }
    });
  };
  return (
    <div className='login-wrapper'>
      <div className='login-plan-wrapper'>
        <div className='login-header'>
          <div className='login-title'>NSNP-欢迎您!</div>
        </div>
        <div className='login-form'>
          {/* <Cell title='单行文本'> */}

          {/* </Cell> */}
          <div className='login-item'>
            <div className='login-item-notice'>手机号:</div>
            <Input
              clearable
              type='text'
              placeholder='请输入手机号码'
              value={mobile}
              onChange={setMobile}
            />
            {/* <div className='login-item-prop'>请输入手机号码</div> */}
          </div>

          <div className='login-item'>
            <div className='login-item-notice'>密码 : </div>
            <Input
              clearable
              type='text'
              placeholder='请输入密码'
              value={password}
              onChange={setPassword}
            />
            {/* <div className='login-item-prop'>请输入密码</div> */}
          </div>

          <div className='login-button-wrapper'>
            <div className='login-button' onClick={handleLogin}>
              登录
            </div>
          </div>

          <div className='login-user-access'>
            <div className='user-access'>
              用户登录即同意：
              <a href='http://www.baidu.com'>用户协议</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
