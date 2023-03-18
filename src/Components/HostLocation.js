import React from "react";

function HostLocation({ oneLocation }) {
  // destructuration de l'objet oneLocation pour obtenir l'objet host
  const { host } = oneLocation;

  // découpe le nom du propriétaire en parties individuelles
  const nameParts = host.name.split(" ");

  // crée un tableau de composants <p> pour chaque partie du nom
  const nameComponents = nameParts.map((namePart) => (
    <p key={namePart}>{namePart}</p>
  ));

  // retourne les deux éléments sous la forme d'un composant parent <div>
  return (
    <div className="host-location">
      <div className="host-name font-color-primary">{nameComponents}</div>
      <div className="host-picture">
        <img src={host.picture} alt="Propriétaire" />
      </div>
    </div>
  );
}
export default HostLocation;
