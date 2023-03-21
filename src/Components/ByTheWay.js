import React from "react";
import UpAndDown from "../UI/UpAndDown"; // Importe le composant UpAndDown

function ByTheWay() {

  // Définit les titres et les paragraphes pour chaque élément UpAndDown
  const titre1 = "Fiabilité";
  const paragraph1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

  const titre2 = "Respect";
  const paragraph2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const titre3 = "Service";
  const paragraph3 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

  const titre4 = "Sécurité";
  const paragraph4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    // Rendu de la section contenant les éléments UpAndDown
    <section className="a-propos-main">
      {/* Utilise le composant UpAndDown en lui passant les titres et les paragraphes en tant que props */}
      <UpAndDown title={titre1} paragraph={paragraph1} />
      <UpAndDown title={titre2} paragraph={paragraph2} />
      <UpAndDown title={titre3} paragraph={paragraph3} />
      <UpAndDown title={titre4} paragraph={paragraph4} />
    </section>
  );
}

export default ByTheWay;
