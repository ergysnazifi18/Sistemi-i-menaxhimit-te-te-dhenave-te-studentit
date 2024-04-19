import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; 
import logo from '../../student-management-8.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <img className="image" src={logo} alt="" />
      <a className="navbar-brand" href="/login">Student Management System</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-items" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/students">Students List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
