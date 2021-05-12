import "./index.scss";
import React, { useEffect } from "react";

function Notice({ handleSetHeader }) {
  useEffect(() => {
    handleSetHeader(" ", true);
  });

  return (
    <div className="notice-wrapper">
      <div className="title">星空公约</div>
      <div className="notice-content">
        <p>1.拒绝传播不良内容，制作产品</p>
        <p>2.拒绝网络暴力，不要被煽动加入网络攻击</p>
        <p>3.拒绝以任何方式对其他用户发起不良骚扰</p>
        <p> 4.不要传播与未经核实或者不实的关于其他用户的不良言论</p>
      </div>
    </div>
  );
}

export default Notice;
