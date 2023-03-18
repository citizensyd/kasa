import React, { useState } from "react";
import Fleche from "../images/fleche.svg";

function UpAndDown({title, paragraph, className}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`upanddown ${className}`}>
      <h3 className="button button-title font-color-principal">
        {title}
        <img
          className={`${isVisible ? "arrow-rotate" : "arrow"}`}
          src={Fleche}
          onClick={handleClick}
          alt="fleche"
        />
      </h3>
      <p
        className={`card-grey font-color-primary ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default UpAndDown;
