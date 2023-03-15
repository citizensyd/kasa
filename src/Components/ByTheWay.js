import React from "react";
import Fleche from "../images/fleche.svg";

function ByTheWay() {
  return (
    <section className="a-propos-main">
      <h3 className="button button-title font-weight-500 font-size-18px font-color-principal">
        Fiabilité
        <img src={Fleche} alt="fleche" />
      </h3>
      <p className="card-grey font-weight-400 font-size-12px font-color-primary">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
      <h3 className="button button-title font-weight-500 font-size-13px font-color-principal">
        Respect
        <img src={Fleche} alt="fleche" />
      </h3>
      <p className="card-grey font-weight-400 font-size-12px font-color-primary">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
      <h3 className="button button-title font-weight-500 font-size-13px font-color-principal">
        Service
        <img src={Fleche} alt="fleche" />
      </h3>
      <p className="card-grey font-weight-400 font-size-12px font-color-primary">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </p>
      <h3 className="button button-title font-weight-500 font-size-13px font-color-principal">
        Sécurité
        <img src={Fleche} alt="fleche" />
      </h3>
      <p className="card-grey font-weight-400 font-size-12px font-color-primary">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </p>
    </section>
  );
}

export default ByTheWay;
