import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/login/LoginPage";
import Feed from "../feed/Feed";
import WallContainer from "../wall/wall_container";
import TopNavContainer from "./topnav/topnav_container";

const Home = ({ currentUser }) => (
  <>
    {currentUser ? (
      <>
        <TopNavContainer currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:userId/*" element={<WallContainer />} />
        </Routes>
      </>
    ) : (
      <LoginPage />
    )}
  </>
);

Home.propTypes = {
  currentUser: PropTypes.object,
}

export default Home;