import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toBagSlice } from "../reducers/bagSlice";
import cartimg from "../assets/28.png"

function CartBox() {
  const toBag = useSelector((state) => state[toBagSlice.name]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="position-fixed top-50 end-0 mt-3">
      <div className="bg-white rounded-5 d-inline-flex p-1 shadow-lg">
        <Link
          to="/my-cart"
          className="text-decoration-none"
          onClick={scrollToTop}
        >
          <img src={cartimg} alt="Cart" className="cart-icon" />
          <div className="position-relative ">
            <span className="bg-dark p-1 text-white text-decoration-none rounded-5 small position-absolute  bottom-100  start-50 translate-middle-y">
              {toBag.items.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartBox;
