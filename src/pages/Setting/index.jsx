import React from 'react';
import { Cell } from 'zarm';

function Setting() {
  return (
    <div>
      <Cell title='账号管理' />
      <Cell title='账号安全' />
      <Cell title='消息通知' style={{ marginTop: 10 }} />
      <Cell title='通用' />
      <Cell title='客服反馈' style={{ marginTop: 10 }} />
      <Cell title='关于我们' />
    </div>
  );
}

export default Setting;
