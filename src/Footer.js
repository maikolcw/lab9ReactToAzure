import React from "react";
import './App.css'
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
<footer class="border-top footer text-muted">
        <div class="container">
            &copy; 2022 - FizzBuzzWeb - <Link to="/privacy">Privacy</Link>
        </div>
    </footer>
  </>  
);

export default Footer;