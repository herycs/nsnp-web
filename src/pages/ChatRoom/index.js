import React, { useEffect } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const socket = new SockJS('http://192.168.1.119:8090/nsnp');

// const socket = new SockJS('http://ws1/nsnp');

// client.subscribe('/app/broadCast', (e) => {
//   console.log(e);
// });

function ChatRoom(props) {
  const { handleSetHeader, match } = props;
  const { id } = match.params;
  const client = Stomp.over(socket);

  const subscribe = (client, url) => {
    client.subscribe(url, (res) => {
      // console.log(res);
      const data = JSON.parse(res.body);
      console.log(data);
    });
  };

  useEffect(() => {
    client.connect(
      {},
      (e) => {
        subscribe(client, '/topic/public');
        subscribe(client, '/app/all');
        subscribe(client, `/topic/room/${id}`);
        subscribe(client, `/topic/queue/${id}`);
      },
      (e) => {
        console.log(e);
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
  const handleClick = () => {
    client.send(
      `/user`,
      {},
      JSON.stringify({
        sender: 'username',
        type: 'TO_PUBLIC',
        receptor: map[id],
      })
    );
  };

  return (
    <div className='chat-room-wrapper'>
      <button onClick={handleClick}>handle</button>
    </div>
  );
}

export default ChatRoom;
