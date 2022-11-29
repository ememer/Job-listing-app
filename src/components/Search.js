import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import clsx from "clsx";

import data from "./../utils/data.json";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const getUniqueElements = (data, key) => {
    let arrayOfEachElements = [];
    data.map((elements) =>
      elements?.[key].forEach((element) => arrayOfEachElements.push(element))
    );

    return [...new Set(arrayOfEachElements)];
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
        >
          <ul id="search_content">
            <li>
              <span>TEST</span>
              <button>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          </ul>
          <button id="clear_button">Wyczyść</button>
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
            <ul>
              {getUniqueElements(data, "tools").map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {getUniqueElements(data, "languages").map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
