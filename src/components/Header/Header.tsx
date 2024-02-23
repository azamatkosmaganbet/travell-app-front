import React from "react";
import "./Header.scss";
import Logo from "../../assets/test/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <a>
          <img src={Logo} alt="Логотип" />
        </a>
      </div>
    </div>
  );
};

export default Header;
