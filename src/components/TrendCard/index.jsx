import React, { useState } from 'react';
import './index.scss';

// import { useState } from 'react';
import { TabIcon } from '../../assets/icon';
import { baseUrl } from '../../request';

const Options = ({ item, handleChangeWriteModal }) => {
  // console.log(item);
  const [count1] = useState(0);
  const [count2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <div className='options-wrapper'>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // setCount1((e) => {
          //   return e ? 0 : 1;
          // });
        }}
      >
        <TabIcon type='iconfenxiang' />
        <span>{+item.share + count1}</span>
      </div>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleChangeWriteModal();
          // setCount2((e) => {
          //   return e ? 0 : 1;
          // });
        }}
      >
        <TabIcon type='iconpinglun' />
        <span>{+item.comment + count2}</span>
      </div>
      <div
        className='options-item'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCount3((e) => {
            return e ? 0 : 1;
          });
        }}
      >
        <TabIcon
          type='iconzan'
          style={{ color: count3 ? 'rgb(20, 158, 255)' : '' }}
        />
        <span style={{ color: count3 ? 'rgb(20, 158, 255)' : '' }}>
          {+item.thumbup + count3}
        </span>
      </div>
    </div>
  );
};

function TrendCard({ item, handleClick, handleChangeWriteModal }) {
  return (
    <div className='trend-wrapper' onClick={() => handleClick(item)}>
      <>
        {/* <p></p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: item.content,
          }}
        ></div>
        <img src={baseUrl + item.image} alt=''></img>
        <Options
          item={item}
          handleChangeWriteModal={handleChangeWriteModal}
        ></Options>
      </>
    </div>
  );
}

export default TrendCard;
