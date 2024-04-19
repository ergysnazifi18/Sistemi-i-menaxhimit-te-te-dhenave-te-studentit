import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/login";
import Registration from "./Component/Registration/registration";
import Navbar from "./Component/Navbar/navbar";
import StudentList from "./Component/StudentList/studentList";
import StudentForm from "./Component/StudentDetails/studentDetails";
import DeleteConfirmation from "./Component/DeleteConfirmation/deleteConfirmation";

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
        <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/edit/:id" element={<StudentForm />} />
            <Route path="/delete-confirmation/:id" element={<DeleteConfirmation />} />
            <Route path="/" element={<div>Welcome! Please navigate using the menu above.</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
        <footer className="footer d-flex justify-content-center">
          Student Management System
        </footer>
    </Router>
  );
}

export default App;
