import React from "react";
import Rating from "./Rating";
import HostLocation from "./HostLocation";
import Equipments from "./Equipments";
import TagsLocation from "./TagsLocation";
import UpAndDown from "./UpAndDown";

function Fiche({ oneLocation }) {

  // définir le titre et le paragraphe de la première section
  const titre1 = "Description";
  const paragraph1 = oneLocation.description;

  // définir le titre de la deuxième section
  const titre2 = "Equipements";

  return (
    <section className="location-sheet">
      {/* Header de la fiche avec le titre, la localisation, les tags, la note du logement et le nom de l'hôte */}
      <div className="header-sheet">
        <div className="la-location">
          <div className="title-location">
            <h1 className="font-color-primary">
              {oneLocation.title}
            </h1>
          </div>
          <div className="localisation-location">
            <p className="font-color-primary">
              {oneLocation.location}
            </p>
          </div>
          {/* Afficher les tags du logement */}
          <TagsLocation oneLocation={oneLocation} />
        </div>
        <div className="host-rating-location">
          {/* Afficher la note du logement */}
          <Rating oneLocation={oneLocation} />
          {/* Afficher le nom de l'hôte et sa localisation */}
          <HostLocation oneLocation={oneLocation} />
        </div>
      </div>
      {/* Section pour la description et les équipements */}
      <div className="description-equipments">
        {/* Composant UpAndDown pour la description */}
        <UpAndDown className="description" title={titre1} paragraph={paragraph1} />    
        {/* Composant UpAndDown pour les équipements, en utilisant le composant Equipments */}
        <UpAndDown className="equipments" title={titre2} paragraph={<Equipments oneLocation={oneLocation}/>} />
      </div>
    </section>
  );
}

export default Fiche;
