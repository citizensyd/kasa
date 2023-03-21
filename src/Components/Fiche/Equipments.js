import React from "react";

function Equipments({ oneLocation }) {

  // On récupère la liste des équipements de la location
  const listOfEquipment = oneLocation.equipments;

  // On transforme la liste en une liste de balises <React.Fragment>
  const equipments = listOfEquipment.map((equipment, index) => (
    <React.Fragment key={index}>
      {equipment}
      <br />
    </React.Fragment>
  ));

  // On retourne la liste des équipements
  return (
    <>
      {equipments}
    </>
  );
}

export default Equipments;

