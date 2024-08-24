import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import featuredData from "../components/all-json/featured.json";
import productsData from "../components/all-json/bestSelling.json";
import shirtData from "../components/all-json/shirts.json";
import watchData from "../components/all-json/watches.json";
import shoeData from "../components/all-json/shoes.json";
import fshirtData from "../components/all-json/femaleShirts.json";
import bagData from "../components/all-json/femaleBags.json";
import fshoeData from "../components/all-json/femaleShoes.json";
import ProductCard from "../components/ProductCard";

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

  const { id, name, image, description, discountedPrice, discount, price } =
    product;

  return (
    <>
      <h1 className="text-center mb-5 fw-bold" style={{ marginTop: "100px" }}>
        Product Detail Page
      </h1>
      <ProductCard
        id={id}
        image={image}
        name={name}
        description={description}
        price={price}
        discountedPrice={discountedPrice}
        discount={discount}
      />
      <button className="btn btn-dark ms-4 mt-5 mb-5" type="button">
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
