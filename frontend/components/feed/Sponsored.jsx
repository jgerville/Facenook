import React from "react";

const Sponsored = () => {
  return (
    <div className="sponsord-section">
      <div className="sponsord-container">
        <h3>Sponsored</h3>

        <a href="https://www.linkedin.com/in/julian-erville-9a8911224/">
          <div className="sponsored-item">
            <div className="sponsored-picture">
              <img
                src="https://avatars.githubusercontent.com/u/79581995?v=4"
                alt="picture of developer"
              />
            </div>
            <div className="sponsord-text">
              <span className="text-title">WEB DEVELOPER FOR HIRE</span>
              <span className="text-link">linkedin.com</span>
            </div>
          </div>
        </a>

        <a href="https://www.teacherspet.com/">
          <div className="sponsored-item">
            <div className="sponsored-picture">
              <img
                src="https://teacherspet.io/static/media/logo_blue.ecf60880.png"
                alt="teacherspet logo"
              />
            </div>
            <div className="sponsord-text">
              <span className="text-title">STUDENT REPORT CREATOR</span>
              <span className="text-link">teacherspet.io</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sponsored;