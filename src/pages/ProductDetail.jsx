import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addToCart,
  removeFromCart,
  saveCartToDatabase,
  removeCartItemFromDatabase,
} from "../reducers/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.find((item) => item.productId === productId)
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        console.log("Product Data:", response.data);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

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
    if (product.stock <= 0) {
      enqueueSnackbar("This product is out of stock.", { variant: "error" });
      return;
    }
    console.log("Adding product with ID:", productId);
    const productData = {
      productId: product._id,
      description: product.description,
      quantity: 1,
      image: product.imageUrl[0],
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercentage: product.discountPercentage,
    };
    dispatch(addToCart(productData));
    dispatch(saveCartToDatabase(productData));
    enqueueSnackbar("Added to cart", { variant: "success" });
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    console.log("Removing product with ID:", productId);
    dispatch(removeFromCart({ productId: productId }));
    dispatch(removeCartItemFromDatabase(productId));
    enqueueSnackbar("Removed from cart", { variant: "error" });
  };

  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-5">No product found.</div>;
  }

  const stockStatus = () => {
    if (product.stock <= 0) {
      return <span className="text-danger">Out of Stock</span>;
    } else if (product.stock <= 4) {
      return <span className="text-warning pe-3">Only Few Left !</span>;
    } else {
      return null;
    }
  };

  return (
    <>
      <h1 className="text-center mb-5 fw-bold" style={{ marginTop: "100px" }}>
        Product Detail Page
      </h1>

      <div className="card p-3 mb-3 me-3 ms-3 position-static">
        <div className="row">
          <div className="col-md-6">
            <div
              id="productCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {product?.imageUrl.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <a href={image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Product Image ${index + 1}`}
                      />
                    </a>
                  </div>
                ))}
              </div>

              <a
                className="carousel-control-prev"
                href="#productCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                className="carousel-control-next"
                href="#productCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>

        <div className="card-body mb-2">
          <h5 className="card-title">{product?.name}</h5>
          <p className="card-text">{product?.description}</p>
          <p>
            <span className="fw-bold">Rs.{product?.discountPrice} </span>
            <span className="mx-1" style={{ textDecoration: "line-through" }}>
              Rs.{product?.price}
            </span>
            <span style={{ color: "#b84444" }}>
              ({product?.discountPercentage}% OFF)
            </span>
          </p>
          {stockStatus()}
          {inCart ? (
            <button onClick={handleRemoveFromCart} className="btn btn-danger">
              Remove <AiFillDelete className="mb-1" />
            </button>
          ) : product.stock > 0 ? (
            <button onClick={handleAddToCart} className="btn btn-success">
              Add to Cart <GrAddCircle className="mb-1" />
            </button>
          ) : null}
        </div>
      </div>
      <button className="btn btn-dark ms-4 mb-5" type="button">
        <NavLink
          style={{ textDecoration: "none" }}
          className="text-white"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← HOME
        </NavLink>
      </button>
    </>
  );
};

export default ProductDetail;
