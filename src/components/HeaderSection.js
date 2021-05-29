import { React } from "react";
import { Link } from "react-router-dom";

import "./HeaderSection.scss";

export const HeaderSection = () => {
  return (
    <div className="HeaderSection">
      <div>
        <Link to="/">
          <img src="/images/ipl-logo.svg" alt="Dashboard" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <span>
            <h1 className="app-name">IPL Cricket Dashbaord</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};
