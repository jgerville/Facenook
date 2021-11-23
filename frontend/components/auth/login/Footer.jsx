import React from 'react';
import moment from 'moment';


const Footer = () => (
  <footer className="login-footer">
    <p>
      <span>React hooks</span>
      <span>Redux</span>
      <span>Javascript</span>
      <span>Node.js</span>
      <span>Ruby</span>
      <span>Rails</span>
      <span>SQL</span>
      <span>PostgreSQL</span>
      <span>HTML5</span>
      <span>CSS</span>
      <span>SCSS</span>
      <span>JSON API</span>
      <span>Git</span>
    </p>
    <div className="separator" />
    <p>Julian Erville © {moment().year()}</p>
  </footer>
)

export default Footer;