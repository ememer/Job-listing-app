import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./errorPage.css";

import { faUserAstronaut, faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-content">
      <div className="error-icon">
        <FontAwesomeIcon icon={faUserAstronaut} />
      </div>
      <div className="error-message">
        <h1>Out of galaxy</h1>
        <span>Something went wrong...</span>
      </div>
      <Link className="error-back" to="/"><FontAwesomeIcon className="fa-rotate-180 icon" icon={faShuttleSpace} />Turn back to earth</Link>
    </div>
  );
};

export default ErrorPage;
