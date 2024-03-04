import React from "react";

function Home() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: `url("bb1.jpg")` }}
      >
        <div className="container-fluid">
          <div className="container-fluid w-100 col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10  col-sm-8 col-lg-6">
                <img
                  src="b.png"
                  className="d-block mx-lg-auto  img-fluid "
                  alt="Home Picture"
                />
              </div>
              <div className="col-lg-6">
                <h1
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                  className="display-2 fw-bold text-body-emphasis lh-1 mb-3"
                >
                  Summer Collection.
                </h1>
                <p data-aos="zoom-in" data-aos-duration="1500" className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    data-aos="zoom-in-down"
                    data-aos-duration="1800"
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    Shop It Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="fw-bolder fs-1 py-2 border-bottom border-2 text-center"
        >
          Featured Products
        </h1>
        <div className="container py-5">
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
                <img src="mw1.jpg" className="card-img-top" alt="..." />
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
                <img src="wt3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">DILLINGER</h5>
                  <p className="card-text">Women WHITE Shirt</p>
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
                  <h5 className="card-title">SEWCHELL</h5>
                  <p className="card-text">
                    Vera  Cotton  Purse
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
                <img src="ms1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PUMA</h5>
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
                <img src="ws3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AXIUM</h5>
                  <p className="card-text">Embellished Kitten Heels</p>
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
                  <h5 className="card-title">AMBRIGO</h5>
                  <p className="card-text">Women's Greenwald Bag</p>
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
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea73" }}
      >
        <div className="container py-4">
          <div
            className="p-5 mb-4 bg-body-tertiary rounded-3"
            style={{ backgroundImage: `url( "j1.jpg" )` }}
          >
            <div className="container-fluid py-5">
              <h1 
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="display-5 text-white fw-bold">Men’s Fashion Finds
              </h1>
              <p className="col-md-8 text-white fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                doloremque suscipit. Laborum autem aperiam omnis esse unde.
                Maxime, officia vero.
              </p>
              <button
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="btn btn-dark btn-lg" type="button">
              Find More
              </button>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div
                className="h-100 p-5  rounded-3"
                style={{ backgroundImage: `url( "j2.jpg" )` }}
              >
                <h2 
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                className="fw-bold">Women’s Fashion Picks
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam molestias voluptas, culpa quos saepe officiis dolorem dolorum.
                </p>
                <button 
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="btn btn-dark" type="button">
                Find More
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="h-100 p-5 bg-body-tertiary text-white border rounded-3"
                style={{ backgroundImage: `url( "j3.jpg" )` }}
              >
                <h2 
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="fw-bold">Our Story</h2>
                <p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt asperiores natus, quos cum dolorum animi voluptatum assumenda.
                </p>
                <button
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="btn  btn-dark" type="button">
                  Find More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <h1 
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="fw-bolder fs-1 py-2 border-bottom border-2 text-center">
          Best Selling Product
        </h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="mw7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">pebble</h5>
                  <p className="card-text">Color Fit 2 Smartwatch</p>
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
                  <p className="card-text">LEATHER SHOULDER BAG</p>
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
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ms4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Campus</h5>
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
                <img src="wb6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">JOSICQUE</h5>
                  <p className="card-text"> LEATHER TOTE BAG</p>
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
                <img src="mw1.jpg" className="card-img-top" alt="..." />
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
            <div className="col-md-3 col-6">
              <div className="card mb-3">
                <img src="ws3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AXIUM</h5>
                  <p className="card-text">Embellished Kitten Heels</p>
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
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea73" }}
      >
        <div
          className="container rounded-4"
          style={{ backgroundImage: `url("pattern1.jpeg")` }}
        >
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">
              Get Started with our app
            </h1>
            <div className="col-lg-6 mx-auto">
              <p 
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="lead mb-4">
                SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL
                BRANDS.
              </p>
              <div className="d-grid d-sm-flex justify-content-sm-center">
                <a href="">
                  <img
                    className="img-fluid h-75"
                    src="play_store.png"
                    alt="playStore img"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </a>
                <a href="">
                  <img
                    className="img-fluid h-75"
                    src="app_store.png"
                    alt="appStore img"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
