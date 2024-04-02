import React from "react";
import { NavLink } from "react-router-dom";
import femaleShirts from "./all-json/femaleShirts.json";
import femaleBags from "./all-json/femaleBags.json";
import femaleShoes from "./all-json/femaleShoes.json";

// femaleShirts
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

// femaleBags
const BagCard = ({
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

// femaleShoes
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

function Women() {
  return (
    <>
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

      {/* femaleShirts */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="fw-bolder fs-1 py-2 border-bottom border-2 text-center"
        >
          Feminine Flair: Explore Women’s Essentials
        </h1>
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder py-3"
          >
            Premium Shirts
          </h1>
          <div className="row">
            {femaleShirts.map((shirt, index) => (
              <ShirtCard key={index} {...shirt} />
            ))}
          </div>
        </div>
      </div>

      {/* femaleBags */}
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
            Premium Bags
          </h1>
          <div className="row">
            {femaleBags.map((bag, index) => (
              <BagCard key={index} {...bag} />
            ))}
          </div>
        </div>
      </div>

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

      {/* femaleShoes */}
      <div
        className="container-fluid py-5 "
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
            {femaleShoes.map((shoe, index) => (
              <ShoeCard key={index} {...shoe} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <span className="d-flex gap-3 ps-4   py-3">
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
                  onClick={() => window.scrollTo(0, 0)}
                  to="/MEN"
                >
                  MEN →
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
