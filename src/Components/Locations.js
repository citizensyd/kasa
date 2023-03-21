// Importe la bibliothèque React et le composant "Link" de "react-router-dom"
import React from "react";
import { Link } from "react-router-dom";

// Définit une fonction fléchée (ES6) nommée Locations qui prend un paramètre "theLocations"
// "theLocations" est un tableau d'objets qui contient les informations sur les différents logements
const Locations = ({ theLocations }) => {
  // Crée une variable "cards" qui est un tableau de composants "Link"
  // Chaque composant "Link" correspond à un logement, et est construit à partir des informations contenues dans l'objet "location"
  const cards = theLocations.map((location) => (
    <Link
      to={{
        /* Spécifie le chemin de destination du lien, ainsi que les paramètres de requête pour l'ID du logement */
        pathname: "/fiche-logement",
        search: `?id=${location.id}`,
      }}
      className="card"
      key={location.id}
    >
      <img src={location.cover} alt={location.title} />
      <p className="font-color-principal">{location.title}</p>
    </Link>
  ));

  // Retourne un élément "section" HTML avec un identifiant "locations"
  // L'élément "section" contient les composants "Link" correspondant aux différents logements
  return <section id="locations">{cards}</section>;
};

// Exporte la fonction Locations pour qu'elle puisse être utilisée dans d'autres fichiers
export default Locations;
