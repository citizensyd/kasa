import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/main.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropops from "./pages/APropos";
import NotFound from "./pages/NotFound";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement" element={<FicheLogement />} />
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
