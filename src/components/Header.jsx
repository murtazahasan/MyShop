import React from "react";
import { MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo1.png"
import { Link, NavLink } from "react-router-dom";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid ps-0">
          <NavLink className="navbar-brand me-0" to="/" onClick={scrollToTop}>
            <img className=" rounded-5 ms-3 h-25 w-25" src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ps-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/"
                  onClick={scrollToTop}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="MEN"
                  onClick={scrollToTop}
                >
                  MEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="WOMEN"
                  onClick={scrollToTop}
                >
                  WOMEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="ABOUT"
                  onClick={scrollToTop}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="CONTACT"
                  onClick={scrollToTop}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>

            <div className="d-flex">
              <MdSearch className="fs-5 mx-2" />

              <NavLink className="nav-link" to="log-in" onClick={scrollToTop}>
                <span className="px-2 fw-medium">Log In</span>
                <FaUserCircle className="fs-5 me-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
