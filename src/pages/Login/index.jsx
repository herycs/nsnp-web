// import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config';

import "./index.scss";

function SplitChar() {
  return <text className="split-char"> | </text>
}

function Login({ route }) {
  return (
    <div className="login-wrapper">
      <div className="login-plan-wrapper">
        <div className="login-title">NSNP-欢迎您！</div>
        <div className="login-form">
          <div className="login-account-wrapper">
            <img src="./xxx.img" alt="手机号|邮箱" />
            <SplitChar/>
            <text className="input-notice">请输入手机号码</text>
          </div>

          <div className="login-checkNumber-wrapper">
            <img src="./xxx.img" alt="密码" />
            <SplitChar/>
            <text className="input-notice">请输入验证码</text>
          </div>

          <button className="login-button">登录</button>

          <div className="user-access">用户登录即同意：用户协议</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
