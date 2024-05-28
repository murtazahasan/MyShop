import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center my-5 pb-3 pt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header py-3">
              <h1 className="mb-0">Log In</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn mt-3 btn-primary btn-block"
                >
                  Log In
                </button>
              </form>
              <p className="mt-3">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
