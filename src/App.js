import React from "react";
import "./App.css";
import Search from "./search.js";
import Sfilter from "./Sfilter";

function App() {
  const [searchVal, setSearchVal] = React.useState("");

  return (
    <div className="App">
      <Search onSearch={setSearchVal} />
      <Sfilter searchVal={searchVal} />
    </div>
  );
}

export default App;
