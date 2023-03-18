import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-main">
      <h1 className="font-color-primary">404</h1>
      <p className="font-color-primary">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link
        className="font-color-primary highlight-link"
        to="html\home.html"
      >
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default Error;
