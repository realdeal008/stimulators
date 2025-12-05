"use client";

import React from "react";
import { motion } from "framer-motion";
const wax = "/image/wax.jpg";
const One = "/image/one.jpg";
const two = "/image/two.jpg";
const four = "/image/four.jpg";
const three = "/image/three.jpg";
const six = "/image/six.jpg";

const portfolioItems = [
  { title: "Spikey Med Pixie", description: "Client transformation featuring wet wax", image: wax },
  { title: "Retwist Loc", description: "Maintenance & Designer Styles", image: One },
  { title: "Textured Crop", description: "Custom Red Pixie And Soft Waves", image: two },
  { title: "Pin Curl or Take Out", description: "Soft, ethereal styling for wedding days", image: four },
  { title: "Silk Press", description: "Trim or Smooth Style", image: three },
  { title: "Soft Mohawk With Blonde Highlights", description: "Seamless transition from dark to light", image: six },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Portfolio</h2>
          <p>Browse our gallery of transformations and editorial work</p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
