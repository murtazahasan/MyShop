import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  removeCartItemFromDatabase,
  updateCartItemInDatabase,
} from "../reducers/cartSlice";

function CartSection() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    addressLine: "",
    phoneNumber: "",
    email: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
    dispatch(removeCartItemFromDatabase(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
    dispatch(updateCartItemInDatabase({ productId, quantity: newQuantity }));
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:4000/orders/new-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          items: cartItems,
          shippingAddress: userDetails,
          totalAmount: getTotalAmount(),
        }),
      });

      if (response.ok) {
        cartItems.forEach((item) =>
          dispatch(removeFromCart({ productId: item.productId }))
        ); // Clear cart
        navigate("/checkout-success");
      } else {
        console.error("Checkout failed!");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="container mb-5" style={{ marginTop: "140px" }}>
      <h2 className="text-center">Your Cart</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div
              className="card mb-3"
              style={{ position: "inherit" }}
              key={item.productId}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded mx-3 mt-3"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p>
                      <span className="fw-bold">Rs.{item.discountPrice}</span>
                      <span style={{ textDecoration: "line-through" }}>
                        Rs.{item.price}
                      </span>
                      <span style={{ color: "#b84444" }}>
                        ({item.discountPercentage}% OFF)
                      </span>
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger my-3 mx-3"
                    onClick={() => handleRemoveFromCart(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="border p-4 mb-5">
            <h4 className="text-center">
              Total Amount:
              <span className="text-success fw-bold">
                Rs {getTotalAmount()}
              </span>
            </h4>
          </div>
        </div>
      </div>
      {cartItems.length > 0 ? (
        <>
          <button className="btn btn-secondary mt-3" onClick={handleModalShow}>
            Buy Now
          </button>

          {showModal && (
            <div className="modal show" style={{ display: "block" }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Enter Your Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleModalClose}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={userDetails.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="addressLine" className="form-label">
                        Address Line
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressLine"
                        name="addressLine"
                        value={userDetails.addressLine}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={userDetails.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={userDetails.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={userDetails.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="postalCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        name="postalCode"
                        value={userDetails.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleModalClose}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCheckout}
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-muted mt-3 ms-2">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartSection;
