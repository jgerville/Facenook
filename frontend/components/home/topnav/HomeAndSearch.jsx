import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import SearchResults from "./SearchResults";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeAndSearch = ({ searchResults, friendIds, search, updateCancelToken, cancelToken, currentUser }) => {
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
            <div className="badge home" >
              <Link to="/">
                <img src="https://facenook-seeds.s3.us-east-2.amazonaws.com/f-icon.png" alt="facenook-icon" />
              </Link>
            </div>
            <div
              className="badge search-button"
              onClick={() => setSearchIsOpen(true)}
            >
              <i className="fas fa-search" />
            </div>
          </>
        )}
      </div>
      {query && <SearchResults close={close} results={searchResults} youId={currentUser.id} friendIds={friendIds} />}
    </>
  );
};

HomeAndSearch.propTypes = {
  searchResults: PropTypes.object,
  search: PropTypes.func.isRequired,
  friendIds: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default HomeAndSearch;
