import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Men() {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const shirtResponse = await axios.get(
          "http://localhost:4000/products?category=men-shirts"
        );
        setShirts(shirtResponse.data.products);
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

  // Extract the desired shirts
  const selectedShirts = shirts.slice(1, 2).concat(shirts.slice(2, 3));

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
            {selectedShirts.map((product) => (
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
    </>
  );
}

export default Men;
