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
    <div className="card-grey card-grey-long equipments-location">
      <p className="font-weight-400 font-size-12px font-color-primary">
        {equipments}
      </p>
    </div>
  );
}

export default Equipments;
