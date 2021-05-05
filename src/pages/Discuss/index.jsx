import React, { useEffect } from 'react';
import './index.scss';

function Discuss({ handleSetHeader }) {
  useEffect(() => {
    handleSetHeader('圈子', true);
  });
  return (
    <div className='discuss-wrapper'>
      <div className='header'>
        <div>
          <p className='title'>hello</p>
          <p className='desc'>
            jk制服是jk制服是jk制服是jk制服是jk制服是jk制服是
          </p>
        </div>
        <p className='join'>
          <span>已加入</span>
        </p>
      </div>
    </div>
  );
}

export default Discuss;
