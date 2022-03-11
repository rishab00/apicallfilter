import React, { useState } from "react";

const Search = (props) => {
  const inputEvent = (event) => {
    const data = event.target.value;
    props.onSearch(data);
  };
  return (
    <div>
      <input type="text" placeholder="Search by Name" onChange={inputEvent} />
    </div>
  );
};

export default Search;
