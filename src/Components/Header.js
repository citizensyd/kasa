import React from "react";
import { Link } from "react-router-dom"; // on importe le composant Link de react-router-dom
import LogoColor from "../images/LOGO-color.svg"; // on importe l'image du logo en couleur de Kasa

const Header = () => {

  return (
    <header>
      <img src={LogoColor} alt="Logo rose de Kasa" /> {/* on affiche le logo */}
      <nav>
        <ul>
          {/* le premier lien renvoie à l'accueil */}
          <li className="font-color-primary nav-accueil-margin">
            <Link className="case" to="/">
              accueil
            </Link>
          </li>
          {/* le deuxième lien renvoie à la page "À propos" */}
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
