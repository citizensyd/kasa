import React from "react";

function TagsLocation({ oneLocation }) {
  const listOfTags = oneLocation.tags;

  const tags = listOfTags.map((tag, index) => (
    <p
      key={index}
      className="button button-tags font-weight-500 font-size-10px font-color-principal"
    >
      {tag}
    </p>
  ));

  return <div className="tags-location">{tags}</div>;
}

export default TagsLocation;