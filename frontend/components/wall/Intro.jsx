import React from "react";
import moment from "moment";

const Intro = ({ wallOwner }) => {
  // const {fname, lname, birthday, gender, createdAt, currentCity, hometown, jobs, relationshipStatus, schools } = wallOwner;

  return (
    <section className="wall-intro">
      <h3>Intro</h3>
      <ul>
        {wallOwner.jobs && (
          <li>
            <i className="fas fa-briefcase" />
            Works at {wallOwner.jobs}
          </li>
        )}

        {wallOwner.schools && (
          <li>
            <i className="fas fa-graduation-cap" />
            Studied at {wallOwner.schools}
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
            <i className="fas fa-heart" />
            {wallOwner.relationshipStatus}
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

export default Intro;
