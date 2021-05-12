import React from "react";
import { useHistory } from "react-router";
import { NavBar, Icon } from "zarm";

function Header({ title = "首页", showBack = false, showSetting = true }) {
  const history = useHistory();
  return (
    <div style={{ position: "fixed", top: "0", width: "100%" ,zIndex:99}}>
      <NavBar
        title={title}
        left={
          showBack ? (
            <Icon
              type="arrow-left"
              // theme='primary'
              style={{ color: "rgba(0,0,0,.6)" }}
              onClick={() => window.history.back()}
            />
          ) : (
            ""
          )
        }
        right={
          showSetting ? (
            <Icon
              type="iconshezhi"
              theme="primary"
              onClick={() => history.push("/setting")}
            />
          ) : (
            ""
          )
        }
      />
    </div>
  );
}

export default Header;
