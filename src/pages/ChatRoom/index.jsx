import React, { useEffect, useState } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { baseUrl, chatUrl, recordChatHistory } from '../../request';
import './index.scss';
import { Input, Button } from 'zarm';

const socket = new SockJS(chatUrl);

// const socket = new SockJS('http://ws1/nsnp');

// client.subscribe('/app/broadCast', (e) => {
//   console.log(e);
// });

function ChatRoom(props) {
  // console.log()
  const { handleSetHeader, match } = props;
  const { id } = match.params;
  const client = Stomp.over(socket);
  const [text, setText] = useState('');

  const subscribe = (client, url) => {
    client.subscribe(url, (res) => {
      // console.log(res);
      const data = JSON.parse(res.body);
      console.log(data, 'data');
      let item = {
        uid: data.receptor,
        // avatar: props.userInfo.avatar,
        chatData: data.msg,
      };
      setChatList((e) => [...e, item]);
    });
  };
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    recordChatHistory(id).then((res) => {
      if (res.code === 20000) {
        setChatList(res.data);
      }
    });
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  useEffect(() => {
    client.connect(
      {},
      (e) => {
        subscribe(client, '/topic/public');
        // subscribe(client, '/app/all');
        // subscribe(client, `/topic/room/${id}`);
        subscribe(client, `/queue/${id}`, (res) => {
          console.log("收到消息" + JSON.parse(res.body.msg));
        });
        subscribe(client, `/queue/${props.userInfo.id}`, (res) => {
          console.log(JSON.parse(res.body.msg));
        });
      },
      (e) => {
        // console.log(e);
        let res = JSON.parse(e.body);
        console.log(res);
      }
    );

    handleSetHeader('聊天', true);
    return () => {
      // socket.close();
    };
  });
  let map = {
    99: 998,
    998: 99,
  };
  // const handleClick = () => {
  //   client.send(
  //     `/app/chat`,
  //     {},
  //     JSON.stringify({
  //       sender: 'username',
  //       type: 'TO_PUBLIC',
  //       receptor: map[id],
  //     })
  //   );
  // };
  const handleSend = () => {
    client.send(
      `/app/chat`,
      {},
      JSON.stringify({
        sender: props.userInfo.id,
        type: 'TO_PUBLIC',
        receptor: id,
        msg: text,
      })
    );
    let item = {
      uid: props.userInfo.id,
      avatar: props.userInfo.avatar,
      chatData: text,
    };
    console.log(item);
    setChatList((e) => [...e, item]);
    setText('');
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 200);
  };
  return (
    <div className='chat-room-wrapper'>
      <div className='chat-list'>
        {chatList.map((item, index) => (
          <div
            className={item.uid !== id ? 'chat-item fl-left' : 'chat-item'}
            key={index}
          >
            <img src={baseUrl + item.avatar} alt='' className='avatar' />{' '}
            <div className='content'>{item.chatData}</div>
          </div>
        ))}
      </div>
      <div className='input-wrapper'>
        <Input
          placeholder=''
          style={{
            flex: 1,
            background: '#fff',
            height: 36,
            borderRadius: 20,
            textIndent: '1em',
          }}
          value={text}
          onChange={setText}
        />
        <Button size='sm' style={{ width: 70 }} onClick={handleSend}>
          发送
        </Button>
      </div>
    </div>
  );
}

export default ChatRoom;
