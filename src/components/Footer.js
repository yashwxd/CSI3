import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text"><b>Contact us today to embark on a transformative e-learning journey. Discover new horizons of knowledge and growth with our interactive courses</b><br/></p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">Nashik, Maharashtra</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">+91 123456789</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text"><a href="mailto:gaurav.20jics018@jietjodhpur.ac.in">yash.wake9545@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
