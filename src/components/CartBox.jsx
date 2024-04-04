import React from "react";
import { Link } from "react-router-dom";

function CartBox() {
  return (
    <div className="position-fixed top-50 end-0 mt-3">
      <div className="bg-white rounded-5 d-inline-flex p-1 shadow-lg">
        <Link to="/my-cart" className="text-decoration-none">
          <img src="28.png" alt="Cart" className="cart-icon" />
          <div className="position-relative ">
            <span className="bg-dark p-1 text-white text-decoration-none rounded-5 small position-absolute  bottom-100  start-50 translate-middle-y">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartBox;
