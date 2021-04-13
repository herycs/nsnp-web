import React, { useState } from 'react';
import './index.scss';

function Comments({ item }) {
  const [close, setClose] = useState(false);
  return (
    <div className='comments-wrapper'>
      <div className='header'>
        <span>评论</span>
        <span>排序方式</span>
      </div>
      <div className='content'>
        <div className='left'>
          <img src={item.avatar} alt='' />
        </div>
        <div className='right'>
          <span className='name'>{item.name}</span>
          <span className='time'>3小时前</span>
          <span className='content1'>评论内容</span>
        </div>
        <div
          className='close'
          onClick={() => {
            setClose(!close);
          }}
        >
          *
        </div>
      </div>
      <div className={close ? 'list list-close' : 'list'}>
        <div className='zw'></div>
        <div className='p-wrapper'>
          <p>
            <span>张三</span>
            <span>回复</span>
            <span>李四</span>
            <span>今天天气真好</span>
          </p>
          <p>
            <span>张三</span>
            <span>回复</span>
            <span>李四</span>
            <span>今天天气真好</span>
          </p>
          <p>
            <span>张三</span>
            <span>回复</span>
            <span>李四</span>
            <span>今天天气真好</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
