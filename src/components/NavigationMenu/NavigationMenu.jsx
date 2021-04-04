import "./NavigationMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function NavigationMenu() {
  return (
    <nav className="topnav">
      <ul>
        <li className="logo">Furr Real</li>
        <li className="btn">
          <FontAwesomeIcon icon={faBars} />
        </li>
        <div className="items">
          <li>
            <a className="active" href="/#">
              Home
            </a>
          </li>
          <li>
            <a className="active" href="/#">
              Home
            </a>
          </li>
          <li>
            <a className="active" href="/#">
              Dogs
            </a>
          </li>
          <li>
            <a className="active" href="/#">
              Cats
            </a>
          </li>
        </div>
        <li className="search-icon">
          <input type="search" placeholder="Search" />
          <label htmlFor="" className="icon">
            <span className="fas fa-search">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
