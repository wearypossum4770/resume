/** @format */

import { useState } from "react";
// https://medium.com/swlh/creating-forms-with-react-hooks-fe02b6eaad5e
export default function SearchBar({ searchTerm, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("Item Name");
  return (
    <input
      type="text"
      id="search"
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search term here..."
      value={searchTerm}
    />
  );
}

{
  /* <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */
}
