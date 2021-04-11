import React from 'react';
import './index.scss';
// import { useState } from 'react';
import { Collapse } from 'zarm';

function TrendCard({ item }) {
  // console.log(props);
  // const [animated, setAnimated] = useState(false);
  // const [activeKey, setActiveKey] = useState('1');
  return (
    <div className='trend-wrapper'>
      <>
        <p>{item.content}</p>
        <img src={item.url}></img>
      </>
    </div>
  );
}

export default TrendCard;
