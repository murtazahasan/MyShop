import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Women() {
  const [shirts, setShirts] = useState([]);
  const [Bags, setBags] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const shirtResponse = await axios.get(
          "http://localhost:4000/products?category=women-shirts"
        );
        const BagResponse = await axios.get(
          "http://localhost:4000/products?category=women-purse"
        );
        const shoeResponse = await axios.get(
          "http://localhost:4000/products?category=women-shoes"
        );
        setShirts(shirtResponse.data.products);
        setBags(BagResponse.data.products);
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
      {/* Your Carousel Code */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide pt-5"
        data-bs-ride="carousel"
        data-bs-interval="1500"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="bw1.png"
              className="d-block w-100"
              style={{ maxHeight: "80vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="bw2.png"
              className="d-block w-100"
              style={{ maxHeight: "80vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="bw3.png"
              className="d-block w-100"
              style={{ maxHeight: "80vh" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

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

      {/* BagCard */}
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
            Premium Bags
          </h1>
          <div className="row">
            {Bags.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="Bag"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Special Edition Section */}
      <div
        className="container-fluid"
        style={{ backgroundImage: `url("aa2.jpg")` }}
      >
        <div className="px-4 py-5 text-center " style={{ height: "30rem" }}>
          <h1 className="display-5 pt-5 fw-bold text-body-emphasis">
            Special Edition
          </h1>
          <div className="col-lg-6 mx-auto">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="lead mb-4"
            >
              orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                data-aos="zoom-in"
                data-aos-duration="1500"
                type="button"
                className="btn btn-light btn-lg px-4 gap-3"
              >
                SHOP NOW
              </button>
            </div>
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
                  to="/MEN"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  ← MEN
                </NavLink>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
