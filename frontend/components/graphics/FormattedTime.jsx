import React from 'react'
import PropTypes from 'prop-types'
import moment from "moment";

const FormattedTime = ({ postTime, editTime, isComment }) => {
  const formatTime = (dateTime) => {
    const now = moment();
    const oneWeekAgo = now.subtract(7, "days");
    const postTime = moment(dateTime);
    if (moment(dateTime) > oneWeekAgo) {
      return postTime.fromNow();
    } else {
      if (postTime.year() < now.year()) {
        return postTime.format("MMMM Do YY")
      } else {
        return postTime.format("MMMM Do")
      }
    }
  }

  const displayTime = (postTime, editTime) => {
    if (editTime) {
      return (
        postTime === editTime ?
        formatTime(postTime) :
        `${formatTime(postTime)} · Edited ${formatTime(editTime)}`
      )
    } else {
      return `${formatTime(postTime)}`
    }
    
  }

  const singleCharTime = (dateTime) => {
    const postTime = moment(dateTime);
    const now = moment();
    if (now.diff(postTime, "years") >= 1) {
      return `${now.diff(postTime, "years")}y`
    } else if (now.diff(postTime, "months") >= 1) {
      return `${now.diff(postTime, "months")}m`
    } else if (now.diff(postTime, "weeks") >= 1) {
      return `${now.diff(postTime, "weeks")}w`
    } else if (now.diff(postTime, "days") >= 1) {
      return `${now.diff(postTime, "days")}d`
    } else if (now.diff(postTime, "hours") >= 1) {
      return `${now.diff(postTime, "hours")}h`
    } else if (now.diff(postTime, "minutes") >= 1) {
      return `${now.diff(postTime, "minutes")}m`
    } else {
      return `${now.diff(postTime, "seconds")}s`;
    }
  }

  return (
    <span>
      {isComment ? singleCharTime(postTime) : displayTime(postTime, editTime) }
    </span>
  )
}

FormattedTime.propTypes = {
  postTime: PropTypes.string.isRequired,
  editTime: PropTypes.string,
  isComment: PropTypes.bool,
}

export default FormattedTime;