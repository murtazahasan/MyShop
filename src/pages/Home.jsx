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
    </>
  );
}

export default Home;
