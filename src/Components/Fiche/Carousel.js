import React, { useState, useEffect } from "react"; // Importation des fonctions React, useState et useEffect
import Fleche from "../../images/arrow_forward_ios-24px 1.svg"; // Importation de l'image de la flèche

function Carousel({ oneLocation }) {
  // Définition du composant Carousel qui prend oneLocation en paramètre
  const [counter, setCounter] = useState(0); // Déclaration d'un state counter initialisé à 0, qui indiquera l'index de l'image actuellement affichée
  const [images, setImages] = useState([]); // Déclaration d'un state images initialisé à un tableau vide, qui contiendra les URL des images à afficher

  useEffect(() => {
    // Utilisation de useEffect pour effectuer une action après le rendu du composant
    async function fetchImages() {
      // Déclaration d'une fonction asynchrone pour récupérer les images de oneLocation
      try {
        setImages(oneLocation.pictures); // Mise à jour du state images avec les URL des images de oneLocation
      } catch (error) {
        console.error(error); // Affichage de l'erreur dans la console si une erreur survient
      }
    }

    fetchImages(); // Appel de la fonction pour récupérer les images de oneLocation
  }, [oneLocation]); // La fonction est appelée à chaque changement de oneLocation

  console.log(images.length);
  function handlePrevClick() {
    // Fonction appelée lorsqu'on clique sur le bouton "Précédent"
    setCounter(
      (
        prevCounter // Mise à jour du state counter en fonction de la valeur précédente
      ) => (prevCounter === 0 ? images.length - 1 : prevCounter - 1) // Si counter vaut 0, on affiche la dernière image, sinon on affiche l'image précédente
    );
  }

  function handleNextClick() {
    // Fonction appelée lorsqu'on clique sur le bouton "Suivant"
    setCounter(
      (
        prevCounter // Mise à jour du state counter en fonction de la valeur précédente
      ) => (prevCounter === images.length - 1 ? 0 : prevCounter + 1) // Si counter vaut la dernière image, on affiche la première image, sinon on affiche l'image suivante
    );
  }

  const [isNotVisible, setIsNotVisible] = useState(false);

  useEffect(() => {
    if (oneLocation.pictures.length < 2) {
      setIsNotVisible(true);
    }
  }, [oneLocation.pictures]);

  return (
    <section className="carousel-container">
      {/* Bouton pour passer à l'image précédente */}
      <button className={`${isNotVisible ? "btnNone" : ""}`} id="prevBtn" onClick={handlePrevClick}>
        <img src={Fleche} alt="Previous" />
      </button>
      {/* Bouton pour passer à l'image suivante */}
      <button className={`${isNotVisible ? "btnNone" : ""}`} id="nextBtn" onClick={handleNextClick}>
        <img src={Fleche} alt="Next" />
      </button>
      <div className="counterAspect displayCounter" id={`${isNotVisible ? "unScreenCounter" : ""}`} >{counter + 1}/{images.length}</div>
      {/* Conteneur de l'image */}
      <div className="carousel-slide">
        {/* Afficher l'image actuelle */}
        {images.length > 0 && (
          <img key={counter} src={images[counter]} alt="Carousel" />
        )}
      </div>
    </section>
  );
}

export default Carousel;
