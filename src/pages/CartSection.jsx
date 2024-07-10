import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  removeCartItemFromDatabase,
  updateCartItemInDatabase,
} from "../reducers/cartSlice";

function CartSection() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Add console log to check the cartItems structure
  console.log("Cart Items:", cartItems);

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
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mb-5" style={{ marginTop: "140px" }}>
      <h2 className="text-center">Your Cart</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {cartItems.map((item) => {
            console.log("Item details:", item);
            return (
              <div
                className="card mb-3 "
                style={{ position: "inherit" }}
                key={item.productId}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded mx-3 mt-3 "
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p>
                        <span className="fw-bold">
                          Rs.{item.discountPrice}{" "}
                        </span>
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
            );
          })}
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
    </div>
  );
}

export default CartSection;
