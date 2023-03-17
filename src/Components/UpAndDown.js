import React, { useState } from "react";
import Fleche from "../images/fleche.svg";

function UpAndDown({title, paragraph, className}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`upanddown ${className}`}>
      <h3 className="button button-title font-weight-small-500 font-size-small-13px font-size-large-24px font-color-principal">
        {title}
        <img
          className={`${isVisible ? "arrow-rotate" : "arrow"}`}
          src={Fleche}
          onClick={handleClick}
          alt="fleche"
        />
      </h3>
      <p
        className={`card-grey font-weight-small-400 font-size-small-12px font-size-large-24px font-color-primary ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default UpAndDown;
