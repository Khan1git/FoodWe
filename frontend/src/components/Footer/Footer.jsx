import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section about">
          <h2>
            <span class="logo">FRESHEAT</span>
          </h2>
          <p>
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis.
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Gallery</a>
            </li>
            <li>
              <a href="#">Our Blogs</a>
            </li>
            <li>
              <a href="#">FAQ'S</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="footer-section menu">
          <h2>Our Menu</h2>
          <ul>
            <li>
              <a href="#">Burger King</a>
            </li>
            <li>
              <a href="#">Pizza King</a>
            </li>
            <li>
              <a href="#">Fresh Food</a>
            </li>
            <li>
              <a href="#">Vegetable</a>
            </li>
            <li>
              <a href="#">Desserts</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <strong>Monday – Friday:</strong> 8am – 4pm
          </p>
          <p>
            <strong>Saturday:</strong> 8am – 12pm
          </p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
          <label>
            <input type="checkbox" /> I agree to the{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© All Copyright 2024 by FreshEat</p>
        <div class="bottom-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
