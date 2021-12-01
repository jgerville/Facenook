import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import moment from "moment";

const UserCard = ({ user, time }) => {
  const formatTime = (dateTime) => {
    const now = moment();
    const oneWeekAgo = now.subtract(7, "days");
    const postTime = moment(dateTime);
    if (moment(time) > oneWeekAgo) {
      return postTime.fromNow();
    } else {
      if (postTime.year() < now.year()) {
        return postTime.format("MMMM Do YY")
      } else {
        return postTime.format("MMMM Do")
      }
    }
  }
  
  return (
    <div className="user-card">
      <Avatar user={user} />
      <div className="name-and-time">
        <h4>
          {user.fname} {user.lname}
        </h4>
        <p>{time && formatTime(time)}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.string,
};

export default UserCard;
