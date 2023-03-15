import React from "react";

function Error() {
  return (
    <main class="error-main">
      <p class="font-weight-700 font-size-96px font-color-primary">404</p>
      <p class="font-weight-500 font-size-18px font-color-primary">
        Oups! La page que vous demandez n'existe pas
      </p>
      <a
        class="font-weight-500 font-size-14px font-color-primary highlight-link"
        href="html\home.html"
      >
        Retourner sur la page d'accueil
      </a>
    </main>
  );
}

export default Error;
