import React from "react";

const Locations = ({ theLocations }) => {

  const cards = theLocations.map(location => (
    <div className="card" data-id={location.id}>
      <img src={location.cover} alt={location.title} />
      <p className="font-weight-500 font-size-18px font-color-principal">{location.title}</p>
    </div>
  ));

  return <section id="locations">

{cards}
  </section>;
};

export default Locations;
