// Importe les fonctions useState et useEffect de la bibliothèque React, ainsi que deux composants personnalisés
import React, { useState, useEffect } from "react";
import Hook from "../Components/Hook";
import Locations from "../Components/Locations";

// Définit le composant Home
const Home = () => {

  // Déclare une variable d'état appelée "theLocations" avec la valeur initiale vide
  const [theLocations, setLocations] = useState([]);

  // Utilise l'effet de côté pour récupérer les données du fichier "logements.json" depuis le serveur
  useEffect(() => {

    // Définit une fonction asynchrone fetchData pour récupérer les données du serveur
    async function fetchData() {

      // Envoie une requête HTTP GET au serveur pour récupérer les données du fichier "logements.json"
      const res = await fetch(`/logements.json`);

      // Transforme les données de la réponse HTTP en objet JavaScript
      const data = await res.json();

      // Met à jour la variable d'état "theLocations" avec les données récupérées depuis le serveur
      setLocations(data);
    }

    // Appelle la fonction fetchData une seule fois, après le premier rendu du composant
    // en passant un tableau vide comme deuxième argument, pour éviter qu'elle soit appelée à chaque rendu
    fetchData();
  }, []);

  // Rendu du composant Home
  return (
    // Utilise la balise React.Fragment pour retourner plusieurs éléments sans utiliser de balise parente
    <React.Fragment>
      <Hook />
      <Locations theLocations={theLocations}></Locations>
    </React.Fragment>
  );
};

// Exporte le composant Home pour pouvoir être utilisé dans d'autres fichiers
export default Home;

