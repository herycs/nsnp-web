import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Cell, Button, Select, Input, Toast } from 'zarm';
import { changeUserInfo } from '../../../request';
import { actionCreator as userActionCreator } from '../../../store/modules/user';

function ChangeEmail({ history, handleSetHeader, userInfo }) {
  // const userInfo = useSelector((state) => {
  //   return state.getIn(['user', 'userInfo']);
  // });
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    handleSetHeader('修改邮箱', true);
  });

  const handleSubmit = () => {
    let newUserInfo = JSON.parse(JSON.stringify(userInfo));
    newUserInfo.email = email;

    changeUserInfo(newUserInfo).then((res) => {
      if (res.code === 20000) {
        setEmail('');
        Toast.show({ content: '修改成功' });
        dispatch(userActionCreator.getUserData());
      }
    });
  };
  return (
    <div>
      <Cell
        title='当前邮箱'
        description={
          <span style={{ color: '#ccc' }}>
            {userInfo ? userInfo.email : ''}
          </span>
        }
      ></Cell>
      <Cell
        title={
          <Input placeholder='请输入新邮箱' value={email} onChange={setEmail} />
        }
      ></Cell>
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
            borderRadius: 14,
            color: '#fff',
            background: '#149ffe',
          }}
          size='lg'
          onClick={handleSubmit}
        >
          确认提交
        </Button>
      </div>
    </div>
  );
}

export default ChangeEmail;
