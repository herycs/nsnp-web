import React, { useEffect, useState } from 'react';
import { Carousel } from 'zarm';
import { baseUrl, getGroup, getRankList } from '../../request';
import './index.scss';

const MiniCard = ({ item }) => {
  return (
    <div className='mini-card'>
      <img
        src={!item.url ? baseUrl + item.img : item.url}
        alt=''
        className='img'
      />
      <p className='summary'>{item.summary}</p>
    </div>
  );
};

function Explore() {
  const item = {
    url: 'https://pic4.zhimg.com/v2-e8592940d3e0cb2b81c9b3a6fcccd8d0_im.jpg',
    summary: '全部话题',
  };
  const [groupList, setGroupList] = useState([]);
  const [rankList, setRankList] = useState([]);
  useEffect(() => {
    getGroup().then((res) => {
      if (res.code === 20000) {
        console.log(res.data);
        setGroupList(res.data);
      }
    });
    getRankList().then((res) => {
      console.log(res.data);
      if (res.code === 20000) {
        setRankList(res.data);
      }
    });
  }, []);

  const Rank = () => {
    return rankList.map((item, index) => (
      <div key={+index} className='carousel_item_pic'>
        <div className='list-header'>
          <span style={{ fontSize: 14 }}>{item.name}</span>
          <span>233w人正在讨论</span>
        </div>
        <div className='list-content'>
          {item.data.splice(0, 3).map((item, index) => (
            <div key={index} style={{}} className='list-item'>
              <div style={{ display: 'flex' }}>
                <p
                  className='count'
                  style={{ color: `rgba(255, 165, 0,${1 - index / 3})` }}
                >
                  {index + 1}
                </p>
                <p className='name-wrap'>
                  <span className='name'>{item.name}</span>
                  <span className='desc'>{item.summary}</span>
                </p>
              </div>

              <div>
                <p style={{ color: '#fff' }}> 233</p>
                <p
                  className='hotcount'
                  style={{
                    fontSize: 14,
                    color: `rgba(255, 165, 0,.9)`,
                  }}
                >
                  {item.pro}w热度
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className='explore-wrapper'>
      <div className='header'>
        <p className='title'>我加入的</p>
        <div className='header-list'>
          {groupList.map((item, index) => (
            <MiniCard item={item} key={index}></MiniCard>
          ))}
          <MiniCard item={item}></MiniCard>
        </div>
      </div>
      <div className='rank'>
        <p className='title'>排行榜</p>
        <div className='rank-list'>
          <Carousel
            onChange={(index) => {
              console.log(`onChange: ${index}`);
            }}
          >
            {Rank()}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Explore;
