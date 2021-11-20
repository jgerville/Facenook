import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomeContainer from './home/home_container';

const App = () => (
  <div className="app-container">
    <Routes>
      <Route path="/" element={<HomeContainer />}></Route>
    </Routes>
  </div>
)

export default App;