import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import clsx from "clsx";

const SearchCompnent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div
        id="search-section"
      onClick={(e) => {
        if (e.target.id !== "search") {
          setIsSearchOpen(false);
        }
      }}
      className={clsx(isSearchOpen && "search-section")}
    >
      <div className="search-component"></div>
      <div
        id="search"
        onClick={() => setIsSearchOpen(true)}
        className="search-items"
      >
        <ul>
          <li>
            <span>TEST</span>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        </ul>
        <button>Wyczyść</button>
      </div>
    </div>
  );
};

export default SearchCompnent;
