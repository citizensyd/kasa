import React from "react";
import LogoNoir from "../images/LOGO-noir.svg"

const Footer = (props) => {
  return (
    <footer>
      <img src={LogoNoir} alt="logo de Kasa en blanc sur fond noir" />
      <p class="font-weight-500 font-size-12px font-color-principal">
        © 2020 Kaza. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
