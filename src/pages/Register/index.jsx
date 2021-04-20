import React from "react";
import "./index.scss";

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-plan-wrapper">
        <div className="register-header">
          <div className="register-title">注册</div>
        </div>

        <div className="register-form">

        <div className="register-item">
            <div className="register-item-notice">昵称:</div>
            <div className="register-item-prop">请输入昵称</div>
          </div>

          <div className="register-item">
            <div className="register-item-notice">手机号:</div>
            <div className="register-item-prop">请输入手机号码</div>
          </div>

          <div className="register-item">
            <div className="register-item-notice">邮箱:</div>
            <div className="register-item-prop">请输入邮箱</div>
          </div>

          <div className="register-item">
            <div className="register-item-notice">密码:</div>
            <div className="register-item-prop">请输入验证码</div>
          </div>

          <div className="register-button-wrapper">
            <div className="register-button">登录</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
