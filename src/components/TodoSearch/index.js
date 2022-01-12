import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";

import "./TodoSearch.css";
const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
};

export { TodoSearch };
