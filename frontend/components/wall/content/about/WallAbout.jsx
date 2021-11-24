import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import Overview from './detail_panes/Overview';

const WallAbout = ({wallOwner, isMine}) => {
  return (
    <div className="wall-about">
      <div className="categories">
        <h3>About</h3>
        <ul>
          <li><NavLink end to="">Overview</NavLink></li>
          <li><NavLink to="work_and_education">Work and Education</NavLink></li>
          <li><NavLink to="places_lived">Places Lived</NavLink></li>
          <li><NavLink to="contact_and_basic_info">Contact and Basic Info</NavLink></li>
        </ul>
      </div>
      <div className="details">
        <Routes>
          <Route exact strict path="" element={<Overview wallOwner={wallOwner} />} />
          <Route path="work_and_education" element={<Overview wallOwner={wallOwner} />} />
        </Routes>
      </div>
    </div>
  )
}

WallAbout.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
}

export default WallAbout