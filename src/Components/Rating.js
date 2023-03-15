import React from "react";
import StarFull from "../images/star-full.svg";
import StarEmpty from "../images/star-empty.svg";

    function Rating({ oneLocation }) {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < oneLocation.rating) {
            stars.push(<img key={i} src={StarFull} alt="Etoile pleine"/>);
          } else {
            stars.push(<img key={i} src={StarEmpty} alt="Etoile vide"/>);
          }
        }
      
        return <div className="rating-location">{stars}</div>;
      };


export default Rating;
