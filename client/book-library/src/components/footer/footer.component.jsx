import React from "react";
import "./footer.styles.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-data">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <p>Central Library</p>
            <p>123 Library Lane</p>
            <p>New York, NY 10001</p>
            <p>USA</p>
            <p>
              <b>Email:</b> contact@centrallibrary.org
            </p>
          </div>
          <div className="usefull-links">
            <h1>Useful Links</h1>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="librarian-details">
            <h1>Library Director</h1>
            <p>Jane Smith</p>
            <p>Master of Library Science</p>
            <p>Contact: +1 123-456-7890</p>
          </div>
        </div>
        <div className="contact-social">
          <a
            href="https://twitter.com"
            className="social-icon"
            aria-label="Twitter"
          >
            <TwitterIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href="https://linkedin.com"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href="https://telegram.org"
            className="social-icon"
            aria-label="Telegram"
          >
            <TelegramIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href="https://instagram.com"
            className="social-icon"
            aria-label="Instagram"
          >
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
      <div className="copyright-details">
        <p className="footer-copyright">
          &#169; {new Date().getFullYear()} Central Library. All rights
          reserved.
          <br />
          <span>Muhammad Hamza Azhar</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
