import React from "react";

function SearchBar({ keyword, onSearchHandler, onSubmitSearchHandler }) {
  return (
    <form onSubmit={onSubmitSearchHandler}>
      <input
        type="text"
        name="keyword"
        id="keyword"
        value={keyword}
        onChange={onSearchHandler}
        placeholder="Keyword Notes"
        autoComplete="off"
      />
    </form>
  );
}

export default SearchBar;
