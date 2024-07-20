import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import logo from "../assets/logo1.png";
import styles from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutAndClearCart } from "../reducers/authSlice";
import { useSnackbar } from "notistack";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSignOut = () => {
    dispatch(signOutAndClearCart());
    enqueueSnackbar("Signed out successfully", { variant: "info" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
      scrollToTop();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid ps-0">
          <NavLink className="navbar-brand me-0" to="/" onClick={scrollToTop}>
            <img className="rounded-5 ms-3 h-25 w-25" src={logo} alt="Logo" />
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
                  to="/MEN"
                  onClick={scrollToTop}
                >
                  MEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/WOMEN"
                  onClick={scrollToTop}
                >
                  WOMEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/ABOUT"
                  onClick={scrollToTop}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/CONTACT"
                  onClick={scrollToTop}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>

            <form
              className="d-flex align-items-center ms-2"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
              />
              <button
                type="submit"
                className="btn btn-outline-secondary ms-1"
                style={{ padding: "revert" }}
              >
                <MdSearch className="fs-5" />
              </button>
              {isAuthenticated ? (
                <span
                  className={`${styles.hoverSignOut} ${styles.bg2} mx-2 fw-medium fs-6 px-2 nav-link`}
                  onClick={handleSignOut}
                >
                  SignOut
                </span>
              ) : (
                <NavLink className="nav-link" to="/login" onClick={scrollToTop}>
                  <span
                    className={` ${styles.hoverLogin} ${styles.bg} mx-2 fs-5 px-2 `}
                  >
                    login
                  </span>
                </NavLink>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
