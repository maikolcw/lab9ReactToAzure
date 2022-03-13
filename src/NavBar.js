import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
  <title>Home Page - FizzBuzzWeb</title>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container-fluid">
        <Link className="nav-link" to="/">FizzBuzzWeb</Link>
           
            
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
                    </li>
                </ul>
            
        </div>
    </nav>
  </>
);
export default NavBar;
