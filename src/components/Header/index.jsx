import React from 'react';
import { useHistory } from 'react-router';
import { NavBar, Icon } from 'zarm';

function Header({ title = '首页', showBack = false, showSetting = true }) {
  const history = useHistory();
  return (
    <div>
      <NavBar
        title={title}
        left={
          showBack ? (
            <Icon
              type='arrow-left'
              // theme='primary'
              style={{ color: 'rgba(0,0,0,.6)' }}
              onClick={() => window.history.back()}
            />
          ) : (
            ''
          )
        }
        right={
          showSetting ? (
            <Icon
              type='arrow-right'
              theme='primary'
              onClick={() => history.push('/setting')}
            />
          ) : (
            ''
          )
        }
      />
    </div>
  );
}

export default Header;
