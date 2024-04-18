import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../data/students";

const Register = () => {
  const [NID, setNID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Password validation
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setError(
        "Password must contain at least one letter, one number, and be at least 8 characters long."
      );
      return;
    }

    const result = await addStudent({ NID, name, surname, password });
    if (result.success) {
      setSuccessMessage(
        "You have successfully registered! Redirecting to login..."
      ); // Set success message
      setTimeout(() => {
        navigate("/login"); // Redirect to login after a delay
      }, 2000); // 2 seconds delay
    } else {
      setError(result.message || "Failed to register.");
    }
  };

  const handleCancel = () => {
    navigate("/login"); // Directly return to login on cancel
  };

  return (
    <div>
      <h2>Register in the Student Management System</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form onSubmit={handleRegister}>
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
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
        <button type="submit">Register</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
