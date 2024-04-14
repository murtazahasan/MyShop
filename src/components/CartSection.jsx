import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag, updateQuantity } from "../store/toBag";

function CartSection() {
  const itemsInBag = useSelector((state) => state.toBag.items);
  const dispatch = useDispatch();

  const handleRemoveFromBag = (id) => {
    dispatch(removeFromBag(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const getTotalAmount = () => {
    return itemsInBag.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
  };

  return (
    <div className="pb-5" style={{ backgroundColor: "#d9dfe859" }}>
      <div className="p-3 mt-5">
        <h1 className="text-center border-bottom pb-2 fw-bold my-5">
          Order Details
        </h1>
        <div className="container">
          {itemsInBag.map((item) => (
            <div className="row mb-4 p-3" key={item.id}>
              <div className="col-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-9">
                <h3>{item.name}</h3>
                <p className="mb-1">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-muted me-2" style={{ textDecoration: "line-through" }}>
                      Original Price: RS{item.price}
                    </span>
                    <span className="text-success fw-bold">
                      Discounted Price: RS{item.discountedPrice}
                    </span>
                    <div className="quantity-controls">
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity m-2">{item.quantity}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromBag(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" border-top py-4 px-4 ">
        <p>Total Amount: ${getTotalAmount()}</p>
        <button className=" btn btn-primary float-end">Purchase Now</button>
      </div>
    </div>
  );
}

export default CartSection;
