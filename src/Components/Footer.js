import React from "react";
import LogoNoir from "../images/LOGO-noir.svg";

const Footer = (props) => {
  return (
    <footer>

        <img src={LogoNoir} alt="logo de Kasa en blanc sur fond noir" />
        <p className="font-weight-small-500 font-size-small-12px font-size-large-24px font-color-principal">
          © 2020 Kaza. All rights reserved
        </p>

    </footer>
  );
};

export default Footer;
