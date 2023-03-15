import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Hook from "../Components/Hook";
import Footer from "../Components/Footer";
import Fiche from "../Components/Fiche";

const FicheLogement = () => {
  const [oneLocation, setLocation] = useState([]);

  const getIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
  };
  console.log(getIdFromUrl());

  useEffect(() => {
    async function fetchLocation() {
      console.log("fetchLocation is called");
      try {
        const id = getIdFromUrl();
        console.log(id);
        const res = await fetch(`/logements.json`);
        const locations = await res.json();
        const oneLocation = locations.filter(
          (location) => location.id === id
        )[0];
        console.log(oneLocation);
        setLocation(oneLocation);
      } catch (error) {
        alert(
          "Visiblement nous avons un petit soucis ! Ces articles reviennent très vite !"
        );
      }
    }
    fetchLocation();

  }, [ ]);
  if (oneLocation.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Layout>
        <Header></Header>
        <Main>
          <Hook></Hook>
          <Fiche oneLocation={oneLocation}></Fiche>
        </Main>
      </Layout>
      <Footer></Footer>
    </div>
  );
};

export default FicheLogement;
