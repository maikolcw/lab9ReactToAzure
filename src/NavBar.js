import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => (
  <>
  <title>Home Page - FizzBuzzWeb</title>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container-fluid">
        <Link className="navbar-brand" to="/">FizzBuzzWeb</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
);
export default NavBar;
