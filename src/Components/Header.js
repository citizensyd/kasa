import React from "react";
import { Link } from "react-router-dom";
import LogoColor from "../images/LOGO-color.svg";


const Header = (props) => {

  return (
    <header>
      <img src={LogoColor} alt="Logo rose de Kasa" />
      <nav>
        <ul>
          <li className="font-weight-small-500 font-size-small-12px font-size-large-24px font-color-primary nav-a-propos-margin">
            <Link className="case" to="a-propos">
              a propos
            </Link>
          </li>
          <li className="font-weight-small-500 font-size-small-12px font-size-large-24px font-color-primary nav-accueil-margin">
            <Link className="highlight-link case" to="/">
              accueil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
