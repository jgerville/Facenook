import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/login/LoginPage";
import Feed from "../feed/Feed";
import WallContainer from "../wall/wall_container";
import TopNav from "./TopNav";

const Home = ({ currentUser }) => (
  <>
    {currentUser ? (
      <>
        <TopNav currentUser={currentUser} />
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