import React from "react";
import Mer from "../images/mer.png";

const Hook = (props) => {
  return (
    <section className="hook">
      <p className="font-weight-500 font-size-24px font-color-principal">
        Chez vous, partout et ailleurs
      </p>
      <img src={Mer} alt="Une plage avec des falaises" />
    </section>
  );
};

export default Hook;
