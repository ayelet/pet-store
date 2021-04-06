import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavigationMenu.css";
import "../Layout/Layout.css";
import { FaCartArrowDown } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../../assets/img/Logo2.png";

function NavigationMenu() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [navbarClassName, setNavbarClassName] = useState(
    "collapse navbar-collapse"
  );

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
    navbarCollapsed
      ? setNavbarClassName("collapse navbar-collapse")
      : setNavbarClassName("collapse navbar-collapse show");
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm text-white bg-theme">
        <Link to="/" className="navbar-brand ml-5">
          <img src={Logo} alt="Furr Real Logo" width="100px" />
        </Link>{" "}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="text-white">Menu</span>
        </button>
        <div className={navbarClassName}>
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
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
