import React, { useState } from "react"; // Importation des modules React et useState
import Fleche from "../images/fleche.svg"; // Importation de l'image de la flèche

function UpAndDown({ title, paragraph, className }) {
  // Définition du composant UpAndDown avec destructuring des propriétés {title, paragraph, className}
  
  const [isVisible, setIsVisible] = useState(false); // Initialisation de l'état local isVisible à false

  const handleClick = () => {
    setIsVisible(!isVisible); // Inversion de la valeur de isVisible au clic sur la flèche
  };

  return (
    <div className={`upanddown ${className}`}> {/* Définition de la classe CSS du composant */}
      <h3 className="button button-title font-color-principal">
        {title}
        <img
          className={`${isVisible ? "arrow-rotate" : "arrow"}`} // Condition pour faire tourner la flèche lorsqu'elle est visible
          src={Fleche}
          onClick={handleClick} // Appel de la fonction handleClick lors du clic sur la flèche
          alt="fleche"
        />
      </h3>
      <p
        className={`card-grey font-color-primary ${
          isVisible ? "visible" : "hidden"
        }`} // Condition pour afficher ou cacher le paragraphe selon la valeur de isVisible
      >
        {paragraph}
      </p>
    </div>
  );
}

export default UpAndDown; // Exportation du composant UpAndDown par défaut

