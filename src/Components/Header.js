import React from "react";
import { Link } from "react-router-dom";
import LogoColor from "../images/LOGO-color.svg";


const Header = () => {

  return (
    <header>
      <img src={LogoColor} alt="Logo rose de Kasa" />
      <nav>
        <ul>
          <li className="font-color-primary nav-accueil-margin">
            <Link className="case" to="/">
              accueil
            </Link>
          </li>
          <li className="font-color-primary nav-a-propos-margin">
            <Link className="case" to="a-propos">
              a propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
