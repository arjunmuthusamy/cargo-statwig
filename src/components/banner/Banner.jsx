import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner({ title, url }) {
  return (
    <React.Fragment>
      <div className="Banner__wrapper">
        <div className="mi_page_container">
          <div className="Banner__space">
            <Link to={url} className="Banner__title">
              <i class="bx bx-arrow-back"></i>
              <h1 className="Banner__title_fs">{title}</h1>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
