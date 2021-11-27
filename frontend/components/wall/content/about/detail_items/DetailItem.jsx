import React from "react";
import PropTypes from "prop-types";
import DetailItemIcon from "./DetailItemIcon";
import DetailItemText from "./DetailItemText";

const DetailItem = ({ category, info }) => (
  <div className="detail-item">
    <DetailItemIcon category={category} />
    <DetailItemText category={category} info={info} />
  </div>
);

DetailItem.propTypes = {
  category: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default DetailItem;