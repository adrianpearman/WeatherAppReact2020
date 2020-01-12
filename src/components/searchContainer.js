import React from "react";

const searchContainer = ({ setQuery, search, query }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={e => search(e)}
      />
    </div>
  );
};

export default searchContainer;
