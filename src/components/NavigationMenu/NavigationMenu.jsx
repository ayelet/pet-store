import "./NavigationMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand-sm text-white bg-theme">
      {/*<Link to="/" className="navbar-brand ml-5">
           <img src={Logo} alt="Furr Real Logo" width="100px" />
  </Link>*/}
      <a href="navbar-brand ml-5">
        <img src={Logo} alt="Furr Real Logo" width="100px" />
      </a>
      <button className="navbar-toggler" type="button">
        <span className="text-white">Menu</span>
      </button>
    </nav>
  );
  // return (
  //   <nav className="topnav">
  //     <ul>
  //       <li className="logo">Furr Real</li>
  //       <li className="btn">
  //         <FontAwesomeIcon icon={faBars} />
  //       </li>
  //       <div className="items">
  //         <li>
  //           <a className="active" href="/#">
  //             Home
  //           </a>
  //         </li>
  //         <li>
  //           <a className="active" href="/#">
  //             Home
  //           </a>
  //         </li>
  //         <li>
  //           <a className="active" href="/#">
  //             Dogs
  //           </a>
  //         </li>
  //         <li>
  //           <a className="active" href="/#">
  //             Cats
  //           </a>
  //         </li>
  //       </div>
  //       <li className="search-icon">
  //         <input type="search" placeholder="Search" />
  //         <label htmlFor="" className="icon">
  //           <span className="fas fa-search">
  //             <FontAwesomeIcon icon={faSearch} />
  //           </span>
  //         </label>
  //       </li>
  //     </ul>
  //   </nav>
  // );
}

export default NavigationMenu;
