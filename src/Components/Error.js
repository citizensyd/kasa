import React from "react"; // Import de React
import { Link } from "react-router-dom"; // Import du composant Link de React Router

function Error() { // Définition du composant Error
  return (
    <section className="error-main"> {/* Section principale de la page d'erreur */}
      <h1 className="font-color-primary">404</h1> {/* Titre de la page d'erreur */}
      <p className="font-color-primary">
        Oups! La page que vous demandez n'existe pas {/* Message d'erreur */}
      </p>
      <Link
        className="font-color-primary"
        to="/"
      >
        Retourner sur la page d'accueil {/* Lien de retour à la page d'accueil */}
      </Link>
    </section>
  );
}

export default Error; // Export du composant Error pour pouvoir l'utiliser dans d'autres fichiers

