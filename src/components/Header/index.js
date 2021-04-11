import React from 'react';
import { NavBar, Icon } from 'zarm';

function Header({ title = '首页' }) {
  return (
    <div>
      <NavBar title={title} />
      {/* <NavBar
        left={
          <Icon
            type='arrow-left'
            theme='primary'
            onClick={() => window.history.back()}
          />
        }
        title={title}
      /> */}
    </div>
  );
}

export default Header;
