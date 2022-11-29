import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import clsx from "clsx";

import data from "./../utils/data.json";
import SearchItemList from "./SearchItemList";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filtersArray, setFiltersArray] = useState([]);

  const addFilters = (e) => {
    if (filtersArray.includes(e.target.id)) {
      return;
    } else {
      setFiltersArray((prevState) => [...prevState, e.target.id]);
    }
  };

  const onClose = (e) => {
    if (e.target.id === "search-section") {
      setIsSearchOpen(false);
    }
  };
  return (
    <div
      id="search-section"
      className={clsx(isSearchOpen && " enabled", "search-section")}
      onClick={(e) => onClose(e)}
    >
      <div
        onClick={(e) => {
          if (
            e.target.id !== "remove_button" &&
            e.target.id === "search_content"
          ) {
            setIsSearchOpen(true);
          }
        }}
        className="search-component"
        id="search_content"
      >
        <div
          className={clsx(
            isSearchOpen ? "enabled-search-items" : "disabled-search-items",
            "search-items"
          )}
          id="search_content"
        >
          <ul id="search_content">
            {filtersArray.map((element) => (
              <li key={element}>
                <span>{element}</span>
                <button
                  onClick={(e) => {
                      setFiltersArray(
                      filtersArray.filter((filters) => filters !== e.target.id)
                    );
                  }}
                  id={element}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setFiltersArray([])} id="clear_button">
            Wyczyść
          </button>
          {isSearchOpen && (
            <button onClick={() => setIsSearchOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
      </div>
      {isSearchOpen && (
        <div className="search-filters">
          <SearchItemList
            title="Technologies"
            data={data}
            targetKey="tools"
            filtersArray={filtersArray}
            onClick={addFilters}
          />
          <SearchItemList
            title="Languages"
            data={data}
            targetKey="languages"
            filtersArray={filtersArray}
            onClick={addFilters}
          />
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
