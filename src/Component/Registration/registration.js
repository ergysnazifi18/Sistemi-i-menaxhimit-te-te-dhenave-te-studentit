import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../data/students";
import "./registration.css";

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

    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setError(
        "Password must contain at least one letter, one number, and be at least 8 characters long."
      );
      setTimeout(() => setError(""), 3000);
      return;
    }

    const result = await addStudent({ NID, name, surname, password });
    if (result.success) {
      setSuccessMessage(
        "You have successfully registered! Redirecting to login..."
      );
      setTimeout(() => {
        navigate("/students");
      }, 2000);
    } else {
      setError(result.message || "Failed to register.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
<div className="registration_container mt-5 justify-content-center">
            <h2 className="text-center">Register in the Student Management System</h2>
            {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Student NID:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={NID}
                        onChange={(e) => setNID(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mx-2">Register</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
</div>
  );
};

export default Register;
