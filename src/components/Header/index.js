import React from 'react';
import { NavBar, Icon } from 'zarm';

function Header({ title = '首页', showBack = false }) {
  return (
    <div>
      {showBack ? (
        <NavBar
          left={
            <Icon
              type='arrow-left'
              theme='primary'
              onClick={() => window.history.back()}
            />
          }
          title={title}
        />
      ) : (
        <NavBar title={title} />
      )}
    </div>
  );
}

export default Header;
