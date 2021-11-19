import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({currentUser}) => (
  <>
    {currentUser
    ? <h1>you're logged in!</h1>
    : <h1>not logged in</h1>
    }
    
  </>
)

export default Home;