import React, { useState } from "react";
import PropTypes from "prop-types";
import Jobs from "../detail_items/jobs/Jobs";
import Schools from "../detail_items/Schools";
import Hometown from "../detail_items/hometown/Hometown";
import RelationshipStatus from "../detail_items/RelationshipStatus";
import { HometownInputContainer, JobsInputContainer } from "../detail_items/input_connecter";

const Overview = ({ wallOwner, isMine }) => {
  const [editJobs, setEditJobs] = useState(false);
  const [editSchools, setEditSchools] = useState(false);
  const [editHometown, setEditHometown] = useState(false);
  const [editRelationshipStatus, setEditRelationshipStatus] = useState(false);

  return (
    <>
      <table className="overview">
        <tbody>
          <tr>
            {editJobs ? (
              <JobsInputContainer wallOwner={wallOwner} close={() => setEditJobs(false)} />
            ) : (
              <Jobs jobs={wallOwner.jobs} isMine={isMine} edit={() => setEditJobs(true)} />
            )}
          </tr>
          <Schools
            schools={wallOwner.schools}
            isMine={isMine}
            edit={setEditSchools}
          />
          {editHometown ? (
            <HometownInputContainer wallOwner={wallOwner} close={() => setEditHometown(false)} />
          ) : (
            <Hometown
              hometown={wallOwner.hometown}
              isMine={isMine}
              edit={setEditHometown}
            />
          )}
          
          <RelationshipStatus
            status={wallOwner.relationshipStatus}
            isMine={isMine}
            edit={setEditRelationshipStatus}
          />
        </tbody>
      </table>
    </>
  );
};

Overview.propTypes = {
  wallOwner: PropTypes.shape({
    jobs: PropTypes.string,
    schools: PropTypes.string,
    hometown: PropTypes.string,
    relationshipStatus: PropTypes.string,
  }).isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Overview;
