import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <nav className="nav">
      <NavLink className="nav-link active" to="/">Home</NavLink>
      <NavLink className="nav-link active" to="/login">Login</NavLink>
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </nav>
  </div>
);


export default Header;
