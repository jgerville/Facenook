import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeContainer from "./home/home_container";

const App = () => (
  <div className="app-container">
    <Routes>
      <Route path="/*" element={<HomeContainer />} />
    </Routes>
  </div>
);

export default App;