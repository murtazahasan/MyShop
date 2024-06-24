import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        console.log("Product Data:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-5">No product found.</div>;
  }

  const {
    name,
    imageUrl,
    description,
    price,
    discountPrice,
    discountPercentage,
    stock,
    category,
  } = product;

  return (
    <>
      <h1 className="text-center mb-5 fw-bold" style={{ marginTop: "100px" }}>
        Product Detail Page
      </h1>
      <div className="card p-3 mb-3 me-3 ms-3 position-static">
        <img src={imageUrl} className="card-img-top w-25" alt={name} />
        <div className="card-body mb-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span className="fw-bold">Rs.{discountPrice} </span>
            <span style={{ textDecoration: "line-through" }}>Rs.{price}</span>
            <span style={{ color: "#b84444" }}>
              ({discountPercentage}% OFF)
            </span>
          </p>
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
