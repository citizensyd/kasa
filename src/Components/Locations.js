import React, { useEffect } from "react";

const Locations = ({ theLocations }) => {
  const cards = theLocations.map((location) => (
    <div className="card" key={location.id} data-id={location.id}>
      <img src={location.cover} alt={location.title} />
      <p className="font-weight-small-500 font-size-small-18px font-color-principal">
        {location.title}
      </p>
    </div>
  ));

  useEffect(() => {
    function redirectToPageWithId() {
      const parent = document.getElementById("locations");
      const el = parent.querySelectorAll(".card");
      console.log(el);
      el.forEach((item) => {
        item.addEventListener("click", () => {
          const div = item.closest("div");
          const pageUrl = "fiche-logement";
          const id = div.dataset.id;
          const url = pageUrl + "?id=" + id;
          window.location.href = url;
        });
      });
    }

    redirectToPageWithId();
  }, [theLocations]);

  return <section id="locations">{cards}</section>;
};

export default Locations;
