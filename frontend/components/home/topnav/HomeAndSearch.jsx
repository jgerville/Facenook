import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import SearchResults from "./SearchResults";



const HomeAndSearch = ({ searchResults, friendIds, search }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  const close = () => {
    setQuery("");
  }

  useEffect(() => {
    if (query) search(query);
  }, [query]);

  return (
    <div className="home-and-search">
      {searchIsOpen ? (
        <>
          <div className="badge back" onClick={() => setSearchIsOpen(false)}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <Search query={query} updateQuery={updateQuery} />
          {query && <SearchResults close={close} results={searchResults} friendIds={friendIds} />}
        </>
      ) : (
        <>
          <div className="badge home" />
          <div
            className="badge search-button"
            onClick={() => setSearchIsOpen(true)}
          >
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
  friendIds: PropTypes.array.isRequired,
};

export default HomeAndSearch;
