import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudents } from "../../data/students";
import "./login.css";

const Login = () => {
  const [NID, setNID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const students = await getStudents();
    const student = students.find(
      (s) => s.NID === NID && s.password === password
    );

    if (student) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/students");
    } else {
      setError("There is no user with the same student credentials!");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="row">
        <form
          className="login-form text-center col-lg-6"
          onSubmit={handleLogin}
        >
          <div className="container-fluid col-sm-7">
            <h1 className="mb-4 font-weight-light text-uppercase">Login</h1>
            <div className="form-outline mb-4 ">
              <input
                type="text"
                className="form-control"
                placeholder="NID"
                value={NID}
                onChange={(e) => setNID(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <div className="error mt-3">{error}</div>}
            </div>
            <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-pill shadow col-sm-4"
            >
              Login
            </button>
            </div>
          </div>
        </form>
        <div className="col-lg-6 d-lg-block ">
          <img
            className="img-fluid"
            src="https://images.ctfassets.net/gogvzi849aaj/432s68B1VAyLuZ0WBCNEFx/35fd9ba545167966487b4268e476e073/2_women_studying_with_books_and_laptop_at_university.jpg?fm=webp&q=50"
            alt="Studying"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
