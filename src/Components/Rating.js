import React from "react";
import StarFull from "../images/star-full.svg"; // Importation de l'image d'étoile pleine
import StarEmpty from "../images/star-empty.svg"; // Importation de l'image d'étoile vide

function Rating({ oneLocation }) {
  const stars = []; // Tableau qui va contenir les étoiles pleines ou vides

  for (let i = 0; i < 5; i++) { // On boucle 5 fois pour générer les 5 étoiles
    if (i < oneLocation.rating) { // Si l'indice i est inférieur à la note, on ajoute une étoile pleine
      stars.push(<img key={i} src={StarFull} alt="Etoile pleine"/>);
    } else { // Sinon, on ajoute une étoile vide
      stars.push(<img key={i} src={StarEmpty} alt="Etoile vide"/>);
    }
  }

  return <div className="rating-location">{stars}</div>; // On retourne un élément div contenant les étoiles générées dynamiquement
};

export default Rating;

