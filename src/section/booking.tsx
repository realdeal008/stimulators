"use client";

import React from "react";
import { motion } from "framer-motion";

const Booking: React.FC = () => {
  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">
        <div className="booking-wrapper">

          {/* Booking Info */}
          <motion.div
            className="booking-info"
            initial={{ opacity: 0, x: -50, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="booking-title-3d">Book Your Transformation</h2>
            <p className="booking-subtitle-3d">
              Ready to experience celebrity-level styling? Schedule your consultation today.
            </p>

            <div className="features-list">
              {[
                {
                  title: "Consultation",
                  desc: "15-minute complimentary consultation to discuss your vision",
                  iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                },
                {
                  title: "Flexible Hours",
                  desc: "Extended salon hours to accommodate busy schedules",
                  iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Premium Experience",
                  desc: "Enjoy luxury amenities during your service",
                  iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.iconPath} />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <p className="feature-title">{feature.title}</p>
                    <p className="feature-description">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            className="booking-form-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,215,0,0.3)" }}
          >
            <form id="booking-form" className="booking-form">
              {[
                { label: "Full Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Phone Number", type: "tel", id: "phone" },
                { label: "Preferred Date", type: "date", id: "date" },
              ].map((field) => (
                <div key={field.id} className="form-group">
                  <label htmlFor={field.id} className="form-label">{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} required className="form-input" />
                </div>
              ))}

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service</label>
                <select id="service" name="service" className="form-input">
                  <option>Signature Cut & Style</option>
                  <option>Color Transformation</option>
                  <option>Bridal Package</option>
                  <option>Extensions</option>
                  <option>Makeup Application</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" className="submit-button">Book Appointment</button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
