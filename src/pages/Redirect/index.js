import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

function Redirect({ route }) {
  useEffect(() => {
    console.log(route);
    // 判断用户身份
  }, []);

  return <div>{renderRoutes(route.routes)}</div>;
}

export default Redirect;
