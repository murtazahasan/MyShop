import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Men() {
  const [shirts, setShirts] = useState([]);
  const [watches, setWatches] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const shirtResponse = await axios.get(
          "http://localhost:4000/products?category=men-shirts"
        );
        const watchResponse = await axios.get(
          "http://localhost:4000/products?category=men-watches"
        );
        const shoeResponse = await axios.get(
          "http://localhost:4000/products?category=men-shoes"
        );
        setShirts(shirtResponse.data.products);
        setWatches(watchResponse.data.products);
        setShoes(shoeResponse.data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* ShirtCard */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="fw-bolder py-3"
          >
            Premium Shirts
          </h1>
          <div className="row">
            {shirts.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="shirt"
              />
            ))}
          </div>
        </div>
      </div>

      {/* WatchCard */}
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder py-3"
          >
            Premium Watches
          </h1>
          <div className="row">
            {watches.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="watch"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ShoeCard */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder border-bottom py-3"
          >
            Premium Shoes
          </h1>
          <div className="row">
            {shoes.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="shoe"
              />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <span className="d-flex gap-3 ps-4 py-3">
              <button
                className="btn btn-outline-secondary d-inline-flex align-items-center"
                type="button"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  ← HOME
                </NavLink>
              </button>
              <button
                className="btn btn-dark d-inline-flex align-items-center"
                type="button"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="text-white"
                  to="/WOMEN"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  WOMEN →
                </NavLink>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Men;
