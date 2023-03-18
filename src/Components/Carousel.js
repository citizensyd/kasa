import React, { useState, useEffect } from "react"; // importation des fonctions useState et useEffect de la bibliothèque React
import Fleche from "../images/arrow_forward_ios-24px 1.svg"; // importation de l'image de la flèche

function Carousel({ oneLocation }) { // déclaration du composant Carousel qui prend en paramètre l'objet oneLocation
  const [counter, setCounter] = useState(0); // déclaration de la variable counter initialisée à 0 et de la fonction setCounter qui permettra de modifier cette variable
  const [images, setImages] = useState([]); // déclaration de la variable images initialisée à un tableau vide et de la fonction setImages qui permettra de modifier cette variable

  useEffect(() => { // effet de bord exécuté lorsque le composant est monté et que oneLocation est modifié
    async function fetchImages() { // fonction asynchrone qui permet de récupérer les images de oneLocation
      try {
        setImages(oneLocation.pictures); // modification de la variable images avec les images de oneLocation
      } catch (error) {
        console.error(error); // affichage d'une erreur en cas de problème
      }
    }

    fetchImages(); // appel de la fonction fetchImages
  }, [oneLocation]); // déclaration de la dépendance oneLocation

  function handlePrevClick() { // fonction appelée lorsqu'on clique sur le bouton précédent
    setCounter((prevCounter) => // modification de la variable counter avec une fonction de rappel qui récupère la valeur précédente
      prevCounter === 0 ? images.length - 1 : prevCounter - 1 // si counter est à 0, on affiche la dernière image du tableau, sinon on affiche l'image précédente
    );
  }

  function handleNextClick() { // fonction appelée lorsqu'on clique sur le bouton suivant
    setCounter((prevCounter) => // modification de la variable counter avec une fonction de rappel qui récupère la valeur précédente
      prevCounter === images.length - 1 ? 0 : prevCounter + 1 // si counter est à la dernière image, on affiche la première, sinon on affiche l'image suivante
    );
  }

  return (
    <section className="carousel-container"> {/* déclaration de la section qui contiendra le carousel */}
      <button id="prevBtn" onClick={handlePrevClick}> {/* bouton précédent */}
        <img src={Fleche} alt="Previous" /> {/* image de la flèche précédent */}
      </button>
      <button id="nextBtn" onClick={handleNextClick}> {/* bouton suivant */}
        <img src={Fleche} alt="Next" /> {/* image de la flèche suivant */}
      </button>
      <div className="carousel-slide"> {/* div qui contiendra l'image du carousel */}
        {images.length > 0 && ( /* si le tableau d'images est non vide */
          <img key={counter} src={images[counter]} alt="Carousel" /> /* on affiche l'image correspondante au compteur */
        )}
      </div>
    </section>
  );
}

export default Carousel; // exportation du composant Carousel
