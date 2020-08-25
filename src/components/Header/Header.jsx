import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo/logo.png";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <ul className={headerStyle.wrapper}>
        <Link to="/">
          <img className={headerStyle.logo} src={logo} alt="logo" />
        </Link>
        <div className={headerStyle.title}>Global Covid</div>
        <ul className={headerStyle.list}>
          <Link className={headerStyle.link} to="/">
            Home
          </Link>
          <Link className={headerStyle.link} to="/map">
            Map
          </Link>
          <Link className={headerStyle.link} to="/about">
            About
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default Header;
