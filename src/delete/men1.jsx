import React from "react";
import { NavLink } from "react-router-dom";
import shirtData from "./all-json/shirts.json";
import watchData from "./all-json/watches.json";
import shoeData from "./all-json/shoes.json";

// ShirtCard
const ShirtCard = ({
  name,
  image,
  description,
  price,
  discountedPrice,
  discount,
}) => (
  <div className="col-md-3 col-6">
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-bold">Rs.{price}</span>{" "}
          <span style={{ textDecoration: "line-through" }}>
            Rs.{discountedPrice}
          </span>{" "}
          <span style={{ color: "#b84444" }}> ({discount}% OFF) </span>
        </p>
        <a href="#" className="btn btn-dark">
          Shop Now
        </a>
      </div>
    </div>
  </div>
);

// WatchCard
const WatchCard = ({
  name,
  image,
  description,
  price,
  discountedPrice,
  discount,
}) => (
  <div className="col-md-3 col-6">
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-bold">Rs.{price}</span>{" "}
          <span style={{ textDecoration: "line-through" }}>
            Rs.{discountedPrice}
          </span>{" "}
          <span style={{ color: "#b84444" }}> ({discount}% OFF) </span>
        </p>
        <a href="#" className="btn btn-dark">
          Shop Now
        </a>
      </div>
    </div>
  </div>
);

// ShoeCard
const ShoeCard = ({
  name,
  image,
  description,
  price,
  discountedPrice,
  discount,
}) => (
  <div className="col-md-3 col-6">
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-bold">Rs.{price}</span>{" "}
          <span style={{ textDecoration: "line-through" }}>
            Rs.{discountedPrice}
          </span>{" "}
          <span style={{ color: "#b84444" }}> ({discount}% OFF) </span>
        </p>
        <a href="#" className="btn btn-dark">
          Shop Now
        </a>
      </div>
    </div>
  </div>
);

function Men() {
  return (
    <>
      {/* carousel  */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide pt-5"
        data-bs-ride="carousel"
        data-bs-interval="1500"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="bm1.jpeg"
              className="d-block w-100"
              style={{ maxHeight: "80vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="bm2.jpeg"
              className="d-block w-100"
              style={{ maxHeight: "80vh" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="bm3.jpeg"
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
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="fw-bolder fs-1 py-2 border-bottom border-2 text-center"
        >
          Gentlemen’s Corner: Explore Men’s Styles
        </h1>
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="fw-bolder py-3"
          >
            Premium Shirts
          </h1>
          <div className="row">
            {shirtData.map((product, index) => (
              <ShirtCard key={index} {...product} />
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
            {watchData.map((watch, index) => (
              <WatchCard key={index} {...watch} />
            ))}
          </div>
        </div>
      </div>
      {/* Special Edition */}
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
                className="btn  btn-light   btn-lg px-4 gap-3"
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
            {shoeData.map((shoe, index) => (
              <ShoeCard key={index} {...shoe} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <span className="d-flex gap-3 ps-4 py-3">
              <button
                className="btn  btn-outline-secondary d-inline-flex align-items-center"
                type="button"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                  to="/"
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
                  // target="_blank"
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
