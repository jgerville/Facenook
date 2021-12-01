import React from 'react'
import PropTypes from 'prop-types'
import moment from "moment";

const FormattedTime = ({ postTime, editTime }) => {
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

  return (
    <p>{displayTime(postTime, editTime)}</p>
  )
}

FormattedTime.propTypes = {
  postTime: PropTypes.string.isRequired,
  editTime: PropTypes.string,
}

export default FormattedTime;