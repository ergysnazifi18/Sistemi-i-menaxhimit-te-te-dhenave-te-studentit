import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudents } from "../../data/students"; // Import the mock data fetching function

const Login = () => {
  const [NID, setNID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Used for navigation after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    const students = await getStudents(); // Fetch data
    const student = students.find(
      (s) => s.NID === NID && s.password === password
    );

    if (student) {
      localStorage.setItem("isLoggedIn", "true"); // Set the flag when logged in
      navigate("/students"); // Navigate to the student list page
    } else {
      setError("There is no user with the same student credentials!");
    }
  };

  return (
    <div>
      <h2>Login to the Student Management System</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Student NID:</label>
          <input
            type="text"
            value={NID}
            onChange={(e) => setNID(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
