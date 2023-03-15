import React from "react";

function Error() {
  return (
    <main className="error-main">
      <p className="font-weight-700 font-size-96px font-color-primary">404</p>
      <p className="font-weight-500 font-size-18px font-color-primary">
        Oups! La page que vous demandez n'existe pas
      </p>
      <a
        className="font-weight-500 font-size-14px font-color-primary highlight-link"
        href="html\home.html"
      >
        Retourner sur la page d'accueil
      </a>
    </main>
  );
}

export default Error;
