import React from "react";
import Rating from "./Rating";
import HostLocation from "./HostLocation";
import Equipments from "./Equipments";
import TagsLocation from "./TagsLocation";
import UpAndDown from "./UpAndDown";

function Fiche({ oneLocation }) {

  const titre1 = "Description";
  const paragraph1 = oneLocation.description;

  const titre2 = "Equipements";


  

  return (
    <section className="location-sheet">
      <div className="header-sheet">
        <div className="la-location">
          <div className="title-location">
            <h1 className="font-weight-small-500 font-size-18px font-size-large-36px font-color-primary">
              {oneLocation.title}
            </h1>
          </div>
          <div className="localisation-location">
            <p className="font-weight-small-500 font-size-14px font-size-large-18px font-color-primary">
              {oneLocation.location}
            </p>
          </div>
          <TagsLocation oneLocation={oneLocation} />
        </div>
        <div className="host-rating-location">
          <Rating oneLocation={oneLocation} />
          <HostLocation oneLocation={oneLocation} />
        </div>
      </div>
      <div className="description-equipments">
      <UpAndDown className="description" title={titre1} paragraph={paragraph1} />    
      <UpAndDown className="equipments" title={titre2} paragraph={<Equipments oneLocation={oneLocation}/>} />
      </div>
    </section>
  );
}

export default Fiche;
