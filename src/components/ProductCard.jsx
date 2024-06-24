import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  saveCartToDatabase,
  removeCartItemFromDatabase,
} from "../reducers/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { useSnackbar } from "notistack";

const ProductCard = ({
  _id,
  name,
  imageUrl,
  description,
  price,
  discountPrice,
  discountPercentage,
}) => {
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.find((item) => item.productId === _id)
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking on "Add to Cart"
    if (!isAuthenticated) {
      scrollToTop();
      enqueueSnackbar("You need to be signed in to add items to the cart.", {
        variant: "info",
      });
      navigate("/login");
      return;
    }
    console.log("Adding product with ID:", _id);
    const productData = {
      productId: _id,
      quantity: 1,
    };
    dispatch(addToCart(productData));
    dispatch(saveCartToDatabase(productData));
    enqueueSnackbar("Added to cart", { variant: "success" });
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    console.log("Removing product with ID:", _id);
    dispatch(removeFromCart({ productId: _id }));
    dispatch(removeCartItemFromDatabase(_id));
    enqueueSnackbar("Removed from cart", { variant: "error" });
  };

  const handleProductClick = () => {
    navigate(`/products/${_id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="col-md-3 col-6">
      <div
        className="card mb-3"
        onClick={handleProductClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span style={{ textDecoration: "line-through" }}>Rs.{price}</span>
            <span className="fw-bold">Rs.{discountPrice}</span>
            <span style={{ color: "#b84444" }}>
              ({discountPercentage}% OFF)
            </span>
          </p>
          {inCart ? (
            <button onClick={handleRemoveFromCart} className="btn btn-danger">
              Remove <AiFillDelete className="mb-1" />
            </button>
          ) : (
            <button onClick={handleAddToCart} className="btn btn-success">
              Add to Cart <GrAddCircle className="mb-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
