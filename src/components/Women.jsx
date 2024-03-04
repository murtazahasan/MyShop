import React from "react";
import { Link, NavLink } from "react-router-dom";

function Women() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <h1 
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="fw-bolder fs-1 py-2 border-bottom border-2 text-center">
          Feminine Flair: Explore Women’s Essentials
        </h1>
        <div className="container py-5">
          <h1 
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="fw-bolder py-3">Premium Shirts</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">CLAFOUTIS</h5>
                  <p className="card-text">Women Scalloped Pure Cotton T-shirt</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Corner</h5>
                  <p className="card-text">Women Typography Printed T-shirt</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">DILLINGER</h5>
                  <p className="card-text">Women WHITE T-shirt</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kook N Keech</h5>
                  <p className="card-text">Varsity Printed T-shirt</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">The Souled </h5>
                  <p className="card-text">Women Dyed Cotton T-shirt </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">The Dry State</h5>
                  <p className="card-text">Varsity Printed T-shirt </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">H&M</h5>
                  <p className="card-text">Women Typography </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wt8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ZARA</h5>
                  <p className="card-text">Women SOLID T-shirt </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1 
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="fw-bolder py-3">Premium Bags</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">SEWCHELL</h5>
                  <p className="card-text">
                  FAUX LEATHER TOTE BAG                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AMBRIGO</h5>
                  <p className="card-text">
                  TWEED CROSSBODY BAG                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">VONICA</h5>
                  <p className="card-text">
                  LEATHER SHOULDER BAG                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">SIWOC</h5>
                  <p className="card-text">
                  The Drop Tracy  Canvas  Tote

                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">EVVIMRO</h5>
                  <p className="card-text">
                  The Drop Tracy Large Canvas Detail Straw Tote

                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">JOSICQUE</h5>
                  <p className="card-text">
                  Women's Greenwald Crossbody Bag
                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">RIORA</h5>
                  <p className="card-text">
                  Vera Women's Cotton  Purse
                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="wb8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HAMQUTE</h5>
                  <p className="card-text">
                  The Sak De Young BLACK
                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
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
            className="lead mb-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button 
              data-aos="zoom-in"
              data-aos-duration="1500"
              type="button" className="btn btn-light btn-lg px-4 gap-3">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5 "
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1 
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="fw-bolder border-bottom py-3">Premium Shoes</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Brauch</h5>
                  <p className="card-text">Embellished Block Heels</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">NEEMANS</h5>
                  <p className="card-text">
                  Solid Block BOOTS                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AXIUM</h5>
                  <p className="card-text">Embellished Kitten Heels </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Puma</h5>
                  <p className="card-text">
                  Women blocked Sneakers                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Marc Loire</h5>
                  <p className="card-text">Woven Design Wedge Heel  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Denill</h5>
                  <p className="card-text">
                  Women sevenou Sneakers
                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shoetopia</h5>
                  <p className="card-text">Women Pumps </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">El Paso</h5>
                  <p className="card-text">
                  Women Sneakers                  </p>
                  <p>
                    {" "}
                    <span className="fw-bold">Rs.999</span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.1999
                    </span>{" "}
                    <span style={{ color: "#b84444" }}> (50% OFF) </span>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span className="d-flex gap-3 ps-5   py-5">
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
                target="_blank"
                to="/MEN"
              >
                MEN →
              </NavLink>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Women;
