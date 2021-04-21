import { Collapse } from 'zarm';
import Comments from '../../components/Comments';
import TrendCard from '../../components/TrendCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/modules/home';

import { useState, useCallback } from 'react';
import { Popup, Cell, Button, Input } from 'zarm';
import './index.scss';

const item = {
  id: '2123bsa',
  name: '张三',
  avatar: 'https://dummyimage.com/200x200',
  url: '/api/png/plane.jpg',
  desc: '',
  content:
    '今年我们将从全世界招进20-30名天才少年，华为公司未来要拖着这个世界往前走。',
  share: 23,
  like: 99,
  comment: 9,
};

const UserInfo = ({ item }) => {
  return (
    <div className='userinfo'>
      <div className='avatar'>
        <img src={item.url} alt=''></img>
      </div>
      <div className='user'>
        <p className='name'>{item.name}</p>
        <p className='desc'>{item.desc}</p>
      </div>
    </div>
  );
};

function Detail() {
  const show = useSelector((state) =>
    state.getIn(['home', 'showWriteCommnet'])
  );
  const dispatch = useDispatch();
  const handleChangeWriteModal = useCallback(() => {
    dispatch(actionCreator.changeShowWirteComment(!show));
  }, [show, dispatch]);
  const [value, setValue] = useState('');

  return (
    <div>
      <Collapse
        disabled
        animated={true}
        multiple={true}
        onChange={(activeKey) => {}}
        defaultActiveKey={['0']}
      >
        <Collapse.Item key='0' title={<UserInfo item={item} className='88' />}>
          <TrendCard
            item={item}
            handleClick={() => {}}
            handleChangeWriteModal={handleChangeWriteModal}
          ></TrendCard>
        </Collapse.Item>
      </Collapse>
      <Comments item={item}></Comments>
      <Popup
        visible={show}
        direction='bottom'
        onMaskClick={() => handleChangeWriteModal()}
        // afterOpen={() => console.log('打开')}
        // afterClose={() => console.log('关闭')}
        destroy={false}
        mountContainer={() => document.body}
      >
        <div className='popup-box'>
          {/* 输入框 */}

          <Cell title='回复'>
            <Input
              autoHeight
              showLength
              maxLength={200}
              type='text'
              rows={3}
              placeholder='请输入'
              value={value}
              onChange={setValue}
            />
          </Cell>
          <Cell className='button-wrapper'>
            <div className='zhanwei'></div>
            <Button
              size='xs'
              theme='primary'
              onClick={() => {
                console.log('submit');
                handleChangeWriteModal();
              }}
            >
              提交
            </Button>
          </Cell>
        </div>
      </Popup>
    </div>
  );
}

export default Detail;
