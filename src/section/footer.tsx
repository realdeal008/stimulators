"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">MANEGASM</h3>
            <p className="footer-description">
              Celebrity-level hair artistry and modeling services.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-icon">
                {/* Twitter Icon */}
                <svg className="footer-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.94 12.94 0 013 2.1a4.51 4.51 0 001.39 6A4.48 4.48 0 012 7.14v.05a4.52 4.52 0 003.64 4.43 4.52 4.52 0 01-2.03.08 4.52 4.52 0 004.21 3.13A9.05 9.05 0 012 18.58 12.79 12.79 0 008.29 20c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.36-.02-.54A8.18 8.18 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="footer-icon">
                {/* Instagram Icon */}
                <svg className="footer-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.5-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                </svg>
              </a>
              <a href="#" className="footer-icon">
                {/* Facebook Icon */}
                <svg className="footer-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.073C22 6.504 17.523 2 12 2S2 6.504 2 12.073c0 5.024 3.657 9.193 8.438 9.877v-6.987h-2.54V12.07h2.54V9.797c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.845h2.773l-.443 2.893h-2.33v6.987C18.343 21.266 22 17.097 22 12.073Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Hair Cutting</a></li>
              <li><a href="#">Coloring</a></li>
              <li><a href="#">Extensions</a></li>
              <li><a href="#">Bridal Styling</a></li>
              <li><a href="#">Makeup Artistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <address className="footer-address">
              <p>Washington, DC 20007</p>
              <p>United States</p>
              <p>Phone: +1 (240) 353-3920 </p>
              <p>Email: Manegasm2020@gmail.com</p>
            </address>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© 2025 MANEGASM. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
