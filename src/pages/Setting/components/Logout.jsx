import React, { useEffect, useState } from 'react';
import { Modal, Cell, Button } from 'zarm';

function Logout({ history, handleSetHeader }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    handleSetHeader('账号管理', true);
  });

  return (
    <div>
      <Cell
        title='退出登录'
        onClick={() => {
          setVisible(true);
        }}
        hasArrow
      ></Cell>
      <Modal
        visible={visible}
        title='是否退出当前账号'
        closable
        onCancel={() => {
          setVisible(false);
        }}
        footer={
          <Button
            block
            theme='primary'
            size='sm'
            onClick={() => {
              history.push('/login');
            }}
          >
            确认
          </Button>
        }
      ></Modal>
    </div>
  );
}

export default Logout;
