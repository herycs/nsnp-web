import React, { useEffect, useState } from 'react';
import { Input, Cell, Button } from 'zarm';
import './index.scss';

function ChangeInterest({ handleSetHeader, userInfo }) {
  const [interest, setInterest] = useState('');

  useEffect(() => {
    handleSetHeader('修改签名', true);
  });
  const handleSubmit = () => {};
  return (
    <div style={{ background: '#fff', height: '100vh' }}>
      <Cell>
        <Input
          style={{
            padding: '10px 20px',
            borderRadius: 9,
            background: '#f3f3f5',
          }}
          autoHeight
          type='text'
          rows={5}
          placeholder='请输入个人签名'
          value={interest}
          onChange={setInterest}
          maxLength={100}
          showLength
        />
      </Cell>
      <p
        style={{ color: '#ccc', fontSize: 13, paddingTop: 10, paddingLeft: 10 }}
      >
        个人签名最多输入100个汉字
      </p>
      <div
        style={{
          width: '100%',
          marginTop: 25,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          style={{
            width: '80%',
            borderRadius: 25,
            color: '#fff',
            height: 40,
            fontSize: 15,
          }}
          className={!interest ? 'fff' : 'blue'}
          size='lg'
          onClick={handleSubmit}
        >
          保存
        </Button>
      </div>
    </div>
  );
}

export default ChangeInterest;
