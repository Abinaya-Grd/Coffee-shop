import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaCoffee,
  FaSearch,
  FaUser,
  FaCartArrowDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <FaCoffee className="logo-icon" />

        <div>
          <h2>CoffeeHouse</h2>
          <span>Brewed To Perfection</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav active" : "nav"}>

        <ul className="nav-links">

          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" onClick={closeMenu}>
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/review" onClick={closeMenu}>
              Reviews
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch />
        <FaUser />
        <FaCartArrowDown />
      </div>

      {/* Hamburger Menu */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;