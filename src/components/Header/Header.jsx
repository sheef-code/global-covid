import React from "react";

import logo from "./logo/logo.png";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <img className={headerStyle.logo} src={logo} alt="logo" />
      <div className={headerStyle.title}>Global Covid</div>
    </div>
  );
};

export default Header;
