// Importation des modules React, useState et useEffect depuis la bibliothèque React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { locationsFetcher } from "../Service/api.js";
import Error from "../Components/Error";

// Importation des composants Fiche et Carousel depuis le dossier Components
import Fiche from "../Components/Fiche/Fiche";
import Carousel from "../Components/Fiche/Carousel";

// Définition du composant FicheLogement
const FicheLogement = () => {
  // Récupération de l'identifiant depuis l'url
  const { id } = useParams();

  // Déclaration d'une variable d'état appelée "oneLocation" avec la valeur initiale vide
  const [oneLocation, setLocation] = useState(null);
  const [noLocation, setNoLocation] = useState(false);

  // Utilisation de l'effet de côté pour récupérer les données de la location correspondant à l'identifiant récupéré depuis l'URL
  useEffect(() => {
    async function fetchLocation() {
      try {
        const locations = await locationsFetcher(); // Transformation des données de la réponse HTTP en objet JavaScript
        const oneLocation = locations.filter((location) => location.id === id)[0]; // Filtrage des données pour ne conserver que celles correspondant à l'identifiant de la location recherchée
        if (!oneLocation) {
          setNoLocation(true);
        } else {
           setNoLocation(false);
          setLocation(oneLocation); // Mise à jour de la variable d'état "oneLocation" avec les données de la location récupérées depuis le serveur
        }
      } catch (error) {
        alert("Visiblement nous avons un petit soucis ! Ces articles reviennent très vite !"); // Gestion des erreurs lors de la récupération des données de la location
      }
    }
    fetchLocation();
  }, [id]); // Appel de la fonction fetchLocation une seule fois, après le premier rendu du composant, en passant un tableau vide comme deuxième argument, pour éviter qu'elle soit appelée à chaque rendu

  // Rendu du composant FicheLogement avec les données de la location récupérées depuis le serveur
  return (
    <>
      {noLocation ? (
        <Error />
      ) : oneLocation ? (
        <>
          <Carousel oneLocation={oneLocation} />
          <Fiche oneLocation={oneLocation} />
        </>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </>
  );
};
// Exportation du composant FicheLogement
export default FicheLogement;
