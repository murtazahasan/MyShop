import React from "react";
import { NavLink } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <h2 className="text-center text-success">Order Placed Successfully!</h2>
      <p className="text-center">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <button className="btn btn-dark ms-4 mt-5 mb-5" type="button">
        <NavLink
          style={{ textDecoration: "none" }}
          className="text-white"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← HOME
        </NavLink>
      </button>
    </div>
  );
}

export default CheckoutSuccess;
