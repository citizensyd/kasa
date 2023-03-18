import React from "react";
import LogoNoir from "../images/LOGO-noir.svg";

const Footer = (props) => {
  return (
    <footer>
        {/* Ajout d'une image du logo de Kasa */}
        <img src={LogoNoir} alt="logo de Kasa en blanc sur fond noir" />
        {/* Ajout d'un paragraphe de droit d'auteur */}
        <p className="font-color-principal">
          © 2020 Kaza. All rights reserved
        </p>
    </footer>
  );
};

export default Footer;

