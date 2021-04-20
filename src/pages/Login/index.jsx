// import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config';

import "./index.scss";

function Login({ route }) {
  return (
    <div className="login-wrapper">
      <div className="login-plan-wrapper">
        <div className="login-header">
          <div className="login-title">NSNP-欢迎您!</div>
        </div>
        <div className="login-form">
          <div className="login-item">
            <div className="login-item-notice">手机号:</div>
            <div className="login-item-prop">请输入手机号码</div>
          </div>

          <div className="login-item">
            <div className="login-item-notice">密码:</div>
            <div className="login-item-prop">请输入验证码</div>
          </div>

          <div className="login-button-wrapper">
            <div className="login-button">登录</div>
          </div>

          <div className="login-user-access">
            <div className="user-access">
              用户登录即同意：
              <a href="http://www.baidu.com">用户协议</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
