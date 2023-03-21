/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"; // Importe la bibliothèque React
import Hook from "../Components/Banner"; // Importe le composant Hook
import ByTheWay from "../Components/ByTheWay"; // Importe le composant ByTheWay

// Définit un nouveau composant appelé APropos
const APropos = () => {
  return (
    // Retourne un élément React.Fragment qui enveloppe les deux composants Hook et ByTheWay
    <React.Fragment>
      <Hook /> 
      <ByTheWay /> 
    </React.Fragment>
  );
};

export default APropos; // Exporte le composant APropos pour pouvoir l'utiliser ailleurs

