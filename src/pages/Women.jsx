import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import shirtData from "../components/all-json/femaleShirts.json";
import bagData from "../components/all-json/femaleBags.json";
import shoeData from "../components/all-json/femaleShoes.json";
import { addToBag, removeFromBag } from "../reducers/bagSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const ProductCard = ({
  id,
  name,
  image,
  description,
  price,
  discountedPrice,
  discount,
  category,
}) => {
  const dispatch = useDispatch();
  const inBag = useSelector((state) =>
    state.Bag.items.find((item) => item.id === id)
  );
  const navigate = useNavigate();

  const handleAddToBag = (e) => {
    e.stopPropagation(); // Prevent event propagation
    dispatch(
      addToBag({
        id,
        name,
        image,
        description,
        discountedPrice,
        discount,
        price,
      })
    );
  };

  const handleRemoveFromBag = (e) => {
    e.stopPropagation(); // Prevent event propagation
    dispatch(removeFromBag(id));
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="col-md-3 col-6">
      <div className="card shadow-sm mb-3">
        <img
          src={image}
          className="card-img-top"
          alt="..."
          onClick={handleProductClick}
          style={{ cursor: "pointer" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            onClick={handleProductClick}
            style={{ cursor: "pointer" }}
          >
            {name}
          </h5>
          <p
            className="card-text"
            onClick={handleProductClick}
            style={{ cursor: "pointer" }}
          >
            {description}
          </p>
          <p>
            <span style={{ textDecoration: "line-through" }}>Rs.{price}</span>
            <span
              className="fw-bold"
              onClick={handleProductClick}
              style={{ cursor: "pointer" }}
            >
              Rs.{discountedPrice}
            </span>
            <span style={{ color: "#b84444" }}>{discount}%</span>
          </p>
          {inBag ? (
            <button onClick={handleRemoveFromBag} className="btn btn-danger">
              Remove <AiFillDelete className="mb-1" />
            </button>
          ) : (
            <button onClick={handleAddToBag} className="btn btn-success">
              Add to Cart <GrAddCircle className="mb-1 " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function Women() {
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
        {/* Your Heading and other elements */}
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="fw-bolder py-3"
          >
            Premium Shirts
          </h1>
          <div className="row">
            {shirtData.map((shirt, index) => (
              <ProductCard key={index} {...shirt} category="shirts" />
            ))}
          </div>
        </div>
      </div>

      {/* BagCard */}
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        {/* Your Heading and other elements */}
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder py-3"
          >
            Premium Bags
          </h1>
          <div className="row">
            {bagData.map((bag, index) => (
              <ProductCard key={index} {...bag} category="bags" />
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
        {/* Your Heading and other elements */}
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
              <ProductCard key={index} {...shoe} category="shoes" />
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
