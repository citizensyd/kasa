import React from "react";
import LogoColor from "../images/LOGO-color.svg";


const Header = (props) => {
  return (
    <header>
      <img src={LogoColor} alt="Logo rose de Kasa" />
      <nav>
        <ul>
          <li className="font-weight-small-500 font-size-small-12px font-size-large-24px font-color-primary nav-a-propos-margin">
            <a className="case" href="a-propos">
              a propos
            </a>
          </li>
          <li className="font-weight-small-500 font-size-small-12px font-size-large-24px font-color-primary nav-accueil-margin">
            <a className="highlight-link case" href="/">
              accueil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
