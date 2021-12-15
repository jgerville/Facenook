import React from "react";
import PropTypes from "prop-types";

const DetailItemText = ({ category, info }) => {
  let spanText = "";

  if (info === "") {
    return <span>No {category} info to show</span>;
  }

  switch (category) {
    case "job":
      spanText = `Works at ${info}`;
      break;
    case "education":
      spanText = `Studied at ${info}`;
      break;
    case "hometown":
      spanText = `From ${info}`;
      break;
    case "location":
      spanText = `Lives in ${info}`;
      break;
    case "relationship":
      spanText = `${info}`;
      break;
    case "creation":
      spanText = `Joined ${info}`;
      break;
    default:
      spanText = "";
  }

  return <span>{spanText}</span>;
};

DetailItemText.propTypes = {
  category: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default DetailItemText;
