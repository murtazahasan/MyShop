import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signIn } from "../reducers/authSlice";
import { useSnackbar } from "notistack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      const { user, token } = response.data;
      dispatch(signIn({ user, token }));
      enqueueSnackbar("Login successful", { variant: "success" });
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
      enqueueSnackbar("Invalid email or password", { variant: "error" });
    }
  };

  return (
    <div
      className="container mb-5 d-flex align-items-center justify-content-center vh-100"
      style={{ marginTop: "150px" }}
    >
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?
          <Link to="/sign-up" className=" mx-2 text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
