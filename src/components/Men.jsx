import React from "react";
import { Link, NavLink } from "react-router-dom";
// #fffdc440

function Men() {
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
          Gentlemen’s Corner: Explore Men’s Styles
        </h1>
        <div className="container py-5">
          <h1 
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="fw-bolder py-3">Premium Shirts</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="mt1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Raymond</h5>
                  <p className="card-text">Pure Cotton Formal Shirt</p>
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
                <img src="mt2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Roadster</h5>
                  <p className="card-text">Loose Fit COTTON T-shirt</p>
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
                <img src="mt3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Cantabil</h5>
                  <p className="card-text">Slim Fit Formal Shirt</p>
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
                <img src="mt4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">INVICTUS</h5>
                  <p className="card-text">Opaque Cotton Formal Shirt</p>
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
                <img src="mt5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">H&M</h5>
                  <p className="card-text">Pure Cotton Regular Fit Tshirt</p>
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
                <img src="mt6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Maniac</h5>
                  <p className="card-text">Men Cotton Pure Cotton T-shirt</p>
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
                <img src="mt7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">BULLMER</h5>
                  <p className="card-text">Solid Round Neck T-shirt</p>
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
                <img src="mt8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Huetrap</h5>
                  <p className="card-text">Pure Cotton Regular Fit Tshirt</p>
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
          className="fw-bolder py-3">Premium Watches</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="mw1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">pebble</h5>
                  <p className="card-text">Men Analogue Watch</p>
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
                <img src="mw2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">CASIO</h5>
                  <p className="card-text">Men Vintage Digital Watch</p>
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
                <img src="mw3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Roadster</h5>
                  <p className="card-text">Men Analogue Watch</p>
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
                <img src="mw4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Titan</h5>
                  <p className="card-text">Men Analogue Watch</p>
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
                <img src="mw5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">MENORA</h5>
                  <p className="card-text">Men Analogue Watch</p>
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
                <img src="mw6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sonata</h5>
                  <p className="card-text">Men Analogue Watch</p>
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
                <img src="mw7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">pebble</h5>
                  <p className="card-text">Color Fit 2 Smartwatch </p>
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
                <img src="mw8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Timex</h5>
                  <p className="card-text">Men Leather Straps Watch </p>
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
              type="button" className="btn  btn-light   btn-lg px-4 gap-3">
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
                <img src="ms1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Puma</h5>
                  <p className="card-text">Men White Leather Sneakers</p>
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
                <img src="ms2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nike</h5>
                  <p className="card-text">Men Mid-Top Basketball Shoes</p>
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
                <img src="ms3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Campus</h5>
                  <p className="card-text">Men Woven Grip -Ed Shoes </p>
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
                <img src="ms4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Red Tape</h5>
                  <p className="card-text">Men Mesh Walking Shoes</p>
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
                <img src="ms5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ASIAN</h5>
                  <p className="card-text">Men Woven Grip -Ed Shoes</p>
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
                <img src="ms6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nike</h5>
                  <p className="card-text">Men Solid Leather Sneakers </p>
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
                <img src="ms7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nike</h5>
                  <p className="card-text">Men Colourblocked Sneakers </p>
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
                <img src="ms8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Reebok</h5>
                  <p className="card-text">Men antique Perforations wenokiat Shoes </p>
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

          <span className="d-flex gap-3 ps-2   py-5">
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
                to="/WOMEN"
              >
                WOMEN →
              </NavLink>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Men;
