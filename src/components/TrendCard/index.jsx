import React, { useState } from 'react';
import './index.scss';
import { Icon, Badge } from 'zarm';

// import { useState } from 'react';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_1340918_lpsswvb7yv.js'
);

const Options = ({ handleChangeWriteModal }) => {
  const [like, setLike] = useState(9);
  return (
    <div className='options-wrapper'>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <TabIcon type='home' />
        <span>分享</span>
      </div>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleChangeWriteModal();
        }}
      >
        <Badge shape='round' theme='primary' text='8'>
          <TabIcon type='home' />
        </Badge>
        <span>评论</span>
      </div>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setLike(like + 1);
        }}
      >
        <Badge shape='round' theme='primary' text={like}>
          <TabIcon type='home' />
        </Badge>
        <span>点赞</span>
      </div>
    </div>
  );
};

function TrendCard({ item, handleClick, handleChangeWriteModal }) {
  return (
    <div className='trend-wrapper' onClick={() => handleClick(item)}>
      <>
        <p>{item.content}</p>
        <img src={item.url}></img>
        <Options handleChangeWriteModal={handleChangeWriteModal}></Options>
      </>
    </div>
  );
}

export default TrendCard;
