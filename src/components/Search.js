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
    className={clsx(isSearchOpen && " enabled", "search-section")}
      onClick={(e) => {
        if (e.target.id === "search-section") {
          setIsSearchOpen(false);
        }
      }}
    >
      <div

        onClick={() => setIsSearchOpen(true)}
        className="search-component"
      >
        <div className="search-items">
          <ul >
            <li >
              <span >TEST</span>
              <button>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          </ul>
          <button>Wyczyść</button>
        </div>
      </div>
    </div>
  );
};

export default SearchCompnent;
