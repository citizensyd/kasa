import React from "react";
import Rating from "./Rating";
import HostLocation from "./HostLocation";
import Fleche from "../images/fleche.svg";
import Equipments from "./Equipments";
import TagsLocation from "./TagsLocation";

function Fiche({ oneLocation }) {
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
        <div className="description">
          <h3 className="button button-title font-weight-small-500 font-size-13px font-size-large-18px font-color-principal">
            Description
            <img src={Fleche} alt="flèche" />
          </h3>
          <div className="card-grey card-grey-long description-location">
            <p className="font-weight-small-400 font-size-small-12px font-size-large-18px font-color-primary">
              {oneLocation.description}
            </p>
          </div>
        </div>
        <div className="equipments">
          <h3 className="button button-title font-weight-small-500 font-size-13px font-size-large-18px font-color-principal">
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
