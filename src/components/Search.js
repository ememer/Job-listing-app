import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import clsx from "clsx";

import data from "./../utils/data.json";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filtersArray, setFiltersArray] = useState([]);

  const getUniqueElements = (data, key) => {
    let arrayOfEachElements = [];
    data.map((elements) =>
      elements?.[key].forEach((element) => arrayOfEachElements.push(element))
    );

    return [...new Set(arrayOfEachElements)];
  };

  const addFilters = (e) => {
    if (filtersArray.includes(e.target.value)) {
      return;
    } else {
      setFiltersArray((prevState) => [...prevState, e.target.value]);
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
          id="search_content"
          className={clsx(
            isSearchOpen ? "enabled-search-items" : "disabled-search-items",
            "search-items"
          )}
        >
          <ul>
            {filtersArray.map((element) => (
              <li key={element}>
                <span>{element}</span>
                <button
                  onClick={(e) =>
                    setFiltersArray(
                      filtersArray.filter(
                        (filters) => filters !== e.target.value
                      )
                    )
                  }
                  value={element}
                >
                  <FontAwesomeIcon icon={faXmark} />
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
          <div>
            <h2>Technologies</h2>
            <ul>
              {getUniqueElements(data, "tools").map((tool) => (
                <li key={tool}>
                  <button onClick={(e) => addFilters(e)} value={tool}>
                    {tool}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Languages</h2>
            <ul>
              {getUniqueElements(data, "languages").map((language) => (
                <li key={language}>
                  <button onClick={(e) => addFilters(e)} value={language}>
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
