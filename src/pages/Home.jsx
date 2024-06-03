import React from "react";
import featuredData from "../components/all-json/featured.json";
import productsData from "../components/all-json/bestSelling.json";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../reducers/bagSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { RxEyeOpen } from "react-icons/rx";


const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  discountedPrice,
  discount,
}) => {
  const dispatch = useDispatch();
  const inBag = useSelector((state) =>
    state.Bag.items.find((item) => item.id === id)
  );

  const handleAddToBag = () => {
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

  const handleRemoveFromBag = () => {
    dispatch(removeFromBag(id));
  };

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="col-md-3 col-6">
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span style={{ textDecoration: "line-through" }}>Rs.{price}</span>{" "}
            <span className="fw-bold">Rs.{discountedPrice}</span>{" "}
            <span style={{ color: "#b84444" }}>{discount}%</span>
          </p>
          {inBag ? (
            <button onClick={handleRemoveFromBag} className="btn btn-danger">
              Remove from Cart <AiFillDelete className="mb-1" />
            </button>
          ) : (
            <button onClick={handleAddToBag} className="btn btn-success">
              Add to Cart <GrAddCircle className="mb-1 " />
            </button>
          )}
          <button
            onClick={handleProductClick}
            className="btn btn-primary my-2 m-lg-2"
          >
            View Detail <RxEyeOpen className="mb-1 " />
          </button>
        </div>
      </div>
    </div>
  );
};

function ProductDetail() {
  const { productId } = useParams();
  // Fetch product details based on productId from API or other data source

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleMenButtonClick = () => {
    navigate("/MEN");
    scrollToTop();
  };

  const handleWomenButtonClick = () => {
    navigate("/WOMEN");
    scrollToTop();
  };

  const handleAboutButtonClick = () => {
    navigate("/ABOUT");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1 */}
      <div
        className="container-fluid pt-5"
        style={{ backgroundImage: `url("bb1.jpg")` }}
      >
        <div className="container-fluid">
          <div className="container-fluid w-100 col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10  col-sm-8 col-lg-6">
                <img
                  src="b3.png"
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

      {/* Featured Products  */}
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
            {featuredData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* jumbotron section*/}
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
                className="display-5 text-white fw-bold"
              >
                Men’s Fashion Finds
              </h1>
              <p className="col-md-8 text-white fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                doloremque suscipit. Laborum autem aperiam omnis esse unde.
                Maxime, officia vero.
              </p>
              <button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="btn btn-dark btn-lg"
                type="button"
                onClick={handleMenButtonClick}
              >
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
                  className="fw-bold"
                >
                  Women’s Fashion Picks
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam molestias voluptas, culpa quos saepe officiis dolorem
                  dolorum.
                </p>
                <button
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  className="btn btn-dark"
                  type="button"
                  onClick={handleWomenButtonClick}
                >
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
                  className="fw-bold"
                >
                  Our Story
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt asperiores natus, quos cum dolorum animi voluptatum
                  assumenda.
                </p>
                <button
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="btn  btn-dark"
                  type="button"
                  onClick={handleAboutButtonClick}
                >
                  Find More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Selling Product */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="fw-bolder fs-1 py-2 border-bottom border-2 text-center"
        >
          Best Selling Product
        </h1>
        <div className="container py-5">
          <div className="row">
            {productsData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* appstore */}
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
                className="lead mb-4"
              >
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
