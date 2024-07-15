import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/products/search?query=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <div className="mt-5">Loading...</div>;
  }

  if (results.length === 0) {
    return (
      <>
        <div className="mb-5 mx-1 fw-medium" style={{ marginTop: "140px" }}>
          No products found.
        </div>
        <button
          className="btn btn-dark d-inline-flex align-items-center mx-2 my-3 "
          type="button"
        >
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            ← HOME
          </Link>
        </button>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center mb-5 fw-bold" style={{ marginTop: "140px" }}>
        Search Results
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {results.map((product) => (
          <div
            key={product._id}
            className="card p-3 mb-3 me-3 ms-3 position-static"
          >
            <img
              src={product.imageUrl}
              className="card-img-top w-25"
              alt={product.name}
            />
            <div className="card-body mb-2">
              <h5 className="card-title">{product.name}</h5>
              <p className=" ">{product.description}</p>
              <Link to={`/products/${product._id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-dark d-inline-flex align-items-center mx-2 my-3"
        type="button"
      >
        <Link
          style={{ textDecoration: "none" }}
          className="text-light"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← HOME
        </Link>
      </button>
    </>
  );
};

export default SearchResults;
