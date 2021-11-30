import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const HomeAndSearch = ({ searchResults, search }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const updateAndSearch = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (query) search(query)
  }, [query])

  return (
    <div className="home-and-search">
      {searchIsOpen ? (
        <>
          <div className="badge back" onClick={() => setSearchIsOpen(false)}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="search">
            {/* <i className="fas fa-search" /> */}
            <input type="search" value={query} onChange={updateAndSearch} />
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

HomeAndSearch.propTypes = {
  searchResults: PropTypes.object,
  search: PropTypes.func.isRequired,
};

export default HomeAndSearch;