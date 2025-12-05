"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jessica W.",
    title: "Actress & Model",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1e24589-5c81-4804-a00b-7447a1ed0a3c.png",
    quote:
      '"Manegasm transformed my look for the Oscars and I\'ve never received so many compliments. The attention to detail is unparalleled."',
  },
  {
    name: "Marcus T.",
    title: "TV Host",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c0aab32-6401-4e0c-aff9-3b287bb08dae.png",
    quote:
      '"I\'ve been to hairstylists all over the world, but the team at Manegasm consistently delivers the best cuts I\'ve ever had."',
  },
  {
    name: "Sophia L.",
    title: "Fashion Designer",
    image:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d78e57ec-e756-4698-a208-8cf83cba8211.png",
    quote:
      '"Their ability to translate my vague ideas into stunning reality is why I keep coming back season after season for my shows."',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="title">Client Testimonials</h2>
          <p className="subtitle">What our celebrity clients have to say</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              whileHover={{ rotateY: 5, scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
            >
              <div className="testimonial-user">
                <div className="avatar">
                  <img src={t.image} alt={`Photo of ${t.name}`} />
                </div>
                <div>
                  <h4 className="name">{t.name}</h4>
                  <p className="title">{t.title}</p>
                </div>
              </div>
              <p className="quote">{t.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
