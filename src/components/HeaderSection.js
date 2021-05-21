import { React } from "react";
import { Link } from "react-router-dom";

import "./HeaderSection.scss";

export const HeaderSection = () => {
  return (
    <div className="HeaderSection">
      <Link to="/">
        <h1 className="app-name">IPL Cricket Dashbaord</h1>
      </Link>
    </div>
  );
};
