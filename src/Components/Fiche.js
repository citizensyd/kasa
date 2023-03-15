import React from "react";
import Rating from "./Rating";
import HostLocation from "./HostLocation";
import Fleche from "../images/fleche.svg";
import Equipments from "./Equipments";
import TagsLocation from "./TagsLocation";

function Fiche({ oneLocation }) {
  console.log(oneLocation);
  return (
    <section className="location-sheet">
      <div className="header-sheet">
        <div className="la-location">
          <div className="title-location">
            <h1 className="font-weight-500 font-size-18px font-color-primary">
              {oneLocation.title}
            </h1>
          </div>
          <div className="localisation-location">
            <p class="font-weight-500 font-size-14px font-color-primary">
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
        <div className="description">
          <h3 className="button button-title font-weight-500 font-size-13px font-color-principal">
            Description
            <img src={Fleche} alt="flèche" />
          </h3>
          <div className="card-grey card-grey-long description-location">
            <p className="font-weight-400 font-size-12px font-color-primary">
              {oneLocation.description}
            </p>
          </div>
        </div>
        <div className="equipments">
          <h3 className="button button-title font-weight-500 font-size-13px font-color-principal">
            Equipements
            <img src={Fleche} alt="flèche" />
          </h3>
          <Equipments oneLocation={oneLocation} />
        </div>
      </div>
    </section>
  );
}

export default Fiche;
