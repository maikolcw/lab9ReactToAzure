import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => (
  <>
  <title>Home Page - FizzBuzzWeb</title>
    <nav b-617jbvk8u3 class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div b-617jbvk8u3 class="container-fluid">
        <Link className="navbar-brand" to="/">FizzBuzzWeb</Link>
            <button b-617jbvk8u3 class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span b-617jbvk8u3 class="navbar-toggler-icon"></span>
            </button>
            <div b-617jbvk8u3 class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul b-617jbvk8u3 class="navbar-nav flex-grow-1">
                    <li b-617jbvk8u3 class="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li b-617jbvk8u3 class="nav-item">
                    <Link className="nav-link text-dark" to="/privacy">Privacy</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
);
export default NavBar;
