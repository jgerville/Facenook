import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../auth/LoginPage';

const Home = ({currentUser}) => (
  <>
    {currentUser
    ? <h1>you're logged in!</h1>
    : <LoginPage />
    }
    
  </>
)

export default Home;