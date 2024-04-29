import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import featuredData from "./all-json/featured.json";
import productsData from "./all-json/bestSelling.json";
import shirtData from "./all-json/shirts.json";
import watchData from "./all-json/watches.json";
import shoeData from "./all-json/shoes.json";
import fshirtData from "./all-json/femaleShirts.json";
import bagData from "./all-json/femaleBags.json";
import fshoeData from "./all-json/femaleShoes.json";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedProduct = getProductById(productId);
        setProduct(selectedProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const getProductById = (id) => {
    const allProducts = [
      ...featuredData,
      ...productsData,
      ...shirtData,
      ...watchData,
      ...shoeData,
      ...bagData,
      ...fshoeData,
      ...fshirtData,
    ];
    const selectedProduct = allProducts.find(
      (product) => product.id === parseInt(id)
    );
    if (!selectedProduct) {
      throw new Error("Product not found");
    }
    return selectedProduct;
  };

  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-5">No product found.</div>;
  }

  const { name, image, description, discountedPrice, discount, price } =
    product;

  // console.log(image)
  return (
    <>
      <h1 className=" text-center mb-5 fw-bold" style={{ marginTop: "100px" }}>
        Product Detail Page
      </h1>
      <div className="card p-3 mb-3 me-3 ms-3 position-static">
        <img
          src={image}
          className="card-img-top w-25"
          alt="..."
        />
        <div className="card-body mb-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span className="fw-bold">Rs.{price} </span>
            <span style={{ textDecoration: "line-through" }}>
              Rs.{discountedPrice}
            </span>
            <span style={{ color: "#b84444" }}> ({discount}% OFF) </span>
          </p>
        </div>
      </div>
      <button className="btn btn-dark ms-4 mb-5" type="button">
        <NavLink
          style={{ textDecoration: "none" }}
          className="text-white"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← HOME
        </NavLink>
      </button>
    </>
  );
};

export default ProductDetail;
