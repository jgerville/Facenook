import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import SearchResults from "./SearchResults";
import axios from "axios";

const HomeAndSearch = ({ searchResults, friendIds, search, updateCancelToken, cancelToken }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  const close = () => {
    setQuery("");
  }

  useEffect(() => {
    if (query) {
      if (Object.keys(cancelToken).length > 0) {
        cancelToken.cancel("Canceling prev search")
      }

      cancelToken = axios.CancelToken.source();
      updateCancelToken(cancelToken);
      search(query, cancelToken);
    } 
  }, [query]);

  return (
    <>
      <div className="home-and-search">
        {searchIsOpen ? (
          <>
            <div className="badge back" onClick={() => setSearchIsOpen(false)}>
              <i className="fas fa-arrow-left"></i>
            </div>
            <Search query={query} updateQuery={updateQuery} />
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
      {query && <SearchResults close={close} results={searchResults} friendIds={friendIds} />}
    </>
  );
};

HomeAndSearch.propTypes = {
  searchResults: PropTypes.object,
  search: PropTypes.func.isRequired,
  friendIds: PropTypes.array.isRequired,
};

export default HomeAndSearch;
