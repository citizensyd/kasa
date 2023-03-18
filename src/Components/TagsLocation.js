import React from "react";

// Composant TagsLocation
function TagsLocation({ oneLocation }) {
  // Récupération de la liste des tags de oneLocation
  const listOfTags = oneLocation.tags;

  // Utilisation de la méthode map pour créer un tableau de <p> pour chaque tag
  const tags = listOfTags.map((tag, index) => (
    <p
      key={index} // key unique pour chaque élément du tableau
      className="button button-tags font-color-principal" // classes CSS pour la mise en page
    >
      {tag} {/* texte du tag */}
    </p>
  ));

  // Retourne un <div> contenant le tableau de tags
  return <div className="tags-location">{tags}</div>;
}

// Exportation du composant TagsLocation
export default TagsLocation;
