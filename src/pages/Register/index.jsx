import React from "react";
import './index.scss'

function Notice(){
  return <div></div>
}

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-plan-wrapper">
        <div className="register-notice">注册</div>

        <div className="register-form-wrapper">
          <div>昵称:
            <Notice>请输入昵称</Notice>
          </div>
          <div>手机号:
            <Notice>请输入手机号</Notice>
          </div>
          <div>验证码:
            <Notice>请输入验证码</Notice>
          </div>
        </div>

        <div className="register-button">注册</div>
      </div>
    </div>
  );
}

export default Register;
