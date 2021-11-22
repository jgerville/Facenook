import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../auth/login/LoginPage';
import Feed from '../feed/Feed';
import TopNav from './TopNav';

const Home = ({currentUser}) => (
  <>
    {currentUser
    ?
    <>
      <TopNav currentUser={currentUser} />
      <Feed />
    </>
    : <LoginPage />
    }
    
  </>
)

export default Home;