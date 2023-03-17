import React, { useState, useEffect } from "react";
import Fiche from "../Components/Fiche";
import Carousel from "../Components/Carousel";

const FicheLogement = () => {
  const [oneLocation, setLocation] = useState([]);

  const getIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
  };

  useEffect(() => {
    async function fetchLocation() {
      try {
        const id = getIdFromUrl();
        const res = await fetch(`/logements.json`);
        const locations = await res.json();
        const oneLocation = locations.filter(
          (location) => location.id === id
        )[0];
        setLocation(oneLocation);
      } catch (error) {
        alert(
          "Visiblement nous avons un petit soucis ! Ces articles reviennent très vite !"
        );
      }
    }
    fetchLocation();
  }, []);
  if (oneLocation.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <Carousel oneLocation={oneLocation} />
      <Fiche oneLocation={oneLocation}></Fiche>
    </React.Fragment>
  );
};

export default FicheLogement;
