import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

// Import the components
import Login from "./Component/Login/login";
import Registration from "./Component/Registration/registration";
import StudentList from "./Component/StudentList/StudentList";
import StudentForm from "./Component/StudentDetails/StudentDetails";
import DeleteConfirmation from "./Component/DeleteConfirmation/DeleteConfirmation";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Welcome to the Student Management System</h1>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/students">Student List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <Routes> {/* Changed from Switch to Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/edit/:id" element={<StudentForm />} />
            <Route path="/delete-confirmation" element={<DeleteConfirmation />} />
            <Route path="/" element={<div>Welcome! Please navigate using the menu above.</div>} />
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown paths */}
          </Routes>
        </main>
        <footer className="footer">
          © 2024 Student Management System. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
