import React from 'react';
import { Cell } from 'zarm';
import './index.scss';

const recommend = [
  {
    key: 0,
    title: '好友发现',
    bgc:
      'https://tse3-mm.cn.bing.net/th/id/OIP.oMdc13o6MbB9DN4A8BoHtwHaMu?w=190&h=327&c=7&o=5&dpr=1.25&pid=1.7',
  },
  {
    key: 1,
    title: '在线匹配',
    bgc:
      'https://tse4-mm.cn.bing.net/th/id/OIP.e518Otl_hEP8zjOczrsYsQHaJ2?w=197&h=263&c=7&o=5&dpr=1.25&pid=1.7',
  },
  {
    key: 2,
    title: '资源探索',
    bgc:
      'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
  },
];

const resourceList = [
  {
    key: 0,
    title: '文章',
    bgc:
      'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
    url: '',
  },
  {
    key: 1,
    title: '视频',
    bgc:
      'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
    url: '',
  },
  {
    key: 2,
    title: '音频',
    bgc:
      'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
    url: '',
  },
];

const Title = ({ count = 1, title = '特斯拉车主维权', desc = '#特斯拉' }) => {
  return (
    <div className='title-wrapper'>
      <div className='left'>
        <span>{count}</span>
      </div>
      <div className='right'>
        <p className='title'>{title}</p>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};

const Card = ({
  bgc = 'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
  title = '情感控',
  desc = '不懂事的小孩子才会被丢掉',
  // name='',
  avatar = 'https://tse1-mm.cn.bing.net/th/id/OIP.oTkhvWUyg1W-SU-dy_yo_AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7',
}) => {
  return (
    <div className='card-wrapper'>
      <img src={bgc} alt='' className='img' />
      <p className='title'>{title}</p>
      <div className='user'>
        <img src={avatar} alt='' />
        <p className='desc'>{desc}</p>
        {/* <span className="username">{name}</span> */}
      </div>
    </div>
  );
};

function Explore() {
  return (
    <div className='explore-wrapper'>
      <div className='explore-plan-wrapper'>
        <div className='explore-head-wrapper'>
          {recommend.map((item, index) => {
            return (
              <div
                key={index}
                className='explore-head-item'
                style={{
                  backgroundImage: `url(${item.bgc})`,
                  backgroundSize: '100%',
                }}
              >
                <div className='recommend-title'>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className='explore-resource-wrapper'>
          <div className='explore-resource-title'>热门榜单</div>

          <div className='explore-resource'>
            <Cell
              hasArrow
              title={<Title count='1' title='特斯拉自燃事件' desc='#特斯拉' />}
              description='xxx热度'
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title={<Title />}
              description='xxx热度'
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title={<Title />}
              description='xxx热度'
              onClick={() => {}}
            />
            {/* {resourceList.map((index, item) => {
              return (
                <div
                  className="explore-resource-item"
                  style={{
                    backgroundImage: `url(${item.bgc})`,
                    backgroundSize: "100%",
                  }}
                >
                  <div className="explore-resource-title">{item.title}</div>
                </div>
              );
            })} */}
          </div>
        </div>
        <div className='explore-friend-wrapper'>
          <div className='explore-friend-title'>推荐话题</div>
          <div className='list'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>

          {/* <div className="explore-friend">
            <div className="explore-friend-item">头像 | 好友1</div>
            <div className="explore-friend-item">好友2</div>
            <div className="explore-friend-item">。。。</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Explore;
