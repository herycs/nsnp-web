import React from 'react';
import { useHistory } from 'react-router';
import { Cell } from 'zarm';

function Setting({ handleSetHeader, userInfo }) {
  const history = useHistory();

  return (
    <div>
      <Cell
        title={'NS—ID：' + userInfo.id}
        description={
          <span
            style={{
              fontSize: 12,
              padding: '4px 10px',
              borderRadius: 15,
              border: '1px solid #ccc',
            }}
          >
            复制
          </span>
        }
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/logout');
        }}
        title='账号管理'
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/assess');
        }}
        title='账号安全'
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/logout');
        }}
        title='消息通知'
        style={{ marginTop: 10 }}
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/logout');
        }}
        title='通用'
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/logout');
        }}
        title='客服反馈'
        style={{ marginTop: 10 }}
      />
      <Cell
        hasArrow
        onClick={() => {
          history.push('/logout');
        }}
        title='关于我们'
      />
    </div>
  );
}

export default Setting;
