import "./Footer.css";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCoffee,
} from "react-icons/fa";

function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert(`🎉 Thank you for subscribing!\n\nEmail: ${email}`);

    setEmail("");
  };

  return (
    <footer className="footer">

      <div className="footer-container">

       
        <div className="footer-col">

          <div className="footer-logo">
            <FaCoffee />
            <h2>Coffee House</h2>
          </div>

          <p>
            Experience premium coffee crafted with passion.
            Every cup tells a story of freshness, aroma and taste.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

        </div>

       
        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

       
        <div className="footer-col">

          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Coimbatore, Tamil Nadu</p>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaEnvelope /> coffee@gmail.com</p>

        </div>

      
        <div className="footer-col">

          <h3>Newsletter</h3>

          <p>Subscribe to get our latest offers.</p>

          <form className="newsletter" onSubmit={handleSubscribe}>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Coffee House. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;