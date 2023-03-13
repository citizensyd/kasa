import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Hook from "../Components/Hook";
import Locations from "../Components/Locations";
import Footer from "../Components/Footer";

const Home = () => {
  // Déclare une variable d'état appelée "theLocations" avec la valeur initiale vide
  const [theLocations, setLocations] = useState([]);

  // Utilise l'effet de côté pour récupérer les données du fichier "logements.json" depuis le serveur
  useEffect(() => {
    async function fetchData() {
      // Envoie une requête HTTP GET au serveur pour récupérer les données du fichier "logements.json"
      const res = await fetch(`/logements.json`);

      // Transforme les données de la réponse HTTP en objet JavaScript
      const data = await res.json();

      // Affiche les données dans la console du navigateur
      console.log(data);

      // Met à jour la variable d'état "theLocations" avec les données récupérées depuis le serveur
      setLocations(data);

      // Appelle la fonction redirectToPageWithId pour ajouter un gestionnaire d'événement aux éléments ".card"
      redirectToPageWithId();
    }

    // Appelle la fonction fetchData une seule fois, après le premier rendu du composant
    // en passant un tableau vide comme deuxième argument, pour éviter qu'elle soit appelée à chaque rendu
    fetchData();
  }, []);

  // Déclare la fonction redirectToPageWithId pour ajouter un gestionnaire d'événement aux éléments ".card"
  function redirectToPageWithId() {
    const el = document.querySelectorAll(".card");
    console.log(el);
    el.forEach((item) => {
      item.addEventListener("click", () => {
        const div = item.closest("div");
        const pageUrl = "fiche.html";
        const id = div.dataset.id;
        // Construit l'URL avec l'identifiant
        const url = pageUrl + "?id=" + id;
        // Redirige vers la page avec l'identifiant dans l'URL
        window.location.href = url;
      });
    });
  }

  return (
    <div>
      <Layout>
        <Header></Header>
        <Main>
          <Hook></Hook>
          <Locations theLocations={theLocations}></Locations>
        </Main>
      </Layout>
      <Footer></Footer>
    </div>
  );
};

export default Home;
