import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  FaCoffee,
  FaSearch,
  FaUser,
  FaCartArrowDown,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      
      <div className="logo">
        <FaCoffee className="logo-icon" />

        <div>
          <h2>CoffeeHouse</h2>
          <span>Brewed To Perfection</span>
        </div>
      </div>

      
      <nav>
        <ul className="nav-links">

          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery">
              Gallery
            </NavLink>
          </li>

         <li>
          <NavLink to="/review">
          Reviews
         </NavLink>
          </li>   
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>
      </nav>

     
      <div className="nav-icons">
        <FaSearch />
        <FaUser />
        <FaCartArrowDown />
      </div>

    </header>
  );
}

export default Navbar;