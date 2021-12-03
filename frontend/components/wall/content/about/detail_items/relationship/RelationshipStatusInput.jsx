import React, { useState } from "react";
import PropTypes from "prop-types";

const RelationshipStatusInput = ({ editInfo, close, wallOwner }) => {
  const [relationshipStatus, setStatus] = useState("Single");

  const submit = (e) => {
    e.preventDefault();
    const user = { user: wallOwner };
    user.user.relationship_status = relationshipStatus;
    delete user.user.profpic;
    editInfo(user).then(close());
  };

  const handleSelect = (e) => {
    setStatus(e.target.value);
  };

  const exit = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <form className="small-form">
      <select value={relationshipStatus} onChange={handleSelect}>
        <option value="Single">Single</option>
        <option value="In a relationship">In a relationship</option>
        <option value="Engaged">Engaged</option>
        <option value="Married">Married</option>
        <option value="In a civil union">In a civil union</option>
        <option value="In a domestic partnership">In a domestic partnership</option>
        <option value="In an open relationship">In an open relationship</option>
        <option value="It's complicated">It's complicated</option>
        <option value="Separated">Separated</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select>
      <button onClick={exit}>Cancel</button>
      <button onClick={submit}>Save</button>
    </form>
  );
};

RelationshipStatusInput.propTypes = {
  editInfo: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  wallOwner: PropTypes.object.isRequired,
};

export default RelationshipStatusInput;