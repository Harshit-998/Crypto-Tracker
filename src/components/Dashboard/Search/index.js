import React from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon style={{ color: "var(--grey)", fontSize: "1.5rem" }} />
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={ (e) => onSearchChange(e)}
      />
    </div>
  );
}

export default Search;