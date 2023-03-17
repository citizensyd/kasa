import React from "react";

function Equipments({ oneLocation }) {
  const listOfEquipment = oneLocation.equipments;
  const equipments = listOfEquipment.map((equipment, index) => (
    <React.Fragment key={index}>
      {equipment}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      {equipments}
    </>
  );
}

export default Equipments;
