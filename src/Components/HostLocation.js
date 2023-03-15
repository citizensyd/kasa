import React from "react";

function HostLocation({ oneLocation }) {
  const { host } = oneLocation;

  return (
    <div className="host-location">
      <div className="host-name font-weight-small-500 font-size-small-12px font-size-large-18px font-color-primary">
        {host.name.split(" ").map((namePart) => (
          <p key={namePart}>{namePart}</p>
        ))}
      </div>
      <div className="host-picture">
        <img src={host.picture} alt="Propriétaire" />
      </div>
    </div>
  );
}

export default HostLocation;
