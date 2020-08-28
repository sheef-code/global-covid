import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo/logo.png";
import headerStyle from "./Header.module.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const linkClick = () => {
    setClicked(false);
  };

  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.wrapper}>
        <Link className={headerStyle.logoWrap} to="/">
          <img className={headerStyle.logo} src={logo} alt="logo" />
        </Link>
        <div className={headerStyle.menuIcon} onClick={handleClick}>
          {clicked ? (
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#fff", fontSize: "1.4rem" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#fff", fontSize: "1.4rem" }}
            />
          )}
        </div>
        <div className={headerStyle.title}>Global Covid</div>
        <ul className={clicked ? headerStyle.listActive : headerStyle.list}>
          <Link className={headerStyle.link} to="/" onClick={linkClick}>
            Home
          </Link>
          <Link className={headerStyle.link} to="/map" onClick={linkClick}>
            Map
          </Link>
          <Link className={headerStyle.link} to="/about" onClick={linkClick}>
            About
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
