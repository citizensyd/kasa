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
      <p className="font-weight-small-400 font-size-small-12px font-size-large-18px font-color-primary">
        {equipments}
      </p>
    </div>
  );
}

export default Equipments;
