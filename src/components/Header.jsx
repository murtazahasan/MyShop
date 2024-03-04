import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className=" rounded-5 ms-3 h-25 w-25" src="logo1.png" alt="" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="MEN">
                  MEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="WOMEN">
                  WOMEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="ABOUT">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="CONTACT">
                  CONTACT
                </NavLink>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
<div className="d-flex" >
<MdSearch className="fs-5 mx-2" />
<IoBagHandleSharp className="fs-5 mx-4" />
<span className="px-2 fw-medium">log in</span>
<FaUserCircle className="fs-5 me-2" />

</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
