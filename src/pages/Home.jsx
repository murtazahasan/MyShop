import React, { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [FeaturedProduct, setFeaturedProduct] = useState([]);
  const [BestSelling, setBestselling] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const FeaturedProduct = await axios.get(
          "http://localhost:4000/products?category=featured-product"
        );
        const BestSelling = await axios.get(
          "http://localhost:4000/products?category=best-selling"
        );

        setFeaturedProduct(FeaturedProduct.data.products);
        setBestselling(BestSelling.data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        className="container-fluid py-4"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder py-3"
          >
            Featured Products
          </h1>
          <div className="row">
            {FeaturedProduct.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="featured-product"
              />
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
        className="container-fluid py-4"
        style={{ backgroundColor: "#eaeaea9e" }}
      >
        <div className="container py-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fw-bolder py-3"
          >
            Best Selling Product
          </h1>
          <div className="row">
            {BestSelling.map((product) => (
              <ProductCard
                key={product._id}
                {...product}
                id={product._id}
                type="best-selling"
              />
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
