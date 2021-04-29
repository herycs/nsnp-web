import React, { useEffect, useState } from 'react';
import './index.scss';
import io from 'socket.io-client';
import axios from 'axios';
import { baseUrl, getChatList } from '../../request';

const MessageList = [
  {
    key: 0,
    name: '小星',
    avatar:
      'https://tse3-mm.cn.bing.net/th/id/OIP.oMdc13o6MbB9DN4A8BoHtwHaMu?w=190&h=327&c=7&o=5&dpr=1.25&pid=1.7',
    summary: 'hello,我们近期有活动在西安市雁塔区举办，具体信息可以查看xxx',
    date: '04/17',
  },
];

// client.send()

// const socket = io('ws://192.168.176.172:8080');
// const socket = io('ws/chat/233');
// const socket = new WebSocket('ws://192.168.1.119:8089/');
// socket.onopen = function (res) {
//   console.log(res);
// };
// socket.onerror = function (res) {
//   console.log(res);
// };
// socket.send({ name: '233' });
// socket.onmessage = function (event) {
//   console.log(event);
//   console.log(event.data);
// };
function Message({ handleSetHeader }) {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    handleSetHeader('消息', true);
  });
  useEffect(() => {
    getChatList().then((res) => {
      if (res.code === 20000) {
        setChatList(res.data);
      }
    });
  }, []);

  return (
    <div className='msg-wrapper'>
      <div className='msg-plan-wrapper'>
        <div className='msg-menu'>
          <div className='msg-menu-item'>系统</div>
          <div className='msg-menu-item'>好友</div>
        </div>
        {chatList.map((item, index) => {
          return (
            <div className='msg-item' key={index}>
              <div className='msg-info'>
                <div
                  className='msg-user-img'
                  style={{
                    backgroundImage: `url(${baseUrl + item.avatar})`,
                    backgroundSize: '100%',
                  }}
                ></div>
                <div className='msg-user-summary'>
                  <div className='msg-header'>
                    <div className='user-name'>{item.username}</div>
                    <div className='msg-time'>{item.time}</div>
                  </div>
                  <div className='msg-words'>{item.lastMessage}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
