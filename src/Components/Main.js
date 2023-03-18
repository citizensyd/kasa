// Importe la bibliothèque React
import React from "react";

// Définit une fonction fléchée (ES6) nommée Main qui prend un paramètre "props"
// "props" est un objet qui contient les propriétés passées au composant
const Main = (props) => {

  // Retourne un élément "main" HTML qui contient les éléments enfants passés au composant
  // Les éléments enfants sont accessibles via la propriété "children" de "props"
  return (
    <main>{props.children}</main>
  );
};

// Exporte la fonction Main pour qu'elle puisse être utilisée dans d'autres fichiers
export default Main;

