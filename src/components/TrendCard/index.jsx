import React, { useState } from 'react';
import './index.scss';
import { Badge } from 'zarm';

// import { useState } from 'react';
import { TabIcon } from '../../assets/icon';
import { baseUrl } from '../../request';

const Options = ({ item, handleChangeWriteModal }) => {
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
        <TabIcon type='iconfenxiang' />
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
          <TabIcon type='iconpinglun' />
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
          <TabIcon type='icondianzan' />
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
        <img src={baseUrl+item.image} alt=''></img>
        <Options
          item={item}
          handleChangeWriteModal={handleChangeWriteModal}
        ></Options>
      </>
    </div>
  );
}

export default TrendCard;
