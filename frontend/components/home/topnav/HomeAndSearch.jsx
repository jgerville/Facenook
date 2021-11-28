import React, { useState } from "react";
import PropTypes from "prop-types";

const HomeAndSearch = (props) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="home-and-search">
      {searchIsOpen ? (
        <>
          <div className="badge back" onClick={() => setSearchIsOpen(false)}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="search">
            {/* <i className="fas fa-search" /> */}
            <input type="search" />
          </div>
        </>
      ) : (
        <>
          <div className="badge home" />
          <div className="badge search-button" onClick={() => setSearchIsOpen(true)}>
            <i className="fas fa-search" />
          </div>
        </>
      )}
    </div>
  );
};

// HomeAndSearch.propTypes = {};

export default HomeAndSearch;