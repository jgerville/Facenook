import React from "react";
import PropTypes from "prop-types";

const DetailItemIcon = ({ category }) => {
  let icon = "";

  switch (category) {
    case "job":
      icon = "fa-briefcase";
      break;
    case "education":
      icon = "fa-graduation-cap";
      break;
    case "hometown":
      icon = "fa-map-marker-alt";
      break;
    case "location":
      icon = "fa-home"
    case "email":
      icon = "fa-envelope";
      break;
    case "relationship":
      icon = "fa-heart";
      break;
    case "creation":
      icon = "fa-clock";
      break;
    case "plus":
      icon = "fa-plus";
      break;

    default:
      icon = "";
  }

  return <i className={`fas ${icon}`} />;
};

DetailItemIcon.propTypes = {
  category: PropTypes.string.isRequired,
};

export default DetailItemIcon;