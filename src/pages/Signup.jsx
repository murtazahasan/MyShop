import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:4000/user/signup", {
        email,
        password,
        username,
      });
      enqueueSnackbar("Sign up successful! Please sign in.", {
        variant: "success",
      });
      navigate("/login");
    } catch (err) {
      enqueueSnackbar(err.response.data.message || "Sign up failed", {
        variant: "error",
      });
    }
  };

  return (
    <div className="container mb-5 mx-2" style={{ marginTop: "131px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Sign Up</h2>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button onClick={handleSignUp} className="btn btn-primary w-100">
            Sign Up
          </button>
          <p className="mt-4">
            Already have an account?
            <Link to="/login" className=" mx-2 text-primary">
            Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
