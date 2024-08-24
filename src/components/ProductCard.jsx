import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../reducers/bagSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  discountedPrice,
  discount,
}) => {
  const dispatch = useDispatch();
  const inBag = useSelector((state) =>
    state.Bag.items.find((item) => item.id === id)
  );

  const handleAddToBag = () => {
    dispatch(
      addToBag({
        id,
        name,
        image,
        description,
        discountedPrice,
        discount,
        price,
      })
    );
  };

  const handleRemoveFromBag = () => {
    dispatch(removeFromBag(id));
  };

  return (
    <div className="col-12">
      <div className="card shadow-sm mb-3 me-5 py-5 px-3 ms-2 d-flex flex-row">
        <img
          src={image}
          className="card-img-left"
          alt="..."
          onClick={() => handleProductClick(id)}
          style={{ cursor: "pointer" , width: "200px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="ms-3">
            <h5
              className="card-title"
              onClick={() => handleProductClick(id)}
              style={{ cursor: "pointer" }}
            >
              {name}
            </h5>
            <p
              className="card-text"
              onClick={() => handleProductClick(id)}
              style={{ cursor: "pointer" }}
            >
              {description}
            </p>
            <p>
              <span style={{ textDecoration: "line-through" }}>Rs.{price}</span>
              <span
                className="fw-bold mx-1"
                onClick={() => handleProductClick(id)}
                style={{ cursor: "pointer" }}
              >
                Rs.{discountedPrice}
              </span>
              <span style={{ color: "#b84444", fontSize: "10px" }}>
                {discount}% OFF
              </span>
            </p>
          </div>
          <div>
            {inBag ? (
              <button onClick={handleRemoveFromBag} className="btn btn-danger">
                Remove <AiFillDelete className="mb-1" />
              </button>
            ) : (
              <button onClick={handleAddToBag} className="btn btn-success ms-3">
                Add to Cart <GrAddCircle className="mb-1 " />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
