import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Jobs from "./about/detail_items/jobs/Jobs";
import Schools from "./about/detail_items/Schools";
import RelationshipStatus from "./about/detail_items/RelationshipStatus";

const Intro = ({ wallOwner }) => {
  // const {fname, lname, birthday, gender, createdAt, currentCity, hometown, jobs, relationshipStatus, schools } = wallOwner;

  return (
    <section className="wall-intro">
      <h3>Intro</h3>
      <ul>
        {wallOwner.jobs && (
          <li>
            <Jobs jobs={wallOwner.jobs} />
          </li>
        )}

        {wallOwner.schools && (
          <li>
            <Schools schools={wallOwner.schools} />
          </li>
        )}

        {wallOwner.currentCity && (
          <li>
            <i className="fas fa-home" />
            Lives in {wallOwner.currentCity}
          </li>
        )}

        {wallOwner.hometown && (
          <li>
            <i className="fas fa-map-marker-alt" />
            From {wallOwner.hometown}
          </li>
        )}

        {wallOwner.relationshipStatus && (
          <li>
            <RelationshipStatus status={wallOwner.relationshipStatus} />
          </li>
        )}

        {wallOwner.createdAt && (
          <li>
            <i className="fas fa-clock" />
            Joined {moment(wallOwner.createdAt).fromNow()}
          </li>
        )}
      </ul>
    </section>
  );
};

Intro.propTypes = {
  wallOwner: PropTypes.object.isRequired,
}

export default Intro;
