import React from "react";

function HostLocation({ oneLocation }) {
  const { host } = oneLocation;

  return (
    <div className="host-location">
      <div className="host-name">
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
