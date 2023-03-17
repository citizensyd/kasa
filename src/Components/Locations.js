import React from "react";
import { Link } from "react-router-dom";

const Locations = ({ theLocations }) => {
  const cards = theLocations.map((location) => (
    <Link
      to={{
        pathname: "/fiche-logement",
        search: `?id=${location.id}`,
      }}
      className="card"
      key={location.id}
      data-id={location.id}
    >
      <img src={location.cover} alt={location.title} />
      <p className="font-weight-small-500 font-size-small-18px font-color-principal">
        {location.title}
      </p>
    </Link>
  ));

  return <section id="locations">{cards}</section>;
};

export default Locations;
