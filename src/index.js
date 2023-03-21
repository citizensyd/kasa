// Importer les bibliothèques React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importer les fichiers CSS pour l'application
import "./index.css";
import "./sass/main.css";

// Importer le module reportWebVitals pour mesurer les performances de l'application
import reportWebVitals from "./reportWebVitals";

// Importer les composants de la bibliothèque react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importer les pages de l'application
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropops from "./pages/APropos";
import NotFound from "./pages/NotFound";

// Importer les composants personnalisés
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

// Créer un "root" pour l'application avec la méthode createRoot de ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendre l'application dans le "root" avec la méthode render de React
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropops />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Layout>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
