import React from "react";

function Error() {
  return (
    <section className="error-main">
      <p className="font-weight-small-700 font-size-small-96px font-size-large-288px font-color-primary">404</p>
      <p className="font-weight-small-500 font-size-small-18px font-size-large-36px font-color-primary">
        Oups! La page que vous demandez n'existe pas
      </p>
      <a
        className="font-weight-small-500 font-size-small-14px font-size-large-18px font-color-primary highlight-link"
        href="html\home.html"
      >
        Retourner sur la page d'accueil
      </a>
    </section>
  );
}

export default Error;
