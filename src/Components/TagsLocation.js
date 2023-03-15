import React from "react";

function TagsLocation({ oneLocation }) {
  const listOfTags = oneLocation.tags;

  const tags = listOfTags.map((tag, index) => (
    <p
      key={index}
      className="button button-tags font-weight-small-500 font-size-small-10px font-size-large-14px font-color-principal"
    >
      {tag}
    </p>
  ));

  return <div className="tags-location">{tags}</div>;
}

export default TagsLocation;